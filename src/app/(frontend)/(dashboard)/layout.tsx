import DashboardHeader from '@/components/dashboard/dashboard-header'
import { AuthWrapper } from '@/context/AuthWrapper'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <main className="min-h-screen flex-grow">
        <DashboardHeader />
        <div className="px-6  pb-24 pt-20">{children}</div>
      </main>
    </AuthWrapper>
  )
}

export default DashboardLayout
