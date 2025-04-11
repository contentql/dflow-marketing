import Analysis from '@/components/marketing/analysis'
import CTA from '@/components/marketing/cta'
import LanguageSupport from '@/components/marketing/lang-support'
import Pricing from '@/components/marketing/pricing'
import Wrapper from '@/components/global/wrapper'
import Companies from '@/components/marketing/companies'
import Features from '@/components/marketing/features'
import Hero from '@/components/marketing/hero'
import Integration from '@/components/marketing/integration'

const HomePage = () => {
  return (
    <Wrapper className="py-20 relative">
      <Hero />
      <Companies />
      <Features />
      <Analysis />
      <Integration />
      <CTA />
    </Wrapper>
  )
}

export default HomePage
