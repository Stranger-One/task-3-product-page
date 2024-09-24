import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BsCurrencyRupee } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { GiTrophyCup } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import { FiSend } from "react-icons/fi";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { CustomerRating, OfferCard, RelatedProduct, ReviewCard, ServiceCard } from '../components';



const ProductPage = () => {
  const { productId } = useParams()
  const products = useSelector(state => state.global.products)
  const [product, setProduct] = useState(undefined)
  const [mainImage, setmainImage] = useState()

  const mainImgCont = useRef(null)
  const [zoomDisplay, setZoomDisplay] = useState(false)
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(productId))
    // console.log(product);
    setProduct(product)
    setmainImage(product?.images[0])
  }, [products])

  const imageHandle = (image) => {
    setmainImage(image)
  };

  useEffect(() => {
    mainImgCont.current.addEventListener("mouseenter", () => {
      setZoomDisplay(true)
    });

    mainImgCont.current.addEventListener("mousemove", (e) => {
      // mainImgCont.current.getBoundingClientRect().top
      setPositionX((e.screenX - mainImgCont.current.getBoundingClientRect().left - 15) / 4)
      setPositionY((e.screenY - mainImgCont.current.getBoundingClientRect().top - 80) / 4)
      // console.log(e.screenX - mainImgCont.current.getBoundingClientRect().left - 15, e.screenY - mainImgCont.current.getBoundingClientRect().top - 80)
    });

    mainImgCont.current.addEventListener("mouseleave", () => {
      setZoomDisplay(false)
    })
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || comment === '') {
      alert('fill all the details...')
      return
    }

    const commentData = {
      name,
      email,
      comment
    }
    // console.log(commentData);
    setName('')
    setEmail('')
    setComment('')
  };



  return (
    <section className='w-full p-4 lg:p-10'>

      <div className="md:flex gap-4">
        {/* image container */}
        <div className="imageContainer md:w-[40%] md:h-[250px] lg:h-[350px] grid grid-cols-1 lg:grid-cols-[70px_auto] md:sticky md:top-20 ">
          <div className="allImages order-2  flex lg:block ">
            {product?.images.map((image, index) => (
              <div key={index} className="">
                <input type="radio" onChange={() => imageHandle(image)} name='check' id={index} className='peer hidden' />
                <div className="border-2 peer-checked:border-red-400  rounded-lg cursor-pointer flex items-center justify-start lg:justify-center mt-1">
                  <label htmlFor={index} className=''>
                    <img key={index} src={image} alt="product image" className="w-16 h-16 object-cover border-[2px] border-zinc-500  rounded-lg cursor-pointer mb-1 " />
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div ref={mainImgCont} className="mainImage lg:order-2 h-[250px] lg:h-[350px] p-4 border-[1px] border-black relative">
            <img src={mainImage} alt="product image" className="w-full h-full object-cover " />
          </div>
        </div>

        {/* detailsContainer */}
        <div className=" md:w-[60%]  lg:px-8 relative ">
          <div className={`${zoomDisplay ? "block" : "hidden"} fixed top-20 w-[40%] aspect-square bg-green-500 z-[10] `}
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: '200%',
              backgroundPosition: `${positionX}% ${positionY}%`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h2 className='text-2xl font-semibold line-clamp-2'>{product?.title}</h2>
          <h4 className='text-slate-700/60 font-bold text-lg'>{product?.brand}</h4>
          <p className='text-lg line-clamp-3 leading-tight'>{product?.description} </p>
          <div className="">
            <h3 className='flex items-center'>
              <IoMdStar className='text-xl' />
              <IoMdStar className='text-xl' />
              <IoMdStar className='text-xl' />
              <IoMdStar className='text-xl' />
              <IoMdStar className='text-xl' />
              <span className='ml-1'>{product?.rating.toFixed(1)}</span>
            </h3>
          </div>
          <div className="price flex gap-2 my-3">
            <span className='disc bg-green-600 px-2 rounded-md'>-{product?.discountPercentage}%</span>
            <h2 className='flex items-start gap-1 font-semibold'><BsCurrencyRupee /> {(product?.price * 82).toFixed(2)} </h2>
          </div>

          {/* stock info */}
          <div className="">
            <div className="w-32 h-10 bg-blue-600 flex items-center justify-center rounded-lg">
              <h2 className='text-lg font-semibold'>{product?.availabilityStatus} </h2>
            </div>
          </div>

          {/* buttons */}
          <div className="w-full flex justify-end">
            <button className='px-6 py-2 rounded-lg bg-blue-600 flex items-center gap-4 font-semibold'><BsCart2 className='text-xl' />
              Add to Cart</button>
          </div>

          {/* offers */}
          <div className="w-full  mt-8 ">
            <h3 className='text-lg font-bold flex gap-1 items-center'><BiSolidOffer /> Offers</h3>
            <div className="w-full h-[150px] mt-2 ">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper p-2"
              >
                <SwiperSlide><OfferCard /></SwiperSlide>
                <SwiperSlide><OfferCard /></SwiperSlide>
                <SwiperSlide><OfferCard /></SwiperSlide>
              </Swiper>
            </div>

          </div>

          {/* our service */}
          <div className="w-full mt-8 h-[150px] ">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper p-2"
            >
              {[{ icon: <GiReturnArrow className='text-2xl' />, title: product?.returnPolicy },
              { icon: <TbTruckDelivery className='text-2xl' />, title: "Free Delivery" },
              { icon: <GoShieldCheck className='text-2xl' />, title: product?.warrantyInformation },
              { icon: <LiaHandHoldingUsdSolid className='text-2xl' />, title: "Pay on Delivery" },
              { icon: <GiTrophyCup className='text-2xl' />, title: "Top Brand" },
              ].map((service, index) => (
                <SwiperSlide className='w-[100px] overflow-hidden ' key={index}><ServiceCard service={service} /></SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* product Details */}
          <div className="w-full mt-8 ">
            <ul>
              <li><strong>Brand:</strong> {product?.brand} </li>
              <li><strong>Category:</strong> {product?.category} </li>
              <li><strong>Product Id:</strong> {product?.sku} </li>
              <li><strong>Weight:</strong> {product?.weight * 20} gm </li>
              <li><strong>Width:</strong> {product?.dimensions.width} Inch </li>
              <li><strong>Height:</strong> {product?.dimensions.height} Inch </li>
            </ul>

          </div>
        </div>



      </div>

      {/* Related products */}
      <div className="w-full mt-20 ">
        <h2 className='text-xl font-semibold'>Related Products</h2>
        <div className="w-full h-[350px]  mt-4 ">
          <Swiper
            slidesPerView={1.7}
            spaceBetween={0}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper p-2"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} ><RelatedProduct product={product} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Customers reviews */}
      <div className="mt-8">
        <div className="lg:flex">
          <div className="lg:w-[40%] h-fit lg:sticky lg:top-20 ">
            <CustomerRating rating={product?.rating} />
          </div>
          <div className="lg:w-[60%] mt-10 lg:mt-0">
            <h2 className='text-xl font-semibold'>Top Reviews</h2>
            <div className="">
              {product?.reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leave a comment */}
      <div className="w-full mt-8">
        <h2 className='text-xl font-semibold '>Leave Your Comment</h2>
        <form onSubmit={handleSubmit} className='grid lg:grid-cols-[40%_60%] mt-2 bg-white p-4 rounded-lg ' >
          <div className="">
            <div className="flex flex-col ">
              <label htmlFor="name" className='font-semibold'>Your Full Name</label>
              <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Full Name ....' className='border-[1px] border-zinc-600 rounded-lg py-1 px-2 outline-none mt-1 ' />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email" className='font-semibold'>Your Email</label>
              <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email ....' className='border-[1px] border-zinc-600 rounded-lg py-1 px-2 outline-none mt-1 ' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="rating" className='font-semibold'>Your Rating</label>
              {/* <input type="range" min={0} max={5} className='flex-shrink-0 w-52 ' /> */}
              <div className="flex  ">
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <IoMdStar className='text-xl text-green-600' />
                <span className='ml-1'>{0} out of 5</span>
              </div>
            </div>
          </div>
          <div className="flex w-full h-[300px] lg:px-4">
            <textarea name="" id="name" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Leave a comment ....' className='w-full border-[1px] border-zinc-600 rounded-lg py-1 px-2 outline-none mt-1'> </textarea>
          </div>

          <div className="col-span-full flex justify-end mt-4">
            <button type='submit' className=' font-semibold bg-green-600 rounded-lg px-6 py-2 flex items-center gap-4'><FiSend className='text-xl' /> Send</button>
          </div>

        </form>
      </div>


    </section>
  )
}

export default ProductPage