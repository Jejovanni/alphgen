import React from 'react'
import { Input } from "@nextui-org/input";

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

      <div className="w-full flex flex-col md:flex-row flex-wrap gap-4 px-10 my-20">
        {/* bg-transparent border */}
        <Input
          classNames={{
            base: "rounded-sm ",
            label: "text-xl pb-6",
            input: [
              "bg-black",
              "text-warning",
              "h-5",
              // "placeholder:text-white",
            ],
            innerWrapper: "bg-white py-0",
            inputWrapper: [
              "bg-black",
              // "group-data-[focused=true]:bg-default-200/50",
              // "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          // itemClasses={itemClasses}
          type="text"
          color={'warning'}
          label="Name"
          placeholder="Enter your name"
          // className="w-[70vw] h-16 md:w-[20vw] text-xl"
        />
        <Input

          type="email"
          color={'warning'}
          label="Email"
          placeholder="Enter your email"
          className="max-w-[220px]"
        />
        <Input

          type='text'
          color={'warning'}
          label="Email"
          placeholder="Enter your message"
          className="max-w-[220px]"
        />

      </div>


    </div>
  )
}

export default page