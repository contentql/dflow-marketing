import { cn } from '@/lib/cn'
import useColorScheme from '../hooks/useColorScheme'

const IFrameSkeleton = ({ className = '' }: { className?: string }) => {
  const theme = useColorScheme()

  return (
    <div
      className={cn(
        `${theme === 'dark' ? 'bg-cq-card text-cq-primary' : 'bg-[#F0F0F0] text-cq-input'} flex h-[640px] w-full items-center justify-center text-3xl`,
        className,
      )}
    >
      <div className="flex gap-4">
        <div className="h-4 w-4 animate-bounce-slow rounded-full bg-slate-600"></div>
        <div className="h-4 w-4 animate-bounce-slow rounded-full bg-slate-600 delay-200"></div>
        <div className="delay-400 h-4 w-4 animate-bounce-slow rounded-full bg-slate-600"></div>
      </div>
    </div>
  )
}

export default IFrameSkeleton
