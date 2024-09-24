import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const RelatedProduct = ({ product }) => {
    return (
        <div className='w-full h-full  p-2'>
            <div className="w-full h-full  shadowcss rounded-lg">
                <div className="w-full p-2">
                    <img src={`${product?.thumbnail}`} alt="" className='object-cover object-center shadowcss rounded-lg' />
                </div>
                <div className="p-2 text-start">
                    <h2 className='text-lg font-semibold leading-5 line-clamp-2'>{product?.title}</h2>
                    <h4 className='text-slate-500/70 text-sm'>{product?.brand}</h4>
                    <div className="">
                        <h3 className='flex items-center gap-1'><IoMdStar className='text-xl' /> {product?.rating.toFixed(1)}</h3>
                    </div>
                    <div className="price flex gap-2">
                        <span className='disc bg-green-600 px-1 flex items-center justify-center rounded-md text-sm'>-{product?.discountPercentage}%</span>
                        <h2 className='flex items-start gap-1 font-semibold'><BsCurrencyRupee /> {(product?.price * 82).toFixed(2)} </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProduct