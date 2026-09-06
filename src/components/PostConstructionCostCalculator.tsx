"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Calculator, Check, Info, Phone, Send } from "lucide-react";
import { PhoneLink } from "@/components/ui";
import { cn } from "@/lib/utils";
import { trackZaloClick } from "@/lib/gtag";

type ConditionLevel = "basic" | "medium" | "heavy";
type SpecialOption = "glass" | "residue" | "furniture" | "pool" | "outdoor" | "debris" | "none";
type PoolChoice = "house-only" | "around" | "full" | "unsure";

const BASE_PRICE_PER_M2 = 15000;
const EXTRA_PERCENT_CAP = 0.3;
const PHONE_HREF = "tel:0934997265";
const ZALO_HREF = "https://zalo.me/0934997265";

const quickAreas = [
  { label: "Dưới 70m²", value: 60 },
  { label: "70-100m²", value: 85 },
  { label: "100-150m²", value: 125 },
  { label: "Trên 150m²", value: 180 },
];

const conditions: Array<{
  value: ConditionLevel;
  title: string;
  description: string;
  multiplier: number;
}> = [
  {
    value: "basic",
    title: "Cơ bản",
    description: "Bụi xây dựng và vết bẩn thông thường.",
    multiplier: 1,
  },
  {
    value: "medium",
    title: "Khá bẩn",
    description: "Có sơn, keo hoặc xi măng bám ở một số khu vực.",
    multiplier: 1.1,
  },
  {
    value: "heavy",
    title: "Cần xử lý nhiều",
    description: "Nhiều sơn, keo, xi măng hoặc vết bám khó.",
    multiplier: 1.2,
  },
];

const specialOptions: Array<{ value: SpecialOption; label: string; percent: number }> = [
  { value: "glass", label: "Nhiều cửa / vách kính", percent: 0.05 },
  { value: "residue", label: "Nhiều sơn, keo, xi măng bám", percent: 0.1 },
  { value: "furniture", label: "Đã có nhiều nội thất", percent: 0.05 },
  { value: "pool", label: "Có hồ bơi riêng", percent: 0 },
  { value: "outdoor", label: "Có sân vườn / sân ngoài trời lớn", percent: 0.05 },
  { value: "debris", label: "Còn nhiều rác / xà bần xây dựng", percent: 0.1 },
  { value: "none", label: "Không có gì đặc biệt / Tôi chưa rõ", percent: 0 },
];

const poolChoices: Array<{ value: PoolChoice; label: string; percent: number }> = [
  { value: "house-only", label: "Không, chỉ vệ sinh nhà", percent: 0 },
  { value: "around", label: "Có, khu vực xung quanh hồ", percent: 0.05 },
  { value: "full", label: "Có, cần vệ sinh cả hồ", percent: 0.1 },
  { value: "unsure", label: "Tôi chưa rõ", percent: 0.05 },
];

function pushCalculatorEvent(event: string, payload: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

function formatVnd(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

function roundToNearest(value: number, nearest = 50000) {
  return Math.round(value / nearest) * nearest;
}

function getAreaNumber(area: string) {
  const parsed = Number(area);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function PostConstructionCostCalculator() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState("");
  const [condition, setCondition] = useState<ConditionLevel>("basic");
  const [specials, setSpecials] = useState<SpecialOption[]>(["none"]);
  const [poolChoice, setPoolChoice] = useState<PoolChoice>("unsure");
  const [areaError, setAreaError] = useState("");
  const [completed, setCompleted] = useState(false);
  const startedRef = useRef(false);
  const reachedStepsRef = useRef(new Set([1]));

  const areaNumber = getAreaNumber(area);
  const result = useMemo(() => {
    const selectedCondition = conditions.find((item) => item.value === condition) ?? conditions[0];
    const base = areaNumber * BASE_PRICE_PER_M2;
    const conditionAdjusted = base * selectedCondition.multiplier;
    const optionExtra = specials.includes("none")
      ? 0
      : specials.reduce((total, option) => {
          const match = specialOptions.find((item) => item.value === option);
          return total + (match?.percent ?? 0);
        }, 0);
    const poolExtra = specials.includes("pool")
      ? poolChoices.find((item) => item.value === poolChoice)?.percent ?? 0.05
      : 0;
    const extraPercent = Math.min(optionExtra + poolExtra, EXTRA_PERCENT_CAP);
    const estimate = Math.round(conditionAdjusted * (1 + extraPercent));
    const lower = roundToNearest(estimate * 0.94);
    const upper = Math.max(lower + 50000, roundToNearest(estimate * 1.06));

    return {
      estimate,
      lower,
      upper,
      base,
      conditionMultiplier: selectedCondition.multiplier,
      extraPercent,
    };
  }, [areaNumber, condition, specials, poolChoice]);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    pushCalculatorEvent("calculator_start");
  };

  const goToStep = (nextStep: number) => {
    setStep(nextStep);
    if (!reachedStepsRef.current.has(nextStep)) {
      reachedStepsRef.current.add(nextStep);
      pushCalculatorEvent(`calculator_step_${nextStep}`);
    }
  };

  const handleAreaNext = () => {
    markStarted();
    if (areaNumber <= 0) {
      setAreaError("Vui lòng nhập diện tích ước tính để tiếp tục.");
      return;
    }
    setAreaError("");
    goToStep(2);
  };

  const handleConditionNext = () => {
    markStarted();
    goToStep(3);
  };

  const handleQuickArea = (value: number) => {
    markStarted();
    setArea(String(value));
    setAreaError("");
  };

  const handleSpecialToggle = (option: SpecialOption) => {
    markStarted();
    setCompleted(false);
    setSpecials((current) => {
      if (option === "none") return ["none"];
      const withoutNone = current.filter((item) => item !== "none");
      const next = withoutNone.includes(option)
        ? withoutNone.filter((item) => item !== option)
        : [...withoutNone, option];
      return next.length > 0 ? next : ["none"];
    });
  };

  const handleComplete = () => {
    markStarted();
    setCompleted(true);
    pushCalculatorEvent("calculator_complete", {
      estimated_value: result.estimate,
      area_m2: areaNumber,
      condition_level: condition,
    });
  };

  const handleResultCallClick = () => {
    pushCalculatorEvent("calculator_call_click", {
      estimated_value: result.estimate,
    });
  };

  return (
    <section
      id="uoc-tinh-chi-phi"
      aria-labelledby="post-construction-calculator-title"
      className="scroll-mt-24 bg-white py-16"
    >
      <div className="container max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:items-start">
          <div className="rounded-2xl border border-emerald-100 bg-[#F8FAF9] p-5 shadow-sm sm:p-7 lg:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2D8B3A] text-white">
                <Calculator size={22} />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-emerald-700">
                  Giá tham khảo
                </p>
                <h2
                  id="post-construction-calculator-title"
                  className="text-2xl font-extrabold leading-tight text-gray-900 md:text-3xl"
                >
                  Ước tính chi phí vệ sinh sau xây dựng
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                  Nhận mức giá tham khảo trong khoảng 30 giây. Giá chính thức được xác nhận sau khi khảo sát thực tế.
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-2" aria-label="Tiến trình ước tính chi phí">
              {["Diện tích", "Tình trạng", "Đặc điểm"].map((label, index) => {
                const itemStep = index + 1;
                const isActive = itemStep === step;
                const isDone = itemStep < step || completed;
                return (
                  <div
                    key={label}
                    className={cn(
                      "rounded-lg border px-2 py-2 text-center text-xs font-bold transition-colors",
                      isActive || isDone
                        ? "border-emerald-200 bg-white text-emerald-800"
                        : "border-gray-200 bg-white/60 text-gray-500",
                    )}
                  >
                    <span className="block text-[11px] text-gray-400">Bước {itemStep}</span>
                    {label}
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-6">
              {step === 1 && (
                <div>
                  <label htmlFor="construction-area" className="block text-base font-extrabold text-gray-900">
                    Diện tích công trình khoảng bao nhiêu?
                  </label>
                  <div className="relative mt-4">
                    <input
                      id="construction-area"
                      type="number"
                      min="1"
                      inputMode="numeric"
                      value={area}
                      onFocus={markStarted}
                      onChange={(event) => {
                        markStarted();
                        setArea(event.target.value);
                        setAreaError("");
                        setCompleted(false);
                      }}
                      aria-describedby={areaError ? "construction-area-error" : undefined}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 pr-14 text-lg font-bold text-gray-900 outline-none transition focus:border-[#2D8B3A] focus:ring-2 focus:ring-[#2D8B3A]/20"
                      placeholder="Ví dụ: 100"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500">
                      m²
                    </span>
                  </div>
                  {areaError && (
                    <p id="construction-area-error" className="mt-2 text-sm font-semibold text-red-600">
                      {areaError}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2" aria-label="Chọn nhanh diện tích">
                    {quickAreas.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleQuickArea(item.value)}
                        className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/30"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleAreaNext}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2D8B3A] px-5 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#1E6B2A] focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/40 sm:w-auto"
                  >
                    Tiếp tục
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <p className="text-base font-extrabold text-gray-900">Tình trạng công trình hiện tại?</p>
                  <div className="mt-4 grid gap-3" role="group" aria-label="Tình trạng công trình hiện tại">
                    {conditions.map((item) => {
                      const selected = condition === item.value;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => {
                            markStarted();
                            setCondition(item.value);
                            setCompleted(false);
                          }}
                          className={cn(
                            "rounded-xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/30",
                            selected
                              ? "border-[#2D8B3A] bg-emerald-50 shadow-sm"
                              : "border-gray-200 bg-white hover:border-emerald-200",
                          )}
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="font-extrabold text-gray-900">{item.title}</span>
                            {selected && (
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2D8B3A] text-white">
                                <Check size={15} />
                              </span>
                            )}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-gray-600">{item.description}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                    <button
                      type="button"
                      onClick={() => goToStep(1)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/30"
                    >
                      <ArrowLeft size={18} />
                      Quay lại
                    </button>
                    <button
                      type="button"
                      onClick={handleConditionNext}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D8B3A] px-5 py-3 font-bold text-white transition hover:bg-[#1E6B2A] focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/40"
                    >
                      Tiếp tục
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <p className="text-base font-extrabold text-gray-900">Công trình có đặc điểm nào sau đây?</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {specialOptions.map((item) => {
                      const checked = specials.includes(item.value);
                      return (
                        <label
                          key={item.value}
                          className={cn(
                            "flex min-h-[58px] cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm font-semibold transition focus-within:ring-2 focus-within:ring-[#2D8B3A]/30",
                            checked ? "border-[#2D8B3A] bg-emerald-50 text-emerald-900" : "border-gray-200 bg-white text-gray-700",
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleSpecialToggle(item.value)}
                            className="h-4 w-4 rounded border-gray-300 text-[#2D8B3A] focus:ring-[#2D8B3A]"
                          />
                          <span>{item.label}</span>
                        </label>
                      );
                    })}
                  </div>

                  {specials.includes("pool") && (
                    <fieldset className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                      <legend className="px-1 text-sm font-extrabold text-emerald-900">
                        Bạn có cần vệ sinh khu vực hồ bơi không?
                      </legend>
                      <div className="mt-3 grid gap-2">
                        {poolChoices.map((item) => (
                          <label
                            key={item.value}
                            className="flex cursor-pointer items-center gap-3 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-700"
                          >
                            <input
                              type="radio"
                              name="pool-cleaning"
                              value={item.value}
                              checked={poolChoice === item.value}
                              onChange={() => {
                                markStarted();
                                setPoolChoice(item.value);
                                setCompleted(false);
                              }}
                              className="h-4 w-4 border-gray-300 text-[#2D8B3A] focus:ring-[#2D8B3A]"
                            />
                            {item.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/30"
                    >
                      <ArrowLeft size={18} />
                      Quay lại
                    </button>
                    <button
                      type="button"
                      onClick={handleComplete}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D8B3A] px-5 py-3 font-bold text-white transition hover:bg-[#1E6B2A] focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/40"
                    >
                      Xem chi phí dự kiến
                      <Calculator size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div
              aria-live="polite"
              className={cn(
                "mt-5 rounded-xl border p-5 transition",
                completed ? "border-emerald-200 bg-white shadow-sm" : "border-dashed border-gray-200 bg-white/60",
              )}
            >
              {completed ? (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Chi phí dự kiến</p>
                  <p className="mt-2 text-3xl font-black leading-tight text-gray-900 md:text-4xl">
                    Khoảng {formatVnd(result.lower)} - {formatVnd(result.upper)}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    Đây là mức giá tham khảo dựa trên thông tin bạn cung cấp. Giá chính thức phụ thuộc tình trạng thực tế
                    của sàn, kính, sơn/keo/xi măng và các hạng mục cần xử lý.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <PhoneLink
                      href={PHONE_HREF}
                      onClick={handleResultCallClick}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D8B3A] px-5 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#1E6B2A] focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/40"
                    >
                      <Phone size={18} />
                      Gọi để chốt báo giá
                    </PhoneLink>
                    <a
                      href={ZALO_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        pushCalculatorEvent("calculator_send_photo_click", {
                          estimated_value: result.estimate,
                        });
                        trackZaloClick();
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-200 px-5 py-4 font-bold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/30"
                    >
                      <Send size={18} />
                      Gửi ảnh để báo giá chính xác hơn
                    </a>
                  </div>
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-gray-600">
                  Hoàn thành 3 bước ngắn để xem khoảng giá tham khảo trước khi gọi.
                </p>
              )}
            </div>
          </div>

          <aside className="rounded-2xl border border-amber-100 bg-amber-50 p-5 text-amber-950 sm:p-6 lg:sticky lg:top-24">
            <div className="flex items-center gap-2">
              <Info size={20} className="text-amber-700" />
              <h3 className="text-lg font-extrabold">Vì sao giá có thể khác nhau?</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>Diện tích càng lớn thì tổng chi phí thay đổi theo số m² thực tế.</li>
              <li>Sơn, xi măng, keo silicon bám nhiều cần thêm thời gian và hóa chất xử lý.</li>
              <li>Nhiều kính, nội thất, sân vườn hoặc khu vực ngoài trời làm tăng khối lượng việc.</li>
              <li>Hồ bơi và hạng mục đặc biệt cần khảo sát riêng để tránh báo thiếu.</li>
            </ul>
            <p className="mt-5 rounded-xl bg-white px-4 py-3 text-sm font-bold leading-relaxed text-emerald-900">
              Nhà Xanh khảo sát miễn phí và xác nhận giá trước khi thi công.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
