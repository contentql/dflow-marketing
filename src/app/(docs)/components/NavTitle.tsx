import Logo from '../../../../public/images/dflow-no-bg.png'
import Image from 'next/image'

export const NavTitle = () => {
  return (
    <div className="flex items-center gap-x-2 text-2xl font-semibold">
      <Image src={Logo} alt="dFlow Logo" height={40} width={40} />
      dFlow
    </div>
  )
}

export default NavTitle
