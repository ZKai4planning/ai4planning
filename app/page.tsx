"use client"

import { useEffect, useRef, useState } from "react"
import ServiceExpandPanel from "@/components/service-expand-panel"
import { LoginHeader } from "@/components/login-header"
import Footer from "@/components/landingpagefooter"
import QuickAccessHub from "@/components/QuickAccessHub"
import PlanningExpertSection from "@/components/PlanningExpertSection"

const services = [
  {
    id: "structural",
    number: "01",
    title: "Personal Planning & Priority Balancing",
    shortTitle: "Personal Planning",
    description:
      "Persona-driven concierge for homeowners, individuals, landlords.",
    features: [
      "Planning feasibility & advice",
      "Planning strategy & next steps",
      "Priority & trade-off balancing",
      "Application readiness check",
      "Assisted planning application support",
    ],
    cta: "Get Started",
    icon: "architecture",
    label: "Personal Planning & Priority Balancing",
    image: "",
  },
  {
    id: "site",
    number: "02",
    title: "Small Business Planning & Priority Balancing",
    shortTitle: "Small Business Planning",
    description:
      "Structure decisions, balance competing demands, protect business momentum.",
    features: [
      "Site & project feasibility",
      "Business planning strategy",
      "Resource & priority balancing",
      "SME planning application support",
      "Ongoing planning support",
    ],
    cta: "Optimize Now",
    icon: "map",
    label: "Small Business Planning & Priority Balancing",
    image: "",
  },
  {
    id: "sustainable",
    number: "03",
    title: "Planning Consultant Production & Compliance Support",
    shortTitle: "Planning Consultant",
    description:
      "Scalable production capacity + compliance/QA to reduce delivery risk.",
    features: [
      "Scalable drawing production",
      "Architectural & technical drawing packs",
      "Bulk & custom delivery models",
      "Compliance & QA reviews",
      "Building regulations support",
    ],
    cta: "Get Started",
    icon: "eco",
    label: "Planning Consultant Production & Compliance Support",
    image: "",
  },
  {
    id: "cost",
    number: "04",
    title: "Construction Delivery",
    shortTitle: "Construction Delivery",
    description:
      "End-to-end construction delivery after (or alongside) planning.",
    features: [
      "Extensions",
      "Loft conversions",
      "Outbuildings",
      "New builds",
      "Change of use (delivery only)",
    ],
    cta: "Get Estimates",
    icon: "payments",
    label: "Construction Delivery",
    image: "",
  },
]

export default function Home() {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null)
  const expandedContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        expandedContainerRef.current &&
        !expandedContainerRef.current.contains(event.target as Node)
      ) {
        setExpandedServiceId(null)
      }
    }

    if (expandedServiceId) {
      document.addEventListener("mousedown", handleClickOutside)
      return () =>
        document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expandedServiceId])

  return (
    <main className="w-full ">
      <LoginHeader />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/blueprinttobuilding.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-6">
              We don't just design buildings
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light">
              we bring chaos to order
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              {/* ✅ UPDATED BUTTON */}
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-10 py-4 bg-white text-black font-semibold hover:scale-105 transition"
              >
                Explore Our Services
              </button>

              <button className="px-20 py-4 border-2 border-white text-white hover:bg-white/10 transition">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section
        id="services"
        className="bg-[#050B18] text-white pt-24 min-h-screen relative overflow-hidden"
      >
        <div className="relative max-w-[1440px] mx-auto px-10 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Active Module: Structural Analysis & Optimization
          </p>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-10 mb-20">
          {expandedServiceId ? (
            <div
              ref={expandedContainerRef}
              className="flex gap-2 h-[700px] rounded-xl"
            >
              {services.map((service) => (
                <ServiceExpandPanel
                  key={service.id}
                  service={service}
                  isExpanded={expandedServiceId === service.id}
                  onExpand={() => setExpandedServiceId(service.id)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setExpandedServiceId(service.id)}
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl cursor-pointer hover:border-blue-400/60 transition"
                >
                  <span className="material-symbols-outlined text-blue-400 text-5xl mb-6 block">
                    {service.icon}
                  </span>
                  <p className="text-xs font-bold text-blue-400 mb-2">
                    {service.number}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-6">
                    {service.description}
                  </p>
                  <span className="text-blue-400 font-semibold">
                    Learn More →
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <QuickAccessHub />
      </section>

      <PlanningExpertSection />
      <Footer />
    </main>
  )
}
