import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">

      <div className="flex flex-col items-center justify-center bg-[url('/alphgen2.jpg')] bg-blend-darken bg-cover md:bg-cover bg-no-repeat bg-center h-[40vh] md:h-[80vh]">
        <div>
          <h1 className=" font-sans text-white text-5xl md:text-6xl font-bold tracking-tighter text-center drop-shadow-xl z-0">Supercharge your streaming career</h1>
          <p className=" text-xl md:text-2xl text-gray-200 text-center font-medium tracking-tighter mt-6">Get the resources you need to fast track your growth</p>
        </div>
        <div className=" flex justify-center md:justify-between mt-10 w-full md:w-[11vw] z-0">
          <Link href={"/contact"}>
            <Button color="default" size="lg" radius="sm" className="mr-1">Contact US</Button>
          </Link>
          <Link href={"/about"}>
            <Button color="success" size="lg" radius="sm" className="ml-1">Learn More</Button>
          </Link>

        </div>

      </div>

      <div className=" bg-black md:h-[80vh] flex flex-col md:flex-row ">
        <div className="flex flex-col md:w-[50%] h-[30vh] md:h-[80vh] justify-center lg:items-center">
          <h1 className=" text-green-600 md:text-5xl text-4xl text-center md:text-left font-bold tracking-tighter md:w-[60%]">Unlocking the potential of Streamer talent in Africa</h1>
          <p className=" text-2xl text-zinc-50 font-medium text-center md:text-left mt-3">By Africans for Africans</p>
          <div className=" flex justify-center md:justify-between w-full md:w-[11vw] mt-4">
            <Link href={"/contact"}>
              <Button color="default" size="lg" radius="sm" className="mr-1">Contact US</Button>
            </Link>
            <Link href={"/about"}>
              <Button color="success" size="lg" radius="sm" className="ml-1">Learn More</Button>
            </Link>

          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-[30vh] md:h-[80vh] bg-[url('/section2.jpg')] bg-cover bg-no-repeat bg-center ">
        </div>


      </div>

      <div className=" bg-black h-[30vh] md:h-[90vh] items-center flex flex-col justify-center">
        <div className="bg-green-700 w-[90vw] md:w-[70%] h-[20vh] md:h-[60vh] rounded-3xl flex flex-col justify-center items-center">
          <h1 className=" text-4xl lg:text-6xl text-center font-bold tracking-tighter px-5">Get all you need to fast track your growth</h1>
          <div className=" flex justify-center md:justify-between w-full md:w-[11vw] mt-4">
            <Link href={"/contact"}>
              <Button color="default" size="lg" radius="sm" className="mr-1">Contact Us</Button>
            </Link>
            <Link href={"/about"}>
              <Button color="success" size="lg" radius="sm" className="ml-1">Learn More</Button>
            </Link>

          </div>
        </div>




      </div>

      <div className=" bg-black md:h-[80vh] flex flex-col items-center justify-center">
        <h2 className=" text-green-600 text-4xl md:text-[56px] font-semibold py-7">We offer our streamers</h2>

        <div className=" flex flex-col lg:flex-row w-[70%] lg:h-[60vh] items-center lg:justify-evenly">

          <div className=" flex flex-col items-center mb-7 lg:mb-0">
            <div className=" bg-[url('/marketing.jpg')] bg-cover bg-no-repeat bg-center h-[200px] lg:h-[293px] w-[200px] lg:w-[293px] rounded-xl"></div>
            <div className=" w-[260px] md:w-[293px] pt-3 text-center">
              <h4 className=" text-xl md:text-2xl tracking-tighter text-green-600 font-semibold">Marketing & Promotion</h4>
              <p className=" text-lg lg:text-[20px] text-white leading-7">Reach your ideal audience and expand your platform.</p>
            </div>


          </div>

          <div className=" flex flex-col items-center mb-7 lg:mb-0">
            <div className=" bg-[url('/equipment.jpg')] bg-cover bg-no-repeat bg-center h-[200px] lg:h-[293px] w-[200px] lg:w-[293px] rounded-xl"></div>
            <div className=" w-[260px] md:w-[293px] pt-3 text-center">
              <h4 className=" text-xl md:text-2xl tracking-tighter text-green-600 font-semibold">Equipment</h4>
              <p className="text-lg lg:text-[20px] text-white leading-7">The tools you need to create the best version of you.</p>
            </div>


          </div>
          <div className=" flex flex-col items-center mb-32 lg:mb-0">
            <div className=" bg-[url('/creative.jpg')] bg-cover bg-no-repeat bg-center h-[200px] lg:h-[293px] w-[200px] lg:w-[293px] rounded-xl"></div>
            <div className=" w-[260px] md:w-[293px] pt-3  text-center">
              <h4 className=" text-xl md:text-2xl tracking-tighter text-green-600 font-semibold">Management</h4>
              <p className="text-lg lg:text-[20px] text-white leading-7">Free up time, so you focus on what matters to you. Creating.</p>
            </div>


          </div>

        </div>
      </div>

    </main>
  );
}
