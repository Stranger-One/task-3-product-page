import React from 'react'
import { IoMdStar } from "react-icons/io";

const ReviewCard = ({review}) => {
    return (
        <div className='shadowcss my-2 p-4 rounded-lg'>
            <div className="flex gap-2 py-2">
                <div className="image w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
                    <img src="https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=612x612&w=0&h=kjCAwH5GOC3n3YRTHBaLDsLIuF8P3kkAJc9RvfiYWBY=" alt="" className='w-full h-full object-cover' />
                </div>
                <div className="">
                    <h2 className='text-lg leading-tight font-semibold'>{review?.reviewerName}</h2>
                    <h4 className='text-sm leading-tight '>{review?.reviewerEmail}</h4>
                </div>
            </div>
            <div className="flex items-center mt-2">
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <span className='ml-1'>{review?.rating.toFixed(1)} out of 5</span>
            </div>
            <h3 className=' text-sm'>Reviewed in India on {new Date(review?.date.split("T")[0]).toDateString()} </h3>
            <p className='my-3 font-semibold'>{review?.comment} </p>
            <div className="flex gap-4 items-center mt-2">
                <button className='text-sm font-semibold border-[1px] border-zinc-700 rounded-lg px-6 py-1 '>Helpful</button>

                <button className='text-sm font-semibold border-l-[1px] border-zinc-700  px-6 py-1 '>Report</button>
            </div>
        </div>
    )
}

export default ReviewCard