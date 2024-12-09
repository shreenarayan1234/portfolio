import React from 'react'
import aboutimage from "../assets/about.jpg"

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'> 
        <div className="md:grid md:grid-cols-2 sm:py-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold md-4 primary-color">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed similique, eligendi molestias magni iusto distinctio ex nemo veniam dolorum ullam nisi facilis Aboutvoluptas culpa. Ab vitae dolorum et iste!
                    </p>
                </div>
            </div>
            <img src={aboutimage} alt="aboutImg" className='mx-auto rounded-3xl py-8 md:py-0' width={300} height={300}/>
        </div>
    </div>
  )
}

export default About