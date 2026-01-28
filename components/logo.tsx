import Image from "next/image"

export function Logo() {
  return (
    <div className="w-18 h-10">
      <Image
        src="/logo.png"
        alt="Ai4Planning logo"
        width={60}
        height={42}
        className="object-contain"
      />
    </div>
  )
}
