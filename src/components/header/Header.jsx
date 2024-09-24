import axios from 'axios';
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading, setProducts } from '../../store/globalSlice';


const Header = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setLoading(true))


        axios(`https://dummyjson.com/products/search?q=${query}`).then((resp) => {
            // console.log(resp.data.products)
            dispatch(setProducts(resp.data.products))
        })

        dispatch(setLoading(false))
        navigate('/')
        setQuery("")
    };


    return (
        <header className='h-14 px-10 py-2 flex items-center justify-between shadowcss sticky top-0 z-50 bg-slate-200'>
            <div className="h-10 w-10 bg-blue-500 rounded-full overflow-hidden">
                <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" alt="logo" className='w-full h-full object-cover' />
            </div>
            <form onSubmit={handleSubmit} className='grid grid-cols-[auto_50px] h-full min-w-[350px] rounded-lg overflow-hidden '>
                <input value={query} onChange={(e)=>setQuery(e.target.value)} type="search" placeholder='Search Product ... ' className='outline-none border-none px-4 ' />
                <button type='submit' className=' flex items-center justify-center h-full bg-blue-600 hover:bg-blue-600/80'>
                    <IoSearch className='text-2xl ' />
                </button>
            </form>
        </header>
    )
}

export default Header