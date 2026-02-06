"use client"

import { useState, useEffect } from "react"
import {
  FileSearch,
  Ruler,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  User,
  Package,
  Users,
  Headset,
  Bot,
  ArrowRight,
  Home,
} from "lucide-react"

interface TableProps {
  onView?: (id: string) => void
}


export default function ServiceTable( {onView }:TableProps)      {
  const [showDetails, setShowDetails] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [showRoadmap, setShowRoadmap] = useState(false)

  return (
    <>
      {/* ================= TABLE ================= */}
      <div className="w-full overflow-x-auto rounded-2xl border bg-white shadow-sm">
        <table className="w-full text-sm text-slate-700">
          <thead className="bg-slate-50 border-b">
            <tr>
              {[
                "#",
                "Cust-ID",
                "Cust-Name",
                "Date",
                "Service-ID",
                "Service",
                "Sub-Service-ID",
                "Sub-Service",
                "Reference No",
                "Status",
                "Action",
              ].map((head) => (
                <th
                  key={head}
                  className="px-4 py-3 text-left font-semibold text-slate-600 whitespace-nowrap"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-slate-50 transition">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3 font-medium">CUST-001</td>
              <td className="px-4 py-3">Ajay c</td>
              <td className="px-4 py-3">01-01-2022</td>
              <td className="px-4 py-3 font-medium">SRV-001</td>

              {/* SERVICE CLICK */}
              <td
                onClick={() => {
                  setShowRoadmap(true)
                  setShowDetails(false)
                  setShowAnalysis(false)
                }}
                className="px-4 py-3 underline text-blue-600 cursor-pointer"
              >
                Home Services
              </td>

              <td className="px-4 py-3 font-medium">SUB-014</td>

              {/* SUB SERVICE CLICK */}
              <td
                onClick={() => {
                  setShowRoadmap(true)
                  setShowDetails(false)
                  setShowAnalysis(false)
                }}
                className="px-4 py-3 underline text-blue-600 cursor-pointer"
              >
                Home Reconstruction
              </td>

              <td className="px-4 py-3 font-medium">asdasd123</td>

              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  —
                </span>
              </td>

              {/* ELIGIBILITY CHECK */}
              <td className="px-4 py-3">
                <button
                  onClick={() => {
                    setShowRoadmap(false)
                    setShowDetails(false)
                    setShowAnalysis(true)
                  }}
                  className="rounded-lg border border-blue-600 px-4 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 transition"
                >
                  Eligibility Check
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= ANALYSIS MODAL ================= */}
      {showAnalysis && (
        <AnalysisModal
          onComplete={() => {
            setShowAnalysis(false)
            setShowDetails(true)
          }}
        />
      )}

      {/* ================= ROADMAP (SERVICE CLICK) ================= */}
      {showRoadmap && (
        <div className="pt-10">
          {/* ===== Project Roadmap ===== */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-slate-800">
                Project Roadmap
              </h2>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                STEP 2 OF 5
              </span>
            </div>

            <div className="flex items-center justify-between">
              <RoadmapStep label="Profile" status="completed" icon={User} />
              <RoadmapLine />
              <RoadmapStep label="Service & Initial Payment" status="active" icon={Package} />
              <RoadmapLine />
              <RoadmapStep label="Consultant Allocation" icon={Users} />
              <RoadmapLine />
              <RoadmapStep label="Eligibility Check" icon={FileSearch} />
              <RoadmapLine />
              <RoadmapStep label="Approved" icon={Home} />  
            </div>
          </div>

          {/* ===== Planning Team ===== */}
         
        </div>
      )}

      {/* ================= ELIGIBILITY DETAILS (UNCHANGED) ================= */}
      <div className="pt-10">
        {/* {showDetails && <ConstructionDetails />} */}
      </div>
    </>
  )
}

/* ================= ANALYSIS MODAL ================= */

function AnalysisModal({ onComplete }: { onComplete: () => void }) {
  const logs = [
    { icon: FileSearch, text: "Collecting submitted property details" },
    { icon: Ruler, text: "Cross-checking dimensions with regulations" },
    { icon: Landmark, text: "Scanning planning & zoning policies" },
    { icon: ShieldCheck, text: "Checking environmental & heritage constraints" },
    { icon: CheckCircle2, text: "Eligibility analysis completed successfully" },
  ]

  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= logs.length) {
          clearInterval(interval)
          setTimeout(onComplete, 600)
          return prev
        }
        return prev + 1
      })
    }, 700)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">
          Analyzing your project
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Please wait while our system evaluates your details.
        </p>

        <div className="space-y-4">
          {logs.map((log, i) => {
            const isCompleted = i < activeStep - 1
            const isActive = i === activeStep - 1

            return (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-slate-700"
              >
                {/* STATUS ICON */}
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : isActive ? (
                  <span className="h-5 w-5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
                ) : (
                  <span className="h-5 w-5 rounded-full border border-slate-300" />
                )}

                {/* STEP ICON */}
                <log.icon className="w-5 h-5 text-blue-600" />

                {/* TEXT */}
                <span>{log.text}</span>
              </div>
            )
          })}
        </div>

        {/* PROGRESS BAR */}
        <div className="mt-6 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${Math.min(
                (activeStep / logs.length) * 100,
                100
              )}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

/* ================= ROADMAP HELPERS ================= */

function RoadmapStep({
  label,
  icon: Icon,
  status,
}: {
  label: string
  icon: any
  status?: "completed" | "active"
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-xs">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          status === "completed"
            ? "bg-green-100 text-green-600"
            : status === "active"
            ? "bg-blue-100 text-blue-600"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-slate-600">{label}</span>
    </div>
  )
}

function RoadmapLine() {
  return <div className="flex-1 h-px bg-slate-300 mx-2" />
}
