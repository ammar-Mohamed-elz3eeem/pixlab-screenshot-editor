/* eslint-disable no-undef */
import logo from '../../assets/img/logo.png'

function Logo(): JSX.Element {
  return (
    <div className='hidden  md:flex md:flex-1 sm:items-stretch sm:justify-start'>
      <div className='flex-shrink-0 items-center'>
        <a href='/'>
          <img className='h-8 w-auto logo' src={logo} alt='Your Company' />
        </a>
      </div>
    </div>
  )
}

export default Logo
