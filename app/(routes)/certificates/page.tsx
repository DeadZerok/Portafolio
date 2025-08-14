"use client"
import AvatarServices from "@/components/avatar-service";
import CircleImage from "@/components/circle-image";
import Slidercertificates from "@/components/sliderCertificates";
import TransitionPage from "@/components/TransitionPage";
import { dataCertificates } from "@/data";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CertificatesPage = () => {
    return (
        <>
            <TransitionPage />
            <AvatarServices />
            <div className='flex flex-col justify-center h-lvh'>
                <CircleImage />
                
                <Slidercertificates/>
            </div>
        </>
    );
}

export default CertificatesPage;