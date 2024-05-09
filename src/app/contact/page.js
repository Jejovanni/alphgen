import React from 'react'

function page() {

  // const itemClasses = {
  //   base: "bg-green-950 w-0",
  //   title: "font-normal text-xl md:text-2xl text-green-600",
  //   // trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
  //   indicator: "text-xl md:text-3xl text-green-600",
  //   content: " text-xl md:text-2xl px-2 text-white",
  // };


  return (
    <div className='bg-black flex flex-col h-[100vh]'>

      <div className="w-full flex flex-col md:flex-row flex-wrap  px-10 my-20 ">
        {/* bg-transparent border */}
        <form action="https://formspree.io/f/mwkgzkbg" method='POST' className='flex flex-col gap-4'>
          <label htmlFor="Name" className='text-white text-xl lg:text-2xl'>Name</label>
          <input type="text" placeholder='Enter your name' className=' h-14 lg:w-[25vw] px-3 text-xl placeholder:text-xl'/>
          <label htmlFor="Email" className='text-white text-xl lg:text-2xl'>Email</label>
          <input type="email" placeholder='youremail@email.com' className=' h-14 lg:w-[25vw] px-3 text-xl placeholder:text-xl' />
          <label htmlFor="Your messsage" className='text-white text-xl lg:text-2xl'>Your Message</label>
          <textarea name="" id="" placeholder='Enter your message' className=' h-52 lg:w-[25vw] px-3 pt-3 text-xl placeholder:text-xl'></textarea>
          <button type="submit" className=' h-14 w-40 bg-green-500 text-xl lg:text-2xl'>Submit</button>




        </form>
      </div>


    </div>
  )
}

export default page