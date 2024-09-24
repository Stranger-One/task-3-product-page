import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setProducts } from './store/globalSlice'
import axios from 'axios'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    let query = "phone"

    axios(`https://dummyjson.com/products/search?q=${query}`).then((resp) => {
      // console.log(resp.data.products)
      dispatch(setProducts(resp.data.products))
    })

    dispatch(setLoading(false))
  }, [])

  return (
    <section className='bg-slate-200'>
      <Header />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}

export default App