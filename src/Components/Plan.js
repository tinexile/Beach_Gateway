import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:gris-cols-2 gap-4' >
        {/* Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]' >
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center ' >
            <h3 className='text-5xl md:text-6xl font-bold ' >Plan Your Next Trip</h3>
            <p className='text-2xl py-6' >Thank image on the newly introduce Digital Currency</p>
            <p className='pb-6' >Thank you RBI and GoI for not including Bapu’s image on the newly introduce Digital Currency. Now please remove his image from paper money too.</p>
       
         <div>
          <button className='border-black mr-4 hover:shadow-xl ' >Learn More</button>  
          <button className='bg-black text-white border-black hover:shadow-xl' >Book Your Trip</button>
         </div>

        </div>

    </div>
  )
}

export default Plan