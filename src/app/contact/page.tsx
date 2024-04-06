import { MeteorsDemo } from '@/components/MeteorsDemo'
import { SignupFormDemo } from '@/components/SignupFormDemo'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <div style={{}}>
      <MeteorsDemo/>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="Red"
      />
      <Spotlight 
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="Red"
      />
      </div>
      <SignupFormDemo/>
    </div>
  )
}

export default ContactPage