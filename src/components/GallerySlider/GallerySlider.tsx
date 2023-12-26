'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import data from '@/data/gallery.json';

const GallerySlider = () => {
  return (
    <div className="relative mx-auto px-[20px] md:w-[768px] md:px-[32px] xl:w-[1280px] xl:px-0 smOnly:max-w-[480px]">
      <Swiper
        className="h-[609px] md:h-[295px] xl:h-[430px]"
        wrapperTag="ul"
        modules={[Navigation]}
        centeredSlides={true}
        grabCursor={true}
        direction={'vertical'}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        breakpoints={{
          768: {
            direction: 'horizontal',
          },
        }}
      >
        {data.slides.map(({ img, alt }, idx) => (
          <SwiperSlide tag="li" key={idx} className="relative">
            {({ isActive }) => (
              <div
                className={`image-wrapper relative h-[187px] transition-all duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)]
                ${
                  isActive
                    ? 'before:hidden md:h-[294px] md:w-[415px] xl:h-[429px] xl:w-[606px]'
                    : ' md:h-[87px] md:w-[121px] xl:h-[225px] xl:w-[313px] smOnly:before:hidden'
                }  `}
              >
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 280px, (max-width: 1279px) 342px, 606px"
                  quality={90}
                  priority
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-[69px] z-10 xl:left-[235px] smOnly:hidden">
        <button
          className="button-prev mr-[459px] text-[33px] font-thin uppercase xl:mr-[651px]"
          type="button"
        >
          prev
        </button>
        <button className="button-next text-[33px] font-thin uppercase" type="button">
          next
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;
