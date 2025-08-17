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
            <div className='flex flex-col md:justify-center h-screen  py-30 mb-12'>
                <CircleImage />


                <h1 className="text-2xl leading-tight text-center">Mis <span className="font-bold text-secondary">certificados</span></h1>


                <Slidercertificates />

            </div>
        </>
    );
}

export default CertificatesPage;