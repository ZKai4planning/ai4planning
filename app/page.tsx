"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import ServiceExpandPanel from "@/components/service-expand-panel"
import { LoginHeader } from "@/components/login-header"
import Footer from "@/components/landingpagefooter"
import QuickAccessHub from "@/components/QuickAccessHub"
import PlanningExpertSection from "@/components/PlanningExpertSection"

/* ================= TYPES ================= */

interface Service {
  id: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  features: string[]
  cta: string
  label: string
}


/* ================= HERO ANIMATION DATA ================= */

const paragraphText =
  "Your partner in planning, whether you’re an individual, homeowner, small business, or a planning consultant. We streamline the path from concept to completion."

const words = paragraphText.split(" ")

const headingVariants = {
  hidden: { scale: 0.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: "easeOut",
      delay: 5.6,
    },
  },
}

const paragraphContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 7.3,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const services: Service[] = [
  {
    id: "Service-01",
    title: "Residential: Homeowners & Personal Life Projects",
    shortTitle: "Residential: Homeowners & Personal Life Projects",
    subtitle: "Residential: Homeowners & Personal Life Projects",
    description:
      "Concierge-driven planning advice focused on balancing personal priorities with project outcomes; personalised guidance through household planning applications.",
    features: [
      "Concierge-style planning advice",
      "Personal priority & trade-off balancing",
      "Householder planning consent",
      "Application readiness guidance",
      "End-to-end personal planning support",
    ],
    cta: "Get Started",
    label: "Homeowners, landlords, self-builders",
  },
  {
    id: "Service-02",
    title: "Commercial: Property Development & Planning",
    shortTitle: "Commercial: Property Development & Planning",
    subtitle: "Commercial: Property Development & Planning",
    description:
      "Strategic guidance for medium- and large-scale commercial schemes; planning and phasing support.",
    features: [
      "Commercial planning strategy",
      "Medium & large-scale scheme support",
      "Development phasing advice",
      "Planning risk & feasibility assessment",
      "End-to-end commercial planning guidance",
    ],
    cta: "Get Started",
    label: "Commercial Property Developer's",
  },
  {
    id: "Service-03",
    title: "Small Business Strategy & Operations",
    shortTitle: "Small Business Strategy & Operations",
    subtitle: "Small Business Strategy & Operations Improvement",
    description:
      "Business planning and operations improvement; technology and workflow optimization; strategic road mapping.",
    features: [
      "Business planning & strategy",
      "Operational improvement analysis",
      "Technology & workflow optimisation",
      "Strategic roadmapping",
      "Ongoing SME advisory support",
    ],
    cta: "Get Started",
    label: "SMEs (non-development)",
  },
  {
    id: "Service-04",
    title: "Consultant Production & Compliance Support",
    shortTitle: "Consultant Production & Compliance Support",
    subtitle: "Consultant Production & Compliance Support",
    description:
      "Scalable drawing production, regulatory compliance checks, and QA reviews.",
    features: [
      "Scalable drawing production",
      "Regulatory compliance checks",
      "Quality assurance (QA) reviews",
      "Architectural & technical support",
      "Flexible production capacity",
    ],
    cta: "Get Started",
    label: "Planning consultants & architects",
  },
  {
    id: "Service-05",
    title: "In-House Construction Delivery",
    shortTitle: "In-House Construction Delivery",
    subtitle: "In-House Construction Delivery",
    description:
      "Design-and-build services post-consent; integrated planning and construction management.",
    features: [
      "Post-consent design & build",
      "Integrated planning & construction",
      "Construction management support",
      "Programme & delivery coordination",
      "Single-point delivery responsibility",
    ],
    cta: "Get Started",
    label: "Clients with consented projects",
  },
  {
    id: "Service-06",
    title: "Tailored Project Management & Consultancy Marketplace",
    shortTitle: "Tailored Project Management ",
    subtitle: "Tailored Project Management & Consultancy Marketplace ",
    description:
      "Curated marketplace of vetted consultants offering Project Management for any type of project or planning-related and consultancy services.",
    features: [
      "Curated consultant marketplace",
      "Task-based consultancy services",
      "Flexible project management support",
      "Vetted professional network",
      "Cross-discipline expertise access",
    ],
    cta: "Get Started",
    label: "All client types",
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
  {/* ===== Background Video ===== */}
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

  {/* ===== Content ===== */}
  <div className="relative z-10 h-full flex items-center justify-center px-6 text-center -mt-12">
    <div className="max-w-4xl">

      {/* ===== Animated Heading ===== */}
      <motion.h1
        initial={{ scale: 0.25, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
          delay: 5.6,
        }}
        className="text-2xl sm:text-5xl lg:text-[200px] font-bold text-white mb-6 origin-center -ml-32"
      >
        AI4Planning
      </motion.h1>

      {/* ===== Word-by-word paragraph ===== */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: 7.3,
            },
          },
        }}
        className="text-xl sm:text-2xl lg:text-3xl text-white/90  flex flex-wrap justify-center gap-x-1"
      >
        {"Your partner in planning, whether you’re an individual, homeowner, small business, or a planning consultant. We streamline the path from concept to completion."
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
      </motion.p>

      {/* ===== Animated CTA Buttons ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 8.6, // starts AFTER text animation
        }}
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-1 px-10 py-4 font-semibold rounded-sm relative overflow-hidden"
        >
          <span className="relative z-10">Explore Our Services</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-20 py-4 border-2 border-white text-white bg-white/10 hover:bg-white/20 transition rounded-sm"
        >
          Let's Talk
        </motion.button>
      </motion.div>

    </div>
  </div>
</section>



      {/* ================= SERVICES SECTION ================= */}
      <section
  id="services"
  className="bg-[#050B18] text-white pt-36 h-[900px] relative overflow-hidden"
>
  {/* ===== Header ===== */}
  {!expandedServiceId && (
    <div className="relative max-w-[1440px]  mx-auto px-10 text-center mb-12 ">
      <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4">
        Our Services
      </h2>
      <p className="text-white/60 text-xl max-w-2xl mx-auto">
        Active Module: Structural Analysis & Optimization
      </p>
    </div>
  )}

  {/* ===== Content ===== */}
  <div className="relative max-w-[1740px] mx-auto px-10 mb-20">
    {expandedServiceId ? (
      /* ---------- EXPANDED VIEW ---------- */
      <div
        ref={expandedContainerRef}
        className="flex gap-2 h-[650px] rounded-xl "
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
      /* ---------- GRID VIEW (6 CARDS) ---------- */
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
        "
      >
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setExpandedServiceId(service.id)}
            className="
              group bg-white/5 backdrop-blur-xl
              border border-white/10 p-6 rounded-2xl
              cursor-pointer transition-all
              hover:border-blue-400/60
              hover:shadow-xl hover:shadow-blue-500/20
              flex flex-col
            "
          >
            {/* ===== TOP CONTENT ===== */}
            <div>
             

              <p className="text-xs font-bold text-blue-400 mb-2">
                {service.label}
              </p>

              <h3 className="text-lg font-bold mb-3 leading-snug">
                {service.subtitle}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed italic">
                “{service.description.substring(0, 80)}…”
              </p>
            </div>

            {/* ===== CTA (BOTTOM LEFT) ===== */}
            <span className="mt-auto pt-6 text-blue-400 font-semibold inline-flex items-center gap-1 relative self-start">
              Get Started
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-blue-400 transition-all duration-300
                  group-hover:w-full
                "
              />
            </span>
          </div>
        ))}
      </div>
    )}
  </div>

  
</section>


<QuickAccessHub />
      <PlanningExpertSection />
      <Footer />
    </main>
  )
}
