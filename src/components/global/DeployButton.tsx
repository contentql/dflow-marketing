import { Rocket } from 'lucide-react'

export default function DeployButton() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[hsl(258,71%,61%)] to-[hsl(280,65%,60%)] px-6 font-medium text-[hsl(0,0%,100%)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[hsl(291,63.72%,42.16%)] focus:ring-offset-2 focus:ring-offset-[hsl(221,50%,11%)]">
      {/* Background animation */}
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-[hsl(258,71%,61%)] via-[hsl(280,65%,60%)] to-[hsl(220,70%,50%)] opacity-0 transition-all duration-700 group-hover:rotate-180 group-hover:opacity-100"></span>

      {/* Glow effect */}
      <span className="absolute -inset-2 rounded-lg bg-[hsl(258,71%,61%)] opacity-0 blur-md transition-all duration-500 group-hover:opacity-70"></span>

      {/* Icon container with animations */}
      <span className="relative mr-2 flex h-6 w-6 items-center justify-center">
        <Rocket className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
        <span className="absolute h-full w-full animate-ping rounded-full bg-[hsl(258,71%,61%)] opacity-0 duration-1000 group-hover:opacity-20"></span>
      </span>

      {/* Text with enhanced typography */}
      <span className="relative font-semibold tracking-wide">Deploy on dFlow</span>

      {/* Bottom highlight bar */}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-full -translate-x-1/2 bg-[hsl(0,0%,100%)] opacity-0 transition-all duration-500 group-hover:opacity-70"></span>
    </button>
  )
}
