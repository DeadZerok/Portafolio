"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduccion = () => {
    return (
        <div className="z-20 w-full bg-dark/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width={800} height={800} alt="profile pic" />
                <div className="flex flex-col justify-center mas-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left
                    md:text-4xl md:mb-10">Transformo,
                        <TypeAnimation
                            sequence={[
                                "ideas en soluciones inteligentes",
                                1000,
                                "hardware en experiencias interactivas",
                                1000,
                                "datos en decisiones precisas",
                                1000,
                                "tecnología en innovación real",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block fond-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Como desarrollador, convierto ideas en soluciones web.<br /><br /> cuento con conocimientos en IoT, inteligencia artificial y blockchain, integrando creatividad, código y datos para diseñar experiencias digitales únicas, eficientes y memorables.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 ">
                        <Link
                            href="/services"
                            className="px-3 py-2 transition-all border-2 
                        cursor-pointer text-md w-fit rounded-xl 
                        hover:shadow-xl hover:shadow-white/50 ">
                            Servicios
                        </Link>

                        <Link
                            href="/contact"
                            className="px-3 py-2 transition-all border-2 
                        cursor-pointer  text-secondary border-secondary text-md w-fit rounded-xl 
                        hover:shadow-xl hover:shadow-secondary ">
                            Contactame
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Introduccion;