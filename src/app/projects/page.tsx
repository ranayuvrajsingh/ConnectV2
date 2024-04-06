import { MeteorsDemo } from '@/components/MeteorsDemo'
import { ParallaxScrollSecondDemo } from '@/components/ParallaxScrollSecondDemo'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const ProjectsPage = () => {
  return (
    <div>
      <MeteorsDemo/>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="Green"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />
     <ParallaxScrollSecondDemo/></div>
  )
}

export default ProjectsPage