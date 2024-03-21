import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from "../../assets/tampic/vcard12.png"
import img2 from "../../assets/tampic/vcard13.png"
import img3 from "../../assets/tampic/vcard14.png"
import img4 from "../../assets/tampic/vcard15.png"
import img5 from "../../assets/tampic/vcard16.png"
import img6 from "../../assets/tampic/vcard17.png"
const Carousel = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 10,
        },
    })
    return (
        <div className='w-[1300px] mx-auto'>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img src={img1} alt="" /></div>
                <div className="keen-slider__slide number-slide2"><img src={img2} alt="" /></div>
                <div className="keen-slider__slide number-slide3"><img src={img3} alt="" /></div>
                <div className="keen-slider__slide number-slide4"><img src={img4} alt="" /></div>
                <div className="keen-slider__slide number-slide5"><img src={img5} alt="" /></div>
                <div className="keen-slider__slide number-slide6"><img src={img6} alt="" /></div>
              
            </div>
        </div>
    );
};

export default Carousel;