import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { SliderProducts } from '../../data/products'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Custom css
import './Slider.css'

const Slider = () => {
    return (
        <div className="s-container">
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loopFillGroupWithBlank={true}
                navigation={true}
            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide>
                        {/* left side */}
                        <div className="left-side">
                            <div className="name">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>{slide.price}$</span>
                            <div>Shop Now</div>
                        </div>

                        {/* right side */}
                        <img src={slide.img} alt="product" className="img-product" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider