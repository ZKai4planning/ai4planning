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
      "Persona-driven concierge for homeowners, individuals, landlords. ",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_d9SYW6r3EunAGOoIOq_r3pEUk74xA5p8WB1CIrDf_XNGCJGZeYy_CuqkuiUd4yroKvrxrx6o0sHoSmZdIgfZQUJU0z95AsLMgAR8xCM_BFUOoGhYrGIkS2SuaQCg6p41DjlTYPJfx_EC4-FRS7veEwMCkHJPQE4IVg9TrFznf8_olT3qmxC9VvtMGtWQY7FUPuUkX-x4Bf0jbRkyeTsXTgtvnwM0Mb2LpjCrCt-2mpPMnFt03IOdceIXfVp0yfEfFFjwWbMHtfKp",
  },
  {
    id: "site",
    number: "02",
    title: "Small Business Planning & Priority Balancing",
    shortTitle: "Small Business Planning",
    description:
      "Structure decisions, balance competing demands, protect business momentum. ",
    features: [
      "Site & project feasibility", 
"Business planning strategy (phasing, risk, sequencing)", 
"Resource & priority balancing (time/cost/ops)", 
"SME planning application support",
"Ongoing planning support (iterations, council queries, amendments)",
    ],
    cta: "Optimize Now",
    icon: "map",
    label: "Small Business Planning & Priority Balancing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOKMjRGbHqw8gH_SVlceYx8mowqdoC_RZL19KMeD0hZesUOq_NCUoEI9541pMQlQRgfRfoWtHKJ0CZqYSAQ4cgTFQuJU8ToAPEQQfpHDU7m5tCSOLMymeH6vnVfLrZLKzMcC1uxZObJj5rB6BCg2u_7HLAzrpeEbPIBZOSgsE4Rsr7N4aRBe_CAtJnNrNmrj8GYTtYS2UC5KIhIwGn8XBBmohG8ciMMYlfBgx2AOebYQqIwgMMMb-DwYBcWYQDsejzXMIrIY53E5gB",
  },
  {
    id: "sustainable",
    number: "03",
    title: "Planning Consultant Production & Compliance Support",
    shortTitle: "Planning Consultant",
    description:
      "Scalable production capacity + compliance/QA to reduce delivery risk. ",
    features: [
      "Scalable drawing production", 
"Architectural & technical drawing packs", 
"Bulk & custom delivery models (packages/retainers/surge)", 
"Compliance & QA reviews", 
"Building regulations support (technical pack readiness)", 
      
    ],
    cta: "Get Started",
    icon: "eco",
    label: "Planning Consultant Production & Compliance Support",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTfE8-r8ocQWHPaijbZFz4l10LC6Txp2EgV0H7ZRXqbJ5x4iXzCo6LxeilW_t5qYKeRiV1yFRol9FXJPs6JO4okn42W8Kfhpa3vVauoGOY5yqOEvgZHDFzBLM1VDPBg8XLL-wdggF-tHVlcyOjwgEpry4_QpwEmvugCOF964snkynaOy3aqS5TUh8OVAWle9YtvJtZeWtNcuJp2sY81TPaxP47W_l4xhVlP89ppDNF2jYJlmLt4S7fBzGtZqG0BSthyTN40pu3v8dT",
  },
  {
    id: "cost",
    number: "04",
    title: "Construction Delivery",
    shortTitle: "Construction Delivery",
    description:
      "Physical construction delivery only. No ownership of planning applications, LDCs, appeals, or compliance paperwork.End-to-end delivery after (or alongside) the planning journey.",
    features: [
      "Extensions", 
"Loft conversions", 
"Outbuildings", 
"New builds", 
"Change of use (physical delivery / fit-out only)",
    ],
    cta: "Get Estimates",
    icon: "payments",
    label: "Construction Delivery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlJGJwS7oEzRx2vI8VMhQmjHFjTp3hXoYNxis4sxuwGadmpS5B2KcW-J_1df4KKcb9nCAVwfvriVWKQQLJXtqRa9FKlpKDYrZN9GmQZjGgu0TeFbOyFoKtSOE2uaJ32bPdTss3st1HuHonaley_g3_9VAiVRP0dPaHUci0gnDGpUwYLQcJvjDF1-MHvhvH4Tl3RTSqJX7rhrhgGjr08Exikx69zPmThhWnwgTsepcxO_74Zgr4aqF9CyoKYTM7s8kDB5H71F9W8rxa",
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
    <main className="w-full overflow-hidden">
      <LoginHeader />
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onEnded={(e) => {
              const video = e.currentTarget
              video.pause()
              video.currentTime = video.duration
            }}
          >
            <source src="/blueprinttobuilding.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-6">
              We don't just design buildings
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light">
              we bring chaos to order
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-black font-semibold hover:scale-105 transition">
                Explore Our Work
              </button>
              <button className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 transition">
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          ↓
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      {/* <section className="bg-[#050B18] text-white pt-24 min-h-screen">

        <div className="max-w-[1440px] mx-auto px-10 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive Services
          </h2>
          <p className="text-[#616f89] text-lg max-w-2xl mx-auto">
            Active Module: Structural Analysis & Optimization
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto px-10 mb-20">
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
                  className="bg-white dark:bg-[#1a202c] p-8 rounded-xl cursor-pointer hover:shadow-lg transition"
                >
                  <span className="material-symbols-outlined text-[#135bec] text-5xl mb-6">
                    {service.icon}
                  </span>
                  <p className="text-xs font-bold text-[#135bec] mb-2">
                    {service.number}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#616f89] mb-6">
                    {service.description.substring(0, 100)}...
                  </p>
                  <span className="text-[#135bec] font-semibold">
                    Learn More →
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      
      <QuickAccessHub />
      </section> */}
      <section className="bg-[#050B18] text-white pt-24 min-h-screen relative overflow-hidden">

  {/* ambient glow */}
  <div className="absolute -top-40 right-1/4 h-96 w-96 bg-blue-600/30 blur-[140px]" />

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
            className="
              group
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              p-8
              rounded-2xl
              cursor-pointer
              hover:border-blue-400/60
              hover:shadow-xl
              hover:shadow-blue-500/20
              transition-all
            "
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
              {service.description.substring(0, 100)}...
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
