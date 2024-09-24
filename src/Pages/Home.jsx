import React from 'react'
import { ProductCard } from '../components';
import { useSelector } from 'react-redux';

const Home = () => {
  const products = useSelector(state => state.global.products)
  const loading = useSelector(state => state.global.loading)


  return (
    <section className="w-full px-10 py-10 lg:px-32 lg:py-20 ">
      <div className="cont w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">

        {!loading && products ? (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div className=""></div>
        )}
        <ProductCard />
      </div>
    </section>
  )
}

export default Home