"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 100, damping: 30 })
  const display = useTransform(spring, (v) => `$${Math.abs(Math.round(v)).toLocaleString()}`)
  const [displayValue, setDisplayValue] = useState(`$${Math.abs(Math.round(value)).toLocaleString()}`)

  useEffect(() => {
    spring.set(value)
    const unsubscribe = display.on("change", setDisplayValue)
    return () => unsubscribe()
  }, [value, spring, display])

  return <span>{displayValue}</span>
}

export function LasikCalculatorBatigoz() {
  const LASIK_PRICE = 3000
  const LIFE_EXPECTANCY = 80

  const [age, setAge] = useState(26)
  const [glassesPerYear, setGlassesPerYear] = useState(1)
  const [glassesPrice, setGlassesPrice] = useState(100)
  const [boxesPerYear, setBoxesPerYear] = useState(4)
  const [boxPrice, setBoxPrice] = useState(40)

  const yearsRemaining = Math.max(0, LIFE_EXPECTANCY - age)
  const annualCost = glassesPerYear * glassesPrice + boxesPerYear * boxPrice
  const lifetimeCost = annualCost * yearsRemaining

  const diff = lifetimeCost - LASIK_PRICE
  const savingsLabel = diff >= 0 ? "Potential lifetime savings" : "Additional cost vs. correction"

  return (
    <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-5 lg:gap-6 items-stretch">
      <div className="flex flex-col gap-4">
        <SliderControl
          label="Your age"
          sublabel="(Est. life expectancy: 80 yrs)"
          value={age}
          onChange={setAge}
          min={18}
          max={80}
          step={1}
          displayValue={age.toString()}
        />

        <SliderControl
          label="Glasses purchased per year"
          value={glassesPerYear}
          onChange={setGlassesPerYear}
          min={0}
          max={10}
          step={1}
          displayValue={glassesPerYear.toString()}
        />

        <SliderControl
          label="Price of glasses"
          value={glassesPrice}
          onChange={setGlassesPrice}
          min={0}
          max={1200}
          step={10}
          displayValue={`$${glassesPrice}`}
        />

        <SliderControl
          label="Contact lens boxes per year"
          value={boxesPerYear}
          onChange={setBoxesPerYear}
          min={0}
          max={60}
          step={1}
          displayValue={boxesPerYear.toString()}
        />

        <SliderControl
          label="Price per contact lens box"
          value={boxPrice}
          onChange={setBoxPrice}
          min={0}
          max={250}
          step={5}
          displayValue={`$${boxPrice}`}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div
          className="absolute -inset-2 rounded-[24px] blur-xl opacity-50"
          style={{ backgroundColor: "rgba(2, 157, 218, 0.2)" }}
        />

        <div
          className="relative rounded-[24px] p-5 md:p-6 flex flex-col justify-between h-full min-h-[340px] lg:min-h-[360px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #003775 0%, #0B4F8A 60%, #0D5F95 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(2, 157, 218, 0.15)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-lg"
            style={{ backgroundColor: "rgba(2, 157, 218, 0.1)" }}
          />

          <div className="relative z-10 flex flex-col justify-center gap-6 h-full">
            <div className="text-center">
              <div className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
                Total cost (glasses/contacts)
              </div>
              <div className="text-3xl md:text-4xl font-bold leading-none" style={{ color: "#029DDA" }}>
                <AnimatedNumber value={lifetimeCost} />
              </div>
              <div className="text-white/50 text-xs md:text-sm mt-2">
                Over {yearsRemaining} years
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="text-center">
              <div className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
                Average treatment price
              </div>
              <div className="text-3xl md:text-4xl font-bold leading-none" style={{ color: "#029DDA" }}>
                ${LASIK_PRICE.toLocaleString()}
              </div>
              <div className="text-white/50 text-xs md:text-sm mt-2">
                One-time investment
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="text-center">
              <div className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
                {savingsLabel}
              </div>
              <motion.div
                className="text-4xl md:text-5xl font-bold leading-none"
                style={{ color: diff >= 0 ? "#029DDA" : "#ff9060" }}
                key={diff}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedNumber value={Math.abs(diff)} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

type SliderControlProps = {
  label: string
  sublabel?: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  displayValue: string
}

function SliderControl({
  label,
  sublabel,
  value,
  onChange,
  min,
  max,
  step,
  displayValue,
}: SliderControlProps) {
  const sliderRef = useRef<HTMLInputElement>(null)
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div
      className="p-4 rounded-[20px] transition-all hover:shadow-md"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        border: "1px solid rgba(2, 157, 218, 0.15)",
      }}
    >
      <div className="flex justify-between items-baseline gap-3 mb-3">
        <div className="font-semibold text-[15px] md:text-base leading-snug" style={{ color: "#003775" }}>
          {label}
          {sublabel && (
            <span className="text-xs md:text-sm font-normal ml-2" style={{ color: "#5A7A8F" }}>
              {sublabel}
            </span>
          )}
        </div>
        <div
          className="text-lg md:text-xl font-bold min-w-[70px] text-right shrink-0"
          style={{ color: "#029DDA" }}
        >
          {displayValue}
        </div>
      </div>

      <div className="relative">
        <input
          ref={sliderRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #029DDA 0%, #029DDA ${percentage}%, #C0D8E8 ${percentage}%, #C0D8E8 100%)`,
          }}
        />
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 55, 117, 0.2), 0 0 0 3px #029DDA;
            transition: all 0.2s ease;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.08);
            box-shadow: 0 4px 12px rgba(0, 55, 117, 0.25), 0 0 0 4px #029DDA;
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 55, 117, 0.2), 0 0 0 3px #029DDA;
            transition: all 0.2s ease;
          }
          input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.08);
            box-shadow: 0 4px 12px rgba(0, 55, 117, 0.25), 0 0 0 4px #029DDA;
          }
        `}</style>
      </div>
    </div>
  )
}
