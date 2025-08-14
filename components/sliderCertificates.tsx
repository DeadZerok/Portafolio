import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { dataCertificates, serviceData } from '@/data';

const Slidercertificates = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}

            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {dataCertificates.map(({id, name, description, imageUrl})=>
            (
                <SwiperSlide key={id} >
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-4xl text-secondary">{name}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{description}</h3>
                            <p className="text-sm">{imageUrl}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default Slidercertificates;