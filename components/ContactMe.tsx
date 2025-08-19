import Image from "next/image";
import Link from "next/link";

const ContactMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center sm:items-center py-38 sm:gap-14 " >
            <div className="w-85 md:w-96 justify-items-center sm:justify-items-start text-justify ">
                <h2 className=" text-3xl sm:text-4xl text-secondary pb-8  "> Contactame</h2>
                <p className="  leading-6 px-4 md:text-xl">Si tienes un proyecto, idea o simplemente quieres saludar, no dudes en escribirme.
                    Estoy abierto a nuevas oportunidades y colaboraciones.</p>
                
                <div className="flex mt-6 gap-4 px-4">
                    
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ivanarley0398@gmail.com&su=Interés%20en%20tu%20portafolio&body=Hola,%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20hablar%20o%20trabajar%20contigo.%20¿Podemos%20conversar?"  target="_blank" className="px-3 py-2 transition-all border-2 
                        cursor-pointer text-md w-fit rounded-xl 
                        hover:shadow-lg hover:shadow-email hover:text-email">Gmail</Link>
                
                    <Link href="https://wa.me/573218066759?text=Hola,%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20hablar%20o%20trabajar%20contigo.%20%C2%BFPodemos%20conversar?" target="_blank" className="px-3 py-2 transition-all border-2 
                        cursor-pointer text-md w-fit rounded-xl 
                        hover:shadow-lg hover:shadow-whatssapp hover:text-whatssapp ">whatsapp</Link>

                </div>

            </div>

            <div className="">
                <Image src="/home-4.png" width={300} height={300} alt="home" className="w-[400]" />
            </div>
        </div>
    );
}

export default ContactMe;