"use client"

import { useRef } from "react"
import ServiceExpandPanel from "@/components/service-expand-panel1"

/* ================= TYPES ================= */

export interface Feature {
  title: string
  header?: string
  description?: string
}

export interface Service {
  index?: number
  id: string
  title: string
  shortTitle: string
  subtitle: string
  image: string
  description: string
  features: Feature[]
  cta: string
  label: string
}

/* ================= SERVICES DATA ================= */

const services: Service[] = [
   {
    id: "Service-01",
    title: "Residential: Homeowners & Personal Life Projects",
    shortTitle: "Residential: Homeowners & Personal Life Projects",
    subtitle: "Residential: Homeowners & Personal Life Projects",
    image: "/Service-01.png",
    description:
      "Concierge-driven planning advice focused on balancing personal priorities with project outcomes; personalised guidance through household planning applications.",
    features: [
      {
        title: " I want to make a small change… ",
        header: " I want to make a small change… ",
        description:
          "As a homeowner with an approved plan, I want to make a small change (for example moving a window or adjusting a roof pitch) so that the design better suits my needs without re applying from scratch."
      },
      {
        title: "I want to erect a small sign…",
        header: "I want to erect a small sign…",
        description:
          "As a homeowner running a home based business, I want to erect a small sign outside my property so that customers can find me. "
      },
      {
        title: "I want to prune or remove dangerous branches…",
        header: "I want to prune or remove dangerous branches…",
        description:
          "As a homeowner with a protected tree in my garden, I want to prune or remove dangerous branches so that my family and property are safe."
      },
      {
        title: "I want legal confirmation…",
        header: "I want legal confirmation…",
        description:
          "As a homeowner, I want legal confirmation that my existing extension or outbuilding is lawful so that I am protected from enforcement action."
      },
      {
        title: "I want to do minor repairs, What do I do?",
        header: "I want to do minor repairs, What do I do?",
        description:
          "As the owner of a listed property, I want to ensure that my proposed repairs (e.g., replacing rotten timber) do not require listed building consent so that I can proceed with confidence. "
      },
      {
        title: "I am looking for building approvals …",
        header: "I am looking for building approvals …",
        description:
          "As a homeowner with a large garden plot, I want initial approval to build a small number of homes so that I can decide whether to proceed before investing in detailed designs."
      },
      {
        title: "I want to build a modest extension...",
        header: "I want to build a modest extension...",
        description:
          "As a homeowner, I want to build a modest extension (e.g., a rear kitchen/dining room) so that my family has more living space. "
      },
      {
        title: "I want to submit a prior approval request…",
        header: "I want to submit a prior approval request…",
        description:
          "As a homeowner planning a larger extension under permitted development, I want to submit a prior approval request so that the council can check impacts (such as neighbour amenity) before I start. "
      },
      {
        title: "I want to discharge my conditions…",
        header: "I want to discharge my conditions…",
        description:
          "As a homeowner who has obtained planning permission, I want to discharge my conditions (such as materials or landscaping) so that I can begin building.  "
      },
      {
        title: "I want to apply for full planning permission…",
        header: "I want to apply for full planning permission…",
        description:
          "As a homeowner wanting to build a new dwelling or substantially remodel my property (e.g., converting it into flats), I want to apply for full planning permission so that I can carry out my development legally."
      },
    ],
    cta: "Select & Apply",
    label: "Homeowners, landlords, self-builders",
  },
  {
    id: "Service-02",
    title: "Commercial: Property Development & Planning",
    shortTitle: "Commercial: Property Development & Planning",
    subtitle: "Commercial: Property Development & Planning",
    image: "/Service-02.jpg",
    description:
      "Strategic guidance for medium- and large-scale commercial schemes; planning and phasing support.",
    features: [
      {
        title: "Commercial planning strategy",
      },
      {
        title: "Medium & large-scale scheme support",
      },
      {
        title: "Development phasing advice",
      },
      {
        title: "Planning risk & feasibility assessment",
      },
      {
        title: "End-to-end commercial planning guidance",
      }
    ],
    cta: "Select & Apply",
    label: "Commercial Property Developers",
  },
  {
    id: "Service-03",
    title: "Small Business Strategy & Operations Improvement",
    shortTitle: "Small Business Strategy & Operations Improvement",
    subtitle: "Small Business Strategy & Operations Improvement",
    image: "/Service-03.jpg",
    description:
      "Business planning and operations improvement; technology and workflow optimization; strategic road mapping.",
    features: [
      {
        title: "Business planning & strategy",
      },
      {
        title: "Operational improvement analysis",
      },
      {
        title: "Technology & workflow optimisation",
      },
      {
        title: "Strategic roadmapping",
      },
      {
        title: "Ongoing SME advisory support",
      }
    ],
    cta: "Select & Apply",
    label: "SMEs (non‑development)",
  },
  {
    id: "Service-04",
    title: "Consultant Production & Compliance Support",
    shortTitle: "Consultant Production & Compliance Support",
    subtitle: "Consultant Production & Compliance Support",
    image: "/Service-04.png",
    description:
      "Scalable drawing production, regulatory compliance checks, and QA reviews.",
    features: [
      {
        title: "Scalable drawing production",
      },
      {
        title: "Regulatory compliance checks",
      },
      {
        title: "Quality assurance (QA) reviews",
      },
      {
        title: "Architectural & technical support",
      },
      {
        title: "Flexible production capacity",
      }
    ],
    cta: "Select & Apply",
    label: "Planning consultants & architects",
  },
  {
    id: "Service-05",
    title: "In-House Construction Delivery",
    shortTitle: "In-House Construction Delivery",
    subtitle: "In-House Construction Delivery",
    image: "/Construction-5.jpg",
    description:
      "Design-and-build services post-consent; integrated planning and construction management.",
    features: [
      {
        title: "Post-consent design & build",
      },
      {
        title: "Integrated planning & construction",
      },
      {
        title: "Construction management support",
      },
      {
        title: "Programme & delivery coordination",
      },
      {
        title: "Single-point delivery responsibility",
      }
    ],
    cta: "Select & Apply",
    label: "Clients with consented projects ",
  },
  {
    id: "Service-06",
    title: "Tailored Project Management & Consultancy Marketplace ",
    shortTitle: "Tailored Project Management ",
    subtitle: "Tailored Project Management & Consultancy Marketplace ",
    image: "/Service-06.png",
    description:
      "Curated marketplace of vetted consultants offering project and planning-related services.",
    features: [
      {
        title: "Curated consultant marketplace",
      },
      {
        title: "Task-based consultancy services",
      },
      {
        title: "Flexible project management support",
      },
      {
        title: "Vetted professional network",
      },
      {
        title: "Cross-discipline expertise access",
      }
    ],
    cta: "Select & Apply",
    label: "All client types",
  },
]


/* ================= COMPONENT ================= */

interface ServicesSectionProps {
  expandedServiceId: string | null
  setExpandedServiceId: (id: string | null) => void
}

export function ServicesSection({
  expandedServiceId,
  setExpandedServiceId,
}: ServicesSectionProps) {
  const expandedContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="services"
      className="bg-[#050B18] text-white pt-36 h-[900px] relative"
    >
      {!expandedServiceId && (
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-9xl font-bold">
            Our Services
          </h2>
        </div>
      )}

      <div className="max-w-[1740px] mx-auto px-10">
        {expandedServiceId ? (
          <div ref={expandedContainerRef} className="flex gap-2 h-[650px]">
            {services.map((service,index) => (
              <ServiceExpandPanel
                key={service.id}
                index={index} 
                service={service}
                isExpanded={expandedServiceId === service.id}
                onExpand={() => setExpandedServiceId(service.id)}
                onClose={() => setExpandedServiceId(null)}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setExpandedServiceId(service.id)}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl cursor-pointer hover:border-blue-400 transition"
              >
                <p className="text-xs font-bold text-blue-400 mb-2">
                  {service.label}
                </p>

                <h3 className="text-lg font-bold mb-3">
                  {service.subtitle}
                </h3>

                <p className="text-sm text-white/60 italic">
                  “{service.description}”
                </p>

                <span className="mt-6 inline-flex items-center text-blue-400 font-semibold">
                  Get Started →
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
