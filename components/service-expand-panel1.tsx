
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ClientLogin } from "@/components/clientloginform"
import { useRouter } from "next/navigation"


/* ================= TYPES ================= */

export interface Feature {
  title: string
  header?: string
  description?: string
}

export interface Service {
  id: string
  title: string
  shortTitle: string
  image: string
  subtitle: string
  description: string
  features: Feature[]
  cta: string
  label: string
  icon?: string
}

interface ServiceExpandPanelProps {
  service: Service
  isExpanded: boolean
  onExpand: () => void
  onClose: () => void
  index: number
  mobile?: boolean
}

/* ================= COMPONENT ================= */

export default function ServiceExpandPanel({
  service,
  isExpanded,
  onExpand,
  onClose,
  index,
  mobile = false,
}: ServiceExpandPanelProps) {
    const router = useRouter()

  const [showLogin, setShowLogin] = useState(false)

  // 🔥 NEW STATE
  const [hoveredFeature, setHoveredFeature] = useState<Feature | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)

  // Reset feature state when panel closes
  useEffect(() => {
    if (!isExpanded) {
      setHoveredFeature(null)
      setSelectedFeature(null)
    }
  }, [isExpanded])

  const activeFeature = selectedFeature || hoveredFeature

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
          layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        }}
        className="
          relative h-full
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl overflow-hidden
        "
      >
        {/* ================= COLLAPSED STATE ================= */}
        {!isExpanded && !mobile && (
          <button
            onClick={onExpand}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.span
              animate={{
                y: index % 2 === 0 ? [-8, 12, -8] : [10, -6, 10],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className="vertical-text rotate-180 uppercase tracking-[0.4em] text-xs text-white/50 font-bold"
            >
              {service.shortTitle}
            </motion.span>
          </button>
        )}

        {/* ================= EXPANDED ================= */}
        {isExpanded && (
          <motion.div
            className="absolute inset-0 flex w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* ================= LEFT IMAGE ================= */}
            <div className="hidden md:flex w-3/5 relative border-r border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-blue-900/30" />
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="relative flex-1 p-6 md:p-10 flex flex-col bg-white/5 overflow-y-auto">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-6 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2"
              >
                <span className="material-symbols-outlined text-white">
                  close
                </span>
              </button>

              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>

              <p className="text-white/70 italic mb-6 leading-relaxed">
                “{service.description}”
              </p>

              {/* ================= SUBSERVICES ================= */}
              <div className="flex flex-col gap-3">
                {(selectedFeature ? [selectedFeature] : service.features).map(
                  (feature, i) => {
                    const isSelected =
                      selectedFeature?.title === feature.title

                    return (
                      <div
                        key={i}
                        onMouseEnter={() =>
                          !selectedFeature && setHoveredFeature(feature)
                        }
                        onMouseLeave={() =>
                          !selectedFeature && setHoveredFeature(null)
                        }
                        onClick={() => setSelectedFeature(feature)}
                        className={`
                          flex gap-3 items-start cursor-pointer
                          transition-all
                          ${
                            selectedFeature && !isSelected
                              ? "hidden"
                              : ""
                          }
                        `}
                      >
                        {/* Checkmark */}
                        <span
                          className={`
                            material-symbols-outlined text-lg
                            ${
                              isSelected
                                ? "text-green-400"
                                : "text-blue-400"
                            }
                          `}
                        >
                          check_circle
                        </span>

                        {/* Title */}
                        <span className="text-sm text-white/80">
                          {feature.title}
                        </span>
                      </div>
                    )
                  }
                )}
              </div>

              {/* ================= CENTER DETAIL ================= */}
              {activeFeature?.description && (
                <motion.div
                  key={activeFeature.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    mt-6 rounded-xl
                    bg-black/60 border border-white/10
                    p-5 text-sm text-white/80
                  "
                >
                  {/* ❌ NO DUPLICATE TITLE */}

                  {/* {activeFeature.header && (
                    <h4 className="font-semibold text-white mb-2">
                      {activeFeature.header}
                    </h4>
                  )} */}

                  <p className="leading-relaxed">
                    {activeFeature.description}
                  </p>

                  {/* Reset */}
                  {selectedFeature && (
                    <button
                      onClick={() => {
                        setSelectedFeature(null)
                        setHoveredFeature(null)
                      }}
                      className="mt-4 text-xs text-blue-400 hover:underline"
                    >
                      Close
                    </button>
                  )}
                </motion.div>
              )}

              {/* ================= CTA ================= */}
              <div className="mt-auto pt-6">
                <button
                  onClick={() => router.push("/pay")}

                  className="
                    bg-blue-500 hover:bg-blue-400
                    text-white font-bold
                    py-3 px-6 rounded-xl
                    flex items-center justify-center gap-2
                    shadow-lg shadow-blue-500/30
                    transition active:scale-95
                  "
                >
                  {service.cta}
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (
        <div
          onClick={() => setShowLogin(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
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
