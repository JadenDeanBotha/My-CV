import React from 'react'
import Link from 'next/link'
import contactDetails from '../pages/contactDetails'
import Image from './Image'

const Header = () => {
  return (
    <div>
      <Image alt='Profile'/>
        <h1>Jaden Dean Botha</h1>
        <h3>Junior Full-Stack Web Developer</h3>
        <Link href="/" className='link'>Home</Link><br/>
        <Link href="/projects" className='link'>Projects</Link><br/>
        <Link href="/contactDetails" className='link'>Contact Me</Link>
        <style jsx>{`
          div {
            text-align: center;
            background: white;
            padding-bottom: 10px;
          }
          .Link {
            color: red;
            padding-left: 10px;
          }
        `}</style>
    </div>
  )
}

export default Header