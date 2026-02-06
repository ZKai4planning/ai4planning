"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import {
  CheckCircle,
  Bot,
  History,
  Headset,
  FileSearch,
  CreditCard,
  ShieldCheck,
} from "lucide-react"
import Image from "next/image"

/* ================= PAGE ================= */

export default function ProjectSuccessPage() {
  const [showPaymentCard, setShowPaymentCard] = useState(false)
  const [showPurchaseConfirmed, setShowPurchaseConfirmed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPaymentCard(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main className="min-h-screen bg-slate-50 px-6 py-8">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Project Home Owner
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Your Rear Extension project is progressing successfully.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT */}
          <div className="col-span-8 space-y-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <RoadmapStep label="Profile" completed />
                <RoadmapLine />
                <RoadmapStep label="Service & Payment" completed />
                <RoadmapLine />
                <RoadmapStep label="Consultant Allocation" completed />
                <RoadmapLine />
                <RoadmapStep
                  label="Eligibility Check"
                  completed
                  icon={<FileSearch className="w-4 h-4" />}
                />
                <RoadmapLine />
                <RoadmapStep
                  label="Consultant Schedule"
                  icon={<Headset className="w-4 h-4" />}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Consultant */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                      alt="Planner"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah</p>
                    <p className="text-xs text-slate-500">
                      Senior Planning Consultant
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm">
                  “I’ve reviewed your project details and am confident we can help
                  you achieve planning permission.”
                </div>
              </div>

              {/* AI Agent */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Agent Z</p>
                    <p className="text-xs text-slate-500">
                      AI Support Assistant
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600">
                  I’ll assist you through quotation and next steps.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-4 space-y-6">
            {!showPaymentCard ? (
              <div className="rounded-2xl bg-green-600 p-6 text-white shadow-lg">
                <p className="text-xs opacity-80 mb-2">
                  Hi Home Owner Thank You for Choosing Ai4Planning we have assigned sarah your personal planning consultant who will be in touch shortly to discuss your project requirements.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  Sarah Will Contact You
                </h3>

                <div className="rounded-xl bg-white/20 px-4 py-3 text-sm space-y-1">
                  <p className="font-semibold">
                    📅 Thursday, 5 February 2026
                  </p>
                  <p className="opacity-90">
                    🕒 09:30 AM (Consultation Time)
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-green-600 p-6 text-white shadow-lg">
              <p className="text-xs uppercase tracking-wide opacity-80 mb-2">
                Next Step
              </p>

              <h3 className="text-lg font-semibold mb-3">
                Pay to Unlock Your Quotation
              </h3>

              <p className="text-sm opacity-90 mb-4">
                Your eligibility process has been completed successfully.
                Your project qualifies for this service.
              </p>

              <p className="text-sm opacity-90 mb-6">
                Complete payment to receive your personalised quotation,
                planning assessment, and next-step guidance.
              </p>

              <div className="rounded-xl bg-white/20 px-4 py-3 text-sm space-y-1 mb-5">
                <p className="font-semibold">
                  💳 Payment required to unlock quotation
                </p>
                <p className="opacity-90">
                  📄 Includes planning review and cost breakdown
                </p>
              </div>

             <button
                  onClick={() => setShowPurchaseConfirmed(true)}
                  className="w-full rounded-xl bg-white text-green-700 font-semibold py-3
                             hover:bg-green-50 transition shadow-md"
                >
                  Pay
                </button>

              {/* <p className="text-xs text-white/80 text-center mt-3">
                Secure payment · No obligation to proceed after quotation
              </p> */}
            </div>
            )}

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <HistoryItem label="Consultant allocated." time="JUST NOW" />
              <HistoryItem label="Eligibility completed." time="1 MIN AGO" />
              <HistoryItem label="Service selected." time="2 MIN AGO" />
            </div>
          </div>
        </div>
      </main>

      {showPurchaseConfirmed && (
        <PurchaseConfirmedModal
          onClose={() => setShowPurchaseConfirmed(false)}
        />
      )}
    </>
  )
}

/* ================= MODAL ================= */

function PurchaseConfirmedModal({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const [confirmed, setConfirmed] = useState(false)
  const redirectedRef = useRef(false)

  useEffect(() => {
    if (!confirmed) return

    const timer = setTimeout(() => {
      if (redirectedRef.current) return
      redirectedRef.current = true
      onClose()
      router.push("/dashboard-upload")
    }, 3000)

    return () => clearTimeout(timer)
  }, [confirmed, router, onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="h-2 bg-green-600" />

        <div className="p-6 text-center">
          {!confirmed ? (
            <>
              <h3 className="font-semibold mb-4 flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" /> Fee Breakdown
              </h3>

              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span>Base Package</span>
                  <span>£39.99</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-blue-600">£39.99</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm">
          <ShieldCheck className="w-5 h-5 text-green-600" />
          Secure Checkout
        </div>

        <div className="space-y-4 text-left">
          <div>
            <label className="text-xs text-slate-500">
              Cardholder Name
            </label>
            <input
              placeholder="Ajay"
              className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-xs text-slate-500">
              Card Details
            </label>
            <input
              placeholder="0000 0000 0000 0000"
              className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-500">
                Expiry Date
              </label>
              <input
                placeholder="MM / YY"
                className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500">
                CVV
              </label>
              <input
                placeholder="123"
                className="mt-1 w-full rounded-xl border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <button
                onClick={() => setConfirmed(true)}
                className="w-full mt-6 rounded-xl bg-blue-600 text-white font-semibold py-3 hover:bg-blue-500 transition"
              >
                Pay
              </button>

          {/* <p className="text-[11px] text-slate-400 text-center">
                Powered by PlanningAI Secure Payments
              </p> */}
        </div>
            </>
          ) : (
            <>
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Purchase Confirmed
              </h2>
              <p className="text-sm text-slate-600">
                Redirecting you to the next step…
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ================= COMPONENTS ================= */

function RoadmapStep({
  label,
  icon,
  completed,
}: {
  label: string
  icon?: React.ReactNode
  completed?: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[90px]">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center ${
          completed
            ? "bg-blue-600 text-white"
            : "bg-slate-200 text-slate-500"
        }`}
      >
        {completed ? <CheckCircle className="w-5 h-5" /> : icon}
      </div>
      <span className="text-xs text-center">{label}</span>
    </div>
  )
}

function RoadmapLine() {
  return <div className="flex-1 h-[3px] bg-blue-600 mx-2" />
}

function HistoryItem({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex gap-3 py-3 border-b last:border-b-0">
      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
        <History className="w-4 h-4 text-slate-500" />
      </div>
      <div>
        <p className="text-sm">{label}</p>
        <p className="text-xs text-slate-400">{time}</p>
      </div>
    </div>
  )
}
