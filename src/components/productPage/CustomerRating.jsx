import React, { useEffect, useState } from 'react'
import { IoMdStar } from "react-icons/io";

const CustomerRating = ({rating}) => {
    const [ratingDetails, setRatingDetails] = useState({})

    useEffect(()=>{
        const ratingNum = Math.floor((Math.random() + 1) * 100)
        
        const fiveStar = Math.floor(Math.random() * 100)
        const fourStar = Math.floor(Math.random() * (100 - fiveStar))
        const threeStar = Math.floor(Math.random() * (100 - fiveStar - fourStar))
        const twoStar = Math.floor(Math.random() * (100 - fiveStar - fourStar - threeStar))
        const oneStar = 100 - fiveStar - fourStar - threeStar - twoStar

        setRatingDetails({
            ratingNum,
            fiveStar,
            fourStar,
            threeStar,
            twoStar,
            oneStar
        })

    }, [])



    return (
        <>
            <h2 className='text-xl font-semibold'>Customer Reviews</h2>
            <div className="flex items-center ">
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <span className='ml-1'>{rating?.toFixed(1)} out of 5</span>
            </div>
            <h2>{ratingDetails?.ratingNum} global rating</h2>
            <div className=" flex flex-col gap-1 mt-4">
                <div className="flex gap-2">
                    <h4 className='text-lg font-semibold'>5 star</h4>
                    <div className="border-[1px] border-zinc-600 p-[1px] w-[60%] rounded-lg overflow-hidden ">
                        <div className={`bg-green-600 h-full rounded-lg `} style={{width: `${ratingDetails?.fiveStar}%`}}></div>
                    </div>
                    <h4 className='text-green-600'>{ratingDetails?.fiveStar}%</h4>
                </div>
                <div className="flex gap-2">
                    <h4 className='text-lg font-semibold'>4 star</h4>
                    <div className="border-[1px] border-zinc-600 p-[1px] w-[60%] rounded-lg overflow-hidden " >
                        <div className="bg-green-600 h-full rounded-lg " style={{width: `${ratingDetails?.fourStar}%`}}></div>
                    </div>
                    <h4 className='text-green-600'>{ratingDetails?.fourStar}%</h4>
                </div>
                <div className="flex gap-2">
                    <h4 className='text-lg font-semibold'>3 star</h4>
                    <div className="border-[1px] border-zinc-600 p-[1px] w-[60%] rounded-lg overflow-hidden ">
                        <div className="bg-green-600 h-full rounded-lg " style={{width: `${ratingDetails?.threeStar}%`}}></div>
                    </div>
                    <h4 className='text-green-600'>{ratingDetails?.threeStar}%</h4>
                </div>
                <div className="flex gap-2">
                    <h4 className='text-lg font-semibold'>2 star</h4>
                    <div className="border-[1px] border-zinc-600 p-[1px] w-[60%] rounded-lg overflow-hidden ">
                        <div className="bg-green-600 h-full rounded-lg " style={{width: `${ratingDetails?.twoStar}%`}}></div>
                    </div>
                    <h4 className='text-green-600'>{ratingDetails?.twoStar}%</h4>
                </div>
                <div className="flex gap-2">
                    <h4 className='text-lg font-semibold'>1 star</h4>
                    <div className="border-[1px] border-zinc-600 p-[1px] w-[60%] rounded-lg overflow-hidden ">
                        <div className="bg-green-600 h-full rounded-lg " style={{width: `${ratingDetails?.oneStar}%`}}></div>
                    </div>
                    <h4 className='text-green-600'>{ratingDetails?.oneStar}%</h4>
                </div>
                {/* {fiveStar + fourStar + threeStar + twoStar + oneStar} */}
            </div>
        </>
    )
}

export default CustomerRating