import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    // console.log(product);
    return ( product &&
        <Link to={`product/${product.id}`}>
            <div className=" border-[1px] border-zinc-400 rounded-lg p-2 flex gap-2 ">
                <div className="image h-28 w-28 rounded-lg bg-cover bg-center p-2 shadowcss border-[1px] border-zinc-400 ">
                    <img src={product.thumbnail} alt="" className='object-cover object-center ' />
                </div>
                <div className="details">
                    <h2 className='text-lg font-semibold leading-5 line-clamp-2'>{product.title}</h2>
                    <h4 className='text-slate-500/70 text-sm'>{product.brand}</h4>
                    <div className="">
                        <h3 className='flex items-center gap-1'><IoMdStar className='text-xl' /> {product.rating}</h3>
                    </div>
                    <div className="price flex gap-2">
                        <span className='disc bg-green-600 px-2 rounded-md'>-{product.discountPercentage}%</span>
                        <h2 className='flex items-start gap-1 font-semibold'><BsCurrencyRupee /> {(product.price * 82).toFixed(2)} </h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard