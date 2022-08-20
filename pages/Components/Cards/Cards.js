import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    
    <div className='w-full flex justify-center'>
    <div className='cardcontainer w-full flex flex-col items-center justify-center md:flex-row  md:justify-evenly  my-16 md:max-w-[75%] center'>
      <div className='card mb-4 shadow-md bg-gray-200 max-w-[80%] '>
        <div className='cardContent m-5 w-[17rem] p-5 flex flex-col items-center justify-center bg-gray-500'>
          <div className='w-25 h-25 flex flex-col justify-center'>
            <Image 
              src='/img/accident.png'
              alt='accidente de trabajo'
              width={100}
              height={100}
              layout='intrinsic'
              objectFit='contain'
              objectPosition='center'
              />
          </div>
          <h2 className='text-xl font-bold mt-7'>Accidentes de trabajo</h2>
          <p className='text-center my-2'>Es un hecho súbito y violento ocurrido en el lugar donde el trabajador realiza su tarea y por causa de la misma. Consúltenos</p>
        </div>
      </div>
      <div className='card mb-4 shadow-md bg-gray-200 max-w-[80%] '>
        <div className='cardContent m-5 w-[17rem] p-5 flex flex-col items-center justify-center bg-gray-500'>
          <div className='w-25 h-25 flex flex-col justify-center'>
            <Image 
              src='/img/accident.png'
              alt='accidente de trabajo'
              width={100}
              height={100}
              layout='intrinsic'
              objectFit='contain'
              objectPosition='center'
              />
          </div>
          <h2 className='text-xl font-bold mt-7'>Accidentes de trabajo</h2>
          <p className='text-center my-2'>Es un hecho súbito y violento ocurrido en el lugar donde el trabajador realiza su tarea y por causa de la misma. Consúltenos</p>
        </div>
      </div>
      <div className='card mb-4 shadow-md bg-gray-200 max-w-[80%] '>
        <div className='cardContent m-5 w-[17rem] p-5 flex flex-col items-center justify-center bg-gray-500'>
          <div className='w-25 h-25 flex flex-col justify-center'>
            <Image 
              src='/img/accident.png'
              alt='accidente de trabajo'
              width={100}
              height={100}
              layout='intrinsic'
              objectFit='contain'
              objectPosition='center'
              />
          </div>
          <h2 className='text-xl font-bold mt-7'>Accidentes de trabajo</h2>
          <p className='text-center my-2'>Es un hecho súbito y violento ocurrido en el lugar donde el trabajador realiza su tarea y por causa de la misma. Consúltenos</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards