import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='w-full bg-slate-900 text-slate-200 grid grid-cols-2 md:grid-cols-4 px-4 gap-4 lg:px-20 py-10 shadowcss'>
        <ul>
            <h2 className='text-lg font-bold mb-2'>Get to Know Us</h2>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>About Zasira</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Careers</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Press Released</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Zasira Science</li></Link>
        </ul>
        <ul>
            <h2 className='text-lg font-bold mb-2'>Connect with Us</h2>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Facebook</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Twitter</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Instagram</li></Link>
            <div className="flex justify-between items-center">

            </div>
        </ul>
        <ul>
            <h2 className='text-lg font-bold mb-2'>Make Money with Us</h2>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Sele on Zasira</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Sele under Zasira Accelertor</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Protect and Build Your Brand</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Zasira Global Selling</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Become a Affiliate</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Fulfilment by Zasira</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Advertise Your Products</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Zasira Pay on Merchants</li></Link>
        </ul>
        <ul>
            <h2 className='text-lg font-bold mb-2'>Let Us Help You</h2>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Your Account</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Returns Centre</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Recalls and Product Safety Alerts</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>100% Purchase Protection</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Amazon App Download</li></Link>
            <Link ><li className='text-[16px] w-fit hover:underline duration-150'>Help</li></Link>
        </ul>
    </section>
  )
}

export default Footer