import Image from "next/image";
import { FaWhatsapp } from 'react-icons/fa';
import {motion} from 'framer-motion';

const Hero = () => {


  return(

  <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
  style={{
    minHeight: "65vh"
  }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover">
    <Image 
      src='/img/pexels-photo-585419.jpg'
      alt='accidente de trabajo'
      layout='fill'
      objectFit='cover'
      objectPosition='center'
      blurDataURL="/img/bajacal.png"
      placeholder="blur"
    />
    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
  </div>
  <div className="w-full container relative mx-auto">
    <div className=" w-full items-center flex flex-wrap">
      <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
        <div className="w-full">
          <motion.div initial='hidden' animate='visible' variants={{
            hidden:{
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .2,
                duration: .6
              }
            },
          }} >
          <h1 className="text-4xl md:text-6xl text-gray-100 font-extrabold my-6 ">
            Abogado Accidente de Trabajo ART 
          </h1>
          </motion.div>

          <motion.div initial='hidden' animate='visible' variants={{
            hidden:{
              scale: .5,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 1
              }
            },
          }}>
          <p className="mt-4 text-lg text-gray-300">
            Si Ud tuvo un accidente de trabajo o un accidente in itinere y le quedaron secuelas, podemos reclamar su indemnización
          </p>
          </motion.div>
          <button className='bg-gray-900 text-white items-center px-8 py-2 text-1xl my-8 rounded-md hover:bg-teal-600 hover:scale-105 transition-all'>
            <FaWhatsapp className='inline pb-1 ' size={30}/>
            Consultanos por Whatsapp
          </button>
        </div>
      </div>


    </div>
  </div>
  <div
    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
    style={{ height: "300px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 200"
      x="0"
      y="-0"
    >
      <polygon
        className="text-gray-900 fill-current"
        points="0 0 1280 200 0 2560"
      ></polygon>
      <polygon
        className="text-gray-900 fill-current"
        points="2560 0 1280 200 0 1000000 100"
      ></polygon>

    </svg>
  </div>
  <div
    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
    style={{ height: "300px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 200"
      x="0"
      y="-0"
    >
      <polygon
        className="text-stone-100 fill-current"
        points="0 50 1280 200 0 560"
      ></polygon>
      <polygon
        className="text-stone-100 fill-current"
        points="2560 50 1280 200 0 1000000 "
      ></polygon>
    </svg>
  </div>
</div>
)
}

export default Hero