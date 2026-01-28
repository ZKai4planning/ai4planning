"use client"

import type React from "react"
import { useState } from "react"

export function ClientLogin() {
  const [step, setStep] = useState<"REQUEST_OTP" | "VERIFY_OTP">("REQUEST_OTP")

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [resending, setResending] = useState(false)

  const identifier = email || phone

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email && !phone) {
      alert("Please enter Email or Phone number")
      return
    }

    if (step === "REQUEST_OTP") {
      console.log("Sending OTP to:", identifier)
      // 🔗 API: send OTP
      setStep("VERIFY_OTP")
      return
    }

    if (step === "VERIFY_OTP") {
      const otpCode = otp.join("")
      console.log("Verifying OTP:", otpCode)
      // 🔗 API: verify OTP
    }
  }

  const handleResendOtp = () => {
    setResending(true)
    console.log("Resending OTP to:", identifier)
    // 🔗 API: resend OTP
    setTimeout(() => setResending(false), 3000)
  }

  return (
    <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Sign In
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {step === "REQUEST_OTP"
            ? "Enter your email or phone number to receive OTP."
            : `OTP sent to ${identifier}`}
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Google Sign In */}
        <button
          type="button"
          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-3 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow"
        >
          {/* Google Logo */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>

          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            OR USE OTP LOGIN
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
        </div>

        {/* Email */}
        <div className="group">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
            Email
          </label>
          <input
            type="email"
            value={email}
            disabled={step === "VERIFY_OTP"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full h-14 px-4 rounded-lg text-black bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          />
        </div>

        {/* Phone */}
        <div className="group">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            disabled={step === "VERIFY_OTP"}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 9876543210"
            className="w-full h-14 px-4 rounded-lg text-black bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          />
        </div>

        {/* OTP Section */}
        {step === "VERIFY_OTP" && (
          <div className="group">
            <div className="flex justify-between items-end mb-3">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                6-Digit OTP
              </label>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resending}
                className="text-[10px] text-primary hover:underline disabled:opacity-50"
              >
                {resending ? "Resending..." : "Resend OTP"}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1">
              {otp.map((digit, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/, "")
                      if (!value) return

                      const newOtp = [...otp]
                      newOtp[index] = value
                      setOtp(newOtp)

                      if (index < otp.length - 1) {
                        document.getElementById(`otp-${index + 1}`)?.focus()
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace") {
                        const newOtp = [...otp]
                        newOtp[index] = ""
                        setOtp(newOtp)

                        if (index > 0) {
                          document.getElementById(`otp-${index - 1}`)?.focus()
                        }
                      }
                    }}
                    className="w-10 h-10 text-center text-lg font-semibold rounded-lg border"
                  />

                  {/* Hyphen after each box except last */}
                  {index < otp.length - 1 && (
                    <span className="mx-1 text-slate-400 font-bold select-none">
                      -
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-3 rounded"
        >
          {step === "REQUEST_OTP" ? "Send OTP" : "Sign In"}
        </button>
      </form>
    </div>
  )
}
