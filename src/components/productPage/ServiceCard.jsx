import React from 'react'


const ServiceCard = ({service}) => {
  return (
    <div className='flex justify-start gap-4 flex-col items-center w-[100px] h-full  py-6 '>
        <div className="w-10 h-10 bg-gray-500/20 rounded-full flex flex-shrink-0 items-center justify-center">
            <React.Fragment>
                {service.icon}
            </React.Fragment>
        </div>

        <p className='text-sm leading-tight'>{service.title}</p>
    </div>
  )
}

export default ServiceCard