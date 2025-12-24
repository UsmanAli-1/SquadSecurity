"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    heading: "Welcome To SQUAD INTERNATIONAL SECURITY ",
    text: "Security You Can Trust. Protection You Can Rely On.",
    image: "/images/policeman-3856909_1280.jpg",
  },
  {
    id: 2,
    heading: "Our Ambition",
    text: "Our ambition is to provide best army personnel, well-trained, educated, and top-quality services for valued clients.",
    image: "/images/m44.jpg",
  },
  {
    id: 3,
    heading: "Security Services",
    text: "Providing the best security services all over Karachi.",
    image: "/images/cctv-surveillance-camera-7267551.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative h-[610px] md:h-[600px] lg:h-[600px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full top-8 flex items-center justify-center">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.heading}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-3xl mx-auto drop-shadow-md">
                    {slide.text}
                  </p>
                  <div className="flex mt-15  flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1F3D2B] shadow-lg hover:scale-105 duration-300 transition-all"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/services"
                      className="bg-white text-[#1F3D2B]  border-white px-8 py-3 rounded-md font-semibold hover:bg-[#1F3D2B] hover:text-white shadow-lg hover:scale-105 duration-300 transition-all"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Navigation Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(31, 61, 43, 0.8);
          width: 28px;
          height: 28px;
          border-radius: 5;
          padding:8px;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(31, 61, 43, 1);
          transform: scale(1.1);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 10px;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          margin: 0 6px;
          height: 12px;
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}