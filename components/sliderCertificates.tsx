import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { dataCertificates } from '@/data';

import Image from 'next/image';

const SliderCertificates = () => {
    return (
        <div className="flex justify-between items-center w-full py-8 px-7">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },  // móvil
                    768: { slidesPerView: 2, spaceBetween: 15 },  // tablet
                    1024: { slidesPerView: 3, spaceBetween: 30 }  // desktop
                }}
                className=" w-full max-w-[1200px] h-[350px] md:h-[450px] lg:max-w-[1700px]"
            >
                {dataCertificates.map(({ id, name, date, description, imageUrl }) => (
                    <SwiperSlide key={id}>
                        <div className="flex flex-col justify-between  h-full rounded-xl cursor-pointer bg-[rgba(65,47,123)] hover:bg-[rgba(89,65,169)] transition-all duration-300 border-2 border-white/20 hover:border-secondary">
                            <div className="flex flex-col">
                                <div className="text-lg md:text-xl text-secondary font-bold mx-3 mt-5 mb-1">
                                    {name}
                                </div>
                                <div className="text-xs text-gray-400/80 mx-5">
                                    {date},{' '}
                                    <span className="text-base font-bold text-white/80">{description}</span>
                                </div>
                            </div>
                            <div className="flex flex-col ">
                                <div className='flex flex-col justyfy-items-center mb-4 md:mb-10 mx-3 aspect-auto '>
                                    <Image src={imageUrl} alt="Image product" width={1056} height={816}
                                        className="w-full max-h-[250px] md:max-h-[340px]  rounded-3xl "
                                    />
                                </div>


                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderCertificates;