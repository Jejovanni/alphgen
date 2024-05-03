'use client'
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function page() {

  const itemClasses = {
    base: "py-2 w-full",
    title: "font-normal text-xl md:text-2xl text-green-600",
    // trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-xl md:text-3xl text-green-600",
    content: " text-xl md:text-2xl px-2 text-white",
  };



  return (
    <div className=' bg-black flex flex-col items-center pb-60 '>
      <div className=' my-20'>
        <h1 className=' font-bold text-2xl md:text-6xl text-green-600'>About</h1>
      </div>
      <div className='w-[80vw] flex flex-col mb-20'>
        <p className='text-white text-xl lg:text-3xl'>Welcome to AlphGen, your partner in streaming success!<br />
          <br />Our mission is simple: to provide comprehensive support and resources to help streamers grow their careers and build their brands.<br />
          <br />
          With a focus on equipment, marketing, promotion, and management, AlphGen offers a holistic approach to streamer support. We understand that success in streaming requires more than just talent—it demands the right tools, strategy, and support network. That's where we come in.<br />
          <br />
          Our team consists of passionate experts who are committed to staying ahead of the curve in the streaming industry. Whether you're just starting out or looking to take your channel to the next level, we provide personalized solutions tailored to your unique goals and aspirations.
          From top-of-the-line streaming equipment to strategic marketing campaigns and hands-on management, AlphGen is your all-in-one solution for streamer success. Let us be your partner on your journey to becoming the next big name in streaming.<br />
          <br />
          Join the AlphGen family today and unlock your potential as a streamer. Together, we'll turn your passion into a thriving career.</p>
      </div>
      <div className='w-[80%] flex flex-col' id='faqs'>
        <Accordion variant="bordered" itemClasses={itemClasses} >
          <AccordionItem key="1" aria-label="Accordion 1" title="Is AlphGen only working with streamers?" >
            {'Yes, at this time we are working exclusively with streamers'}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="What is the catch?">
            {'We support streamers signed to us with resources they need to grow and we get a fair 30 - 40% percentage of streaming revenue.'}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Do I have to be a streamer to work with AlphGen?">
            {'Not necessarily, if you think you have what it takes to work with us then by all means reach out to us. '}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default page