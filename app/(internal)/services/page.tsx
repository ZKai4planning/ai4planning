// // "use client"

// // import { useState } from "react"
// // import { motion, AnimatePresence } from "framer-motion"

// // /* ================= TYPES ================= */

// // type Service = {
// //   id: string
// //   code: string
// //   title: string
// //   description: string
// //   features?: string[]
// // }

// // type Step = "DETAILS" | "FORM"
// // type CountryCode = "IN" | "US" | "UK" | "GLOBAL"

// // /* ================= DATA ================= */

// // const SERVICES: Service[] = [
// //   {
// //     id: "Service-1",
// //     code: "Service-1",
// //     title: "Home Owner Services",
// //     description:
// //       "Property & real-estate planning including extensions, new builds, planning permissions, compliance, and coordination.",
// //   },
// //   {
// //     id: "Service-2",
// //     code: "Service-2",
// //     title: "Construction & Build Services",
// //     description:
// //       "Execution of building projects including physical construction, contractor coordination, and post-planning implementation.",
// //   },
// //   {
// //     id: "Service-3",
// //     code: "Service-3",
// //     title: "Small Business Services",
// //     description:
// //       "Business strategy, AI-driven planning, workflows, product & tech planning, operations, research, and growth support.",
// //     features: [
// //       "AI-powered business strategy and planning",
// //       "Automated operational and workflow optimization",
// //       "Product, technology, and roadmap planning",
// //       "Market research, insights, and opportunity validation",
// //       "Growth, scaling, and property-aligned planning",
// //     ],
// //   },
// //   {
// //     id: "Service-4",
// //     code: "Service-4",
// //     title: "Personal Concierge Services",
// //     description:
// //       "Project management for personal goals, financial planning, AI assistance, document drafting, task management, and compliance.",
// //   },
// //   {
// //     id: "Service-5",
// //     code: "Service-5",
// //     title: "Planning Consultant Services",
// //     description:
// //       "B2B support for professional planners including CAD production, compliance checks, and capacity scaling.",
// //   },
// //   {
// //     id: "Service-6",
// //     code: "Service-6",
// //     title: "Concierge Services – Tailored Planning & Consultancy",
// //     description:
// //       "Curated, on-demand expert services combining planning, consultancy, and concierge features across domains.",
// //   },
// // ]

// // /* ================= HELPERS ================= */

// // async function fetchAddressByPostalCode(
// //   country: CountryCode,
// //   postalCode: string
// // ): Promise<string | null> {
// //   try {
// //     if (country === "IN") {
// //       const res = await fetch(
// //         `https://api.postalpincode.in/pincode/${postalCode}`
// //       )
// //       const data = await res.json()
// //       if (data[0]?.Status === "Success") {
// //         const p = data[0].PostOffice[0]
// //         return `${p.Name}, ${p.District}, ${p.State}, India`
// //       }
// //     }

// //     if (country === "US") {
// //       const res = await fetch(
// //         `https://api.zippopotam.us/us/${postalCode}`
// //       )
// //       const data = await res.json()
// //       const p = data.places?.[0]
// //       if (p) {
// //         return `${p["place name"]}, ${p["state abbreviation"]}, USA`
// //       }
// //     }

// //     if (country === "UK") {
// //       const res = await fetch(
// //         `https://api.zippopotam.us/gb/${postalCode}`
// //       )
// //       const data = await res.json()
// //       const p = data.places?.[0]
// //       if (p) {
// //         return `${p["place name"]}, ${p.state}, United Kingdom`
// //       }
// //     }

// //     if (country === "GLOBAL") {
// //       const res = await fetch(
// //         `https://api.zippopotam.us/${postalCode}`
// //       )
// //       const data = await res.json()
// //       const p = data.places?.[0]
// //       if (p) {
// //         return `${p["place name"]}, ${p.state}, ${data.country}`
// //       }
// //     }

// //     return null
// //   } catch {
// //     return null
// //   }
// // }

// // /* ================= COMPONENT ================= */

// // export default function ServicesGrid() {
// //   const [activeService, setActiveService] = useState<Service | null>(null)
// //   const [step, setStep] = useState<Step>("DETAILS")

// //   const [formData, setFormData] = useState({
// //     country: "IN" as CountryCode,
// //     postalCode: "",
// //     address: "",
// //   })

// //   const handleSelect = (service: Service) => {
// //     setActiveService(prev =>
// //       prev?.id === service.id ? null : service
// //     )
// //     setStep("DETAILS")
// //   }

// //   const handleInputChange = async (
// //     e: React.ChangeEvent<
// //       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
// //     >
// //   ) => {
// //     const { name, value } = e.target

// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value,
// //     }))

// //     if (name === "postalCode" && value.length >= 4) {
// //       const address = await fetchAddressByPostalCode(
// //         formData.country,
// //         value
// //       )
// //       if (address) {
// //         setFormData(prev => ({
// //           ...prev,
// //           address,
// //         }))
// //       }
// //     }
// //   }

// //   return (
// //     <section className="w-full px-6 py-14">
// //       {/* ================= HEADER ================= */}
// //       <div className="mb-10">
// //         <h2 className="text-3xl font-bold tracking-tight text-gray-900">
// //           Our Services
// //         </h2>
// //         <p className="mt-2 text-gray-600">
// //           End-to-end planning, execution, and concierge solutions
// //         </p>
// //       </div>

// //       {/* ================= SERVICES GRID ================= */}
// //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
// //         {SERVICES.map((service, index) => {
// //           const isActive = activeService?.id === service.id

// //           return (
// //             <motion.div
// //               key={service.id}
// //               layout
// //               onClick={() => handleSelect(service)}
// //               initial={{ opacity: 0, y: 16 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.4, delay: index * 0.05 }}
// //               className={`cursor-pointer rounded-2xl border p-6 shadow-sm transition
// //                 ${
// //                   isActive
// //                     ? "border-blue-600 bg-blue-50"
// //                     : "border-gray-200 bg-white hover:border-blue-600 hover:shadow-md"
// //                 }`}
// //             >
// //               <div className="mb-3 text-sm font-semibold text-blue-600">
// //                 {service.code}
// //               </div>
// //               <h3 className="mb-3 text-lg font-semibold text-gray-900">
// //                 {service.title}
// //               </h3>
// //               <p className="text-sm text-gray-600 line-clamp-3">
// //                 {service.description}
// //               </p>
// //             </motion.div>
// //           )
// //         })}
// //       </div>

// //       {/* ================= EXPANDED PANEL ================= */}
// //       <AnimatePresence mode="wait">
// //         {activeService && (
// //           <motion.div
// //             key={activeService.id + step}
// //             layout
// //             initial={{ opacity: 0, y: 32 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 32 }}
// //             transition={{ duration: 0.45, ease: "easeInOut" }}
// //             className="relative mt-14 rounded-3xl border border-gray-200 bg-white p-10 shadow-xl"
// //           >
// //             {/* ===== DETAILS STEP ===== */}
// //             {step === "DETAILS" && (
// //               <>
// //                 <div className="text-sm font-semibold text-blue-600">
// //                   {activeService.code}
// //                 </div>
// //                 <h3 className="mt-2 text-2xl font-bold text-gray-900">
// //                   {activeService.title}
// //                 </h3>
// //                 <p className="mt-6 max-w-4xl text-gray-700">
// //                   {activeService.description}
// //                 </p>

// //                 {activeService.features && (
// //                   <ul className="mt-8 space-y-3">
// //                     {activeService.features.map((feature, index) => (
// //                       <li
// //                         key={index}
// //                         className="flex items-start gap-3 text-gray-700"
// //                       >
// //                         <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
// //                         <span>{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 )}

// //                 <div className="mt-10 text-right">
// //                   <button
// //                     onClick={() => setStep("FORM")}
// //                     className="rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
// //                   >
// //                     Get Started
// //                   </button>
// //                 </div>
// //               </>
// //             )}

// //             {/* ===== FORM STEP ===== */}
// //             {step === "FORM" && (
// //               <>
// //                 <h3 className="text-2xl font-bold text-gray-900">
// //                   Project Location Details
// //                 </h3>
// //                 <p className="mt-2 text-gray-600">
// //                   Please provide the project address details
// //                 </p>

// //                 <div className="mt-8 grid gap-6 max-w-xl">
                  

// //                   <input
// //                     name="postalCode"
// //                     value={formData.postalCode}
// //                     onChange={handleInputChange}
// //                     placeholder="Postal Code"
// //                     className="rounded-lg border px-4 py-3"
// //                   />

// //                   <textarea
// //                     name="address"
// //                     value={formData.address}
// //                     onChange={handleInputChange}
// //                     placeholder="Address"
// //                     rows={4}
// //                     className="rounded-lg border px-4 py-3"
// //                   />
// //                 </div>

// //                 <div className="mt-10 flex justify-between">
// //                   <button
// //                     onClick={() => setStep("DETAILS")}
// //                     className="rounded-xl border px-6 py-3 text-gray-700"
// //                   >
// //                     Back
// //                   </button>
// //                   <button className="rounded-xl bg-blue-600 px-6 py-3 text-white">
// //                     Create Project
// //                   </button>
// //                 </div>
// //               </>
// //             )}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   )
// // }
// "use client"

// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import {
//   Check,
//   ShieldCheck,
//   CreditCard,
//   User as UserIcon,
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react"

// /* ================= DATA ================= */

// const services = [
//   {
//     id: "homeowners",
//     title: "Homeowners & Personal Life Projects",
//     desc: "Planning support for extensions, permissions, compliance, and household projects.",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "small-business",
//     title: "Small Business Strategy & Operations",
//     desc: "Business planning, workflows, and operational improvement.",
//     img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "consultant",
//     title: "Consultant Production & Compliance",
//     desc: "Drawing production, regulatory checks, and QA reviews.",
//     img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "construction",
//     title: "In-House Construction Delivery",
//     desc: "Design-and-build services after consent.",
//     img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200&auto=format&fit=crop",
//   },
// ]

// /* ================= PAGE ================= */

// export default function ServicesPage() {
//   const [selected, setSelected] = useState(services[0].id)
//   const [showConfirmation, setShowConfirmation] = useState(false)

//   return (
//     <>
//       <main className="min-h-screen bg-slate-50 px-6 py-10">
//         {/* HEADER */}
//         <div className="max-w-7xl mx-auto text-center mb-10">
//           <h1 className="text-2xl font-bold text-slate-900">
//             What are you planning?
//           </h1>
//           <p className="text-sm text-slate-500 mt-2">
//             Select the service that best matches your project.
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
//           {/* LEFT */}
//           <div className="col-span-8">
//             <div className="grid grid-cols-2 gap-6">
//               {services.map((service) => {
//                 const active = selected === service.id

//                 return (
//                   <button
//                     key={service.id}
//                     onClick={() => setSelected(service.id)}
//                     className={`relative rounded-2xl border bg-white overflow-hidden text-left transition
//                       ${
//                         active
//                           ? "ring-2 ring-blue-600 border-blue-600"
//                           : "hover:border-blue-300"
//                       }
//                     `}
//                   >
//                     <div className="relative h-40">
//                       <Image
//                         src={service.img}
//                         alt={service.title}
//                         fill
//                         className="object-cover"
//                       />
//                       {active && (
//                         <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-1">
//                           <Check className="w-4 h-4" />
//                         </div>
//                       )}
//                     </div>

//                     <div className="p-4">
//                       <h3 className="font-semibold">{service.title}</h3>
//                       <p className="text-sm text-slate-500">{service.desc}</p>
//                     </div>
//                   </button>
//                 )
//               })}
//             </div>

//             {/* Agent Message */}
//             <div className="mt-6 rounded-2xl border bg-blue-50 p-5 flex gap-4">
//               <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
//                 <UserIcon className="w-5 h-5" />
//               </div>
//               <p className="text-sm text-blue-900">
//                 <strong className="block text-xs uppercase mb-1">
//                    Agent
//                 </strong>
//                 “Once payment is confirmed, I’ll guide you through the next steps.”
//               </p>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="col-span-4 space-y-6">
//             {/* Fee Breakdown */}
//             <div className="rounded-2xl border bg-white p-6">
//               <h3 className="font-semibold mb-4 flex items-center gap-2">
//                 <CreditCard className="w-5 h-5" /> Fee Breakdown
//               </h3>

//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span>Base Package</span>
//                   <span>£39.99</span>
//                 </div>
//                 {/* <div className="flex justify-between">
//                   <span>VAT (20%)</span>
//                   <span>£290.00</span>
//                 </div> */}
//                 <div className="border-t pt-3 flex justify-between font-semibold">
//                   <span>Total</span>
//                   <span className="text-blue-600">£39.99</span>
//                 </div>
//               </div>
//             </div>

//             {/* Checkout */}
//             <div className="rounded-2xl border bg-white p-6 shadow-sm">
//             <div className="flex items-center gap-2 mb-4 text-slate-700">
//               <ShieldCheck className="w-5 h-5 text-green-600" />
//               <span className="font-semibold text-sm">
//                 Secure Checkout
//               </span>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label className="text-xs text-slate-500">
//                   Cardholder Name
//                 </label>
//                 <input
//                   placeholder="John Doe"
//                   className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs text-slate-500">
//                   Card Details
//                 </label>
//                 <input
//                   placeholder="0000 0000 0000 0000"
//                   className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-xs text-slate-500">
//                     Expiry Date
//                   </label>
//                   <input
//                     placeholder="MM / YY"
//                     className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs text-slate-500">
//                     CVV
//                   </label>
//                   <input
//                     placeholder="123"
//                     className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//                   />
//                 </div>
//               </div>

//                <button
//                 onClick={() => setShowConfirmation(true)}
//                 className="w-full rounded-xl bg-blue-600 text-white font-semibold py-3 hover:bg-blue-500 transition"
//               >
//                Pay 
//               </button>

//               {/* <p className="text-[11px] text-slate-400 text-center">
//                 Powered by PlanningAI Secure Payments
//               </p> */}
//             </div>
//           </div>
//           </div>
//         </div>
//       </main>

//       {/* MODAL */}
//       {showConfirmation && (
//         <PurchaseConfirmedModal onClose={() => setShowConfirmation(false)} />
//       )}
//     </>
//   )
// }

// /* ================= MODAL ================= */

// function PurchaseConfirmedModal({ onClose }: { onClose: () => void }) {
//   const router = useRouter()

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose()
//       router.push("/dashboard-eligibility")
//     }, 5000)

//     return () => clearTimeout(timer)
//   }, [router, onClose])

//   return (
//     <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
//         <div className="h-2 bg-blue-600" />

//         <div className="p-8 text-center">
//           <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-emerald-500 overflow-hidden relative">
//             <Image
//               src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
//               alt="Planner"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             <CheckCircle2 className="w-4 h-4" />
//             PURCHASE CONFIRMED
//           </div>

//           <h2 className="text-2xl font-bold mb-3">
//             Welcome Aboard!
//           </h2>

//           <p className="text-slate-600 mb-4">
//             “I'm Sarah, your lead planner. I’ll guide you through eligibility
//             and approvals.”
//           </p>

//           <p className="text-xs text-slate-400 mb-4">
//             Redirecting automatically in 5 seconds…
//           </p>

//           {/* MANUAL NAVIGATION */}
//           <button
//             onClick={() => {
//               onClose()
//               router.push("/eligibility-check")
//             }}
//             className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
//           >
//             Proceed to Eligibility Check
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { ServicesSection } from "@/components/services-section"

export default function ServicesPage() {
  const [expandedServiceId, setExpandedServiceId] =
    useState<string | null>(null)

  return (
    <main className="min-h-screen bg-[#050B18]">
      <ServicesSection
        expandedServiceId={expandedServiceId}
        setExpandedServiceId={setExpandedServiceId}
      />
    </main>
  )
}

