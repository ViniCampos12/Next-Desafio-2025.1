'use client'
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { BrandsCard } from "../../../../types/data"

import Image from "next/image";

type CardBrandsProps = {
  brands: BrandsCard[]
}

export default function Carrousel(){
    const settings = {
      spaceBetween: 50,
      slidesPerView:3,
      // navigation:true,
      draggable:true,
      loop:true,
      Keyboard:true,
      modules:[Navigation, Pagination, A11y, Keyboard]
    }

    return(
      <div className="">
        <Swiper {...settings} className="">
            <SwiperSlide className="w-64 h-28 bg-gray-vs/80 m-0 flex justify-center items-center lg:h-36 lg:w-72 rounded-lg px-2 md:px-3 lg:px-10" >
              <Image
                    src="/brands/adidas.png"
                    alt="Foto da marca"
                    width={200}
                    height={200}
                    priority
                    className="object-cover w-10/12 max-h-28 max-w-60 rounded-md md:w-full md:h-full md:max-w-full md:max-h-full "
              />
            </SwiperSlide>
            <SwiperSlide className="w-64 h-28 bg-gray-vs/80 m-0 flex justify-center items-center lg:h-36 lg:w-72 rounded-lg px-2 md:px-3 lg:px-10" >
              <Image
                    src="/brands/nike2.png"
                    alt="Foto da marca"
                    width={904}
                    height={904}
                    priority
                    className="object-cover w-10/12 max-h-28 max-w-60 rounded-md md:w-full md:h-full md:max-w-full md:max-h-full "
              />
            </SwiperSlide>
            <SwiperSlide className="w-64 h-28 bg-gray-vs/80 m-0 flex justify-center items-center lg:h-36 lg:w-72 rounded-lg px-2 md:px-3 lg:px-10" >
              <Image
                    src="/brands/puma2.png"
                    alt="Foto da marca"
                    width={904}
                    height={904}
                    priority
                    className="object-cover w-10/12 max-h-28 max-w-60 rounded-md md:w-full md:h-full md:max-w-full md:max-h-full "
              />
            </SwiperSlide>
            <SwiperSlide className="w-64 h-28 bg-gray-vs/80 m-0 flex justify-center items-center lg:h-36 lg:w-72 rounded-lg px-2 md:px-3 lg:px-10" >
              <Image
                    src="/brands/jordan.png"
                    alt="Foto da marca"
                    width={904}
                    height={904}
                    priority
                    className="object-cover w-10/12 max-h-28 max-w-60 rounded-md md:w-full md:h-full md:max-w-full md:max-h-full "
              />
            </SwiperSlide>
            <SwiperSlide className="w-64 h-28 bg-gray-vs/80 m-0 flex justify-center items-center lg:h-36 lg:w-72 rounded-lg px-2 md:px-3 lg:px-10" >
              <Image
                    src="/brands/mizuno.png"
                    alt="Foto da marca"
                    width={904}
                    height={904}
                    priority
                    className="object-cover w-10/12 max-h-28 max-w-60 rounded-md md:w-full md:h-full md:max-w-full md:max-h-full "
              />
            </SwiperSlide>
        </Swiper>
      </div>
    )
}