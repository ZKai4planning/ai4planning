"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ================= TYPES ================= */

type Service = {
  id: string
  code: string
  title: string
  description: string
  features?: string[]
}

type Step = "DETAILS" | "FORM"
type CountryCode = "IN" | "US" | "UK" | "GLOBAL"

/* ================= DATA ================= */

const SERVICES: Service[] = [
  {
    id: "Service-1",
    code: "Service-1",
    title: "Home Owner Services",
    description:
      "Property & real-estate planning including extensions, new builds, planning permissions, compliance, and coordination.",
  },
  {
    id: "Service-2",
    code: "Service-2",
    title: "Construction & Build Services",
    description:
      "Execution of building projects including physical construction, contractor coordination, and post-planning implementation.",
  },
  {
    id: "Service-3",
    code: "Service-3",
    title: "Small Business Services",
    description:
      "Business strategy, AI-driven planning, workflows, product & tech planning, operations, research, and growth support.",
    features: [
      "AI-powered business strategy and planning",
      "Automated operational and workflow optimization",
      "Product, technology, and roadmap planning",
      "Market research, insights, and opportunity validation",
      "Growth, scaling, and property-aligned planning",
    ],
  },
  {
    id: "Service-4",
    code: "Service-4",
    title: "Personal Concierge Services",
    description:
      "Project management for personal goals, financial planning, AI assistance, document drafting, task management, and compliance.",
  },
  {
    id: "Service-5",
    code: "Service-5",
    title: "Planning Consultant Services",
    description:
      "B2B support for professional planners including CAD production, compliance checks, and capacity scaling.",
  },
  {
    id: "Service-6",
    code: "Service-6",
    title: "Concierge Services – Tailored Planning & Consultancy",
    description:
      "Curated, on-demand expert services combining planning, consultancy, and concierge features across domains.",
  },
]

/* ================= HELPERS ================= */

async function fetchAddressByPostalCode(
  country: CountryCode,
  postalCode: string
): Promise<string | null> {
  try {
    if (country === "IN") {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${postalCode}`
      )
      const data = await res.json()
      if (data[0]?.Status === "Success") {
        const p = data[0].PostOffice[0]
        return `${p.Name}, ${p.District}, ${p.State}, India`
      }
    }

    if (country === "US") {
      const res = await fetch(
        `https://api.zippopotam.us/us/${postalCode}`
      )
      const data = await res.json()
      const p = data.places?.[0]
      if (p) {
        return `${p["place name"]}, ${p["state abbreviation"]}, USA`
      }
    }

    if (country === "UK") {
      const res = await fetch(
        `https://api.zippopotam.us/gb/${postalCode}`
      )
      const data = await res.json()
      const p = data.places?.[0]
      if (p) {
        return `${p["place name"]}, ${p.state}, United Kingdom`
      }
    }

    if (country === "GLOBAL") {
      const res = await fetch(
        `https://api.zippopotam.us/${postalCode}`
      )
      const data = await res.json()
      const p = data.places?.[0]
      if (p) {
        return `${p["place name"]}, ${p.state}, ${data.country}`
      }
    }

    return null
  } catch {
    return null
  }
}

/* ================= COMPONENT ================= */

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [step, setStep] = useState<Step>("DETAILS")

  const [formData, setFormData] = useState({
    country: "IN" as CountryCode,
    postalCode: "",
    address: "",
  })

  const handleSelect = (service: Service) => {
    setActiveService(prev =>
      prev?.id === service.id ? null : service
    )
    setStep("DETAILS")
  }

  const handleInputChange = async (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    if (name === "postalCode" && value.length >= 4) {
      const address = await fetchAddressByPostalCode(
        formData.country,
        value
      )
      if (address) {
        setFormData(prev => ({
          ...prev,
          address,
        }))
      }
    }
  }

  return (
    <section className="w-full px-6 py-14">
      {/* ================= HEADER ================= */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Our Services
        </h2>
        <p className="mt-2 text-gray-600">
          End-to-end planning, execution, and concierge solutions
        </p>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {SERVICES.map((service, index) => {
          const isActive = activeService?.id === service.id

          return (
            <motion.div
              key={service.id}
              layout
              onClick={() => handleSelect(service)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`cursor-pointer rounded-2xl border p-6 shadow-sm transition
                ${
                  isActive
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-blue-600 hover:shadow-md"
                }`}
            >
              <div className="mb-3 text-sm font-semibold text-blue-600">
                {service.code}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* ================= EXPANDED PANEL ================= */}
      <AnimatePresence mode="wait">
        {activeService && (
          <motion.div
            key={activeService.id + step}
            layout
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative mt-14 rounded-3xl border border-gray-200 bg-white p-10 shadow-xl"
          >
            {/* ===== DETAILS STEP ===== */}
            {step === "DETAILS" && (
              <>
                <div className="text-sm font-semibold text-blue-600">
                  {activeService.code}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {activeService.title}
                </h3>
                <p className="mt-6 max-w-4xl text-gray-700">
                  {activeService.description}
                </p>

                {activeService.features && (
                  <ul className="mt-8 space-y-3">
                    {activeService.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-10 text-right">
                  <button
                    onClick={() => setStep("FORM")}
                    className="rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
                  >
                    Get Started
                  </button>
                </div>
              </>
            )}

            {/* ===== FORM STEP ===== */}
            {step === "FORM" && (
              <>
                <h3 className="text-2xl font-bold text-gray-900">
                  Project Location Details
                </h3>
                <p className="mt-2 text-gray-600">
                  Please provide the project address details
                </p>

                <div className="mt-8 grid gap-6 max-w-xl">
                  

                  <input
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Postal Code"
                    className="rounded-lg border px-4 py-3"
                  />

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    rows={4}
                    className="rounded-lg border px-4 py-3"
                  />
                </div>

                <div className="mt-10 flex justify-between">
                  <button
                    onClick={() => setStep("DETAILS")}
                    className="rounded-xl border px-6 py-3 text-gray-700"
                  >
                    Back
                  </button>
                  <button className="rounded-xl bg-blue-600 px-6 py-3 text-white">
                    Create Project
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
