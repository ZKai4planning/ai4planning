"use client"
 
import { useState } from "react"
import { motion } from "framer-motion"
import { ClientLogin } from "@/components/clientloginform"
 
/* ================= TYPES ================= */
 
export interface Service {
  id: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  features: string[]
  cta: string
  label: string
  icon?: string // ✅ FIX: optional icon added
}
 
interface ServiceExpandPanelProps {
  service: Service
  isExpanded: boolean
  onExpand: () => void
  mobile?: boolean
  onClose?: () => void
}
 
/* ================= COMPONENT ================= */
 
export default function ServiceExpandPanel({
  service,
  isExpanded,
  onExpand,
  mobile = false,
  onClose,
}: ServiceExpandPanelProps) {
  const [showLogin, setShowLogin] = useState(false)
 
  return (
    <>
      {/* ================= PANEL ================= */}
      <motion.div
        layout
        initial={false}
        style={{
          flex: mobile ? undefined : isExpanded ? "3 1 0%" : "0 0 64px",
          width: mobile ? undefined : isExpanded ? "auto" : "64px",
        }}
        transition={{
          layout: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        onClick={!mobile ? onExpand : undefined}
        className={`
          relative
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          overflow-hidden
          cursor-pointer
          ${mobile ? "h-full w-full" : "h-full"}
        `}
      >
        {/* ================= MOBILE HEADER ================= */}
        {mobile && (
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h3 className="font-bold text-lg">{service.title}</h3>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        )}
 
        {/* ================= COLLAPSED LABEL ================= */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={false}
          animate={{
            opacity: isExpanded || mobile ? 0 : 1,
            y: isExpanded || mobile ? 0 : [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.3 },
            y: {
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <span
            className="vertical-text font-bold text-white/50 uppercase tracking-[0.4em] text-xs"
            style={{ transform: "rotate(180deg)" }}
          >
            {service.shortTitle}
          </span>
        </motion.div>
 
        {/* ================= EXPANDED CONTENT ================= */}
        <motion.div
          className="absolute inset-0 flex h-full w-full"
          initial={false}
          animate={{ opacity: isExpanded || mobile ? 1 : 0 }}
          transition={{
            duration: 0.4,
            delay: isExpanded || mobile ? 0.1 : 0,
          }}
          style={{
            pointerEvents: isExpanded || mobile ? "auto" : "none",
          }}
        >
          {/* ================= LEFT VISUAL ================= */}
          <div className="hidden md:flex w-3/5 items-center justify-center bg-white/5 p-8 border-r border-white/10">
            <div className="relative w-64 h-96 border-2 border-blue-400/40 rounded-md shadow-[0_0_60px_rgba(96,165,250,0.25)]">
              <div className="grid grid-cols-3 grid-rows-6 gap-2 p-2 h-full">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className={`border border-blue-400/40 ${
                      i === 4 || i === 9
                        ? "bg-blue-400/30 animate-pulse"
                        : "bg-blue-400/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
 
          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex-1 md:w-2/5 p-6 md:p-10 flex flex-col bg-white/5 overflow-y-auto">
            {/* ICON */}
 
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
 
            <p className="text-white/70 mb-6 leading-relaxed italic">
              “{service.description}”
            </p>
 
            {/* ================= FEATURES ================= */}
            <div className="flex flex-col gap-3 mb-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <span className="material-symbols-outlined text-blue-400 text-lg">
                    check_circle
                  </span>
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
 
            {/* ================= CTA ================= */}
            <div className="mt-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowLogin(true)
                }}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-500/30 active:scale-95"
              >
                {service.cta}
                <span className="material-symbols-outlined">
                  rocket_launch
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
 
      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowLogin(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
 
            <ClientLogin />
          </motion.div>
        </div>
      )}
    </>
  )
}