import AvatarServices from "@/components/avatar-service";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/TransitionPage";
import { p } from "motion/react-m";

const ServicesPage
   = () => {
      return (
         <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
               <div className="max-w-[450px] mt-[130px] md:mt-0 tracking-tighter ">
                  <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl mb-5">
                     Mis{" "}
                     <span className="font-bold text-secondary">
                        servicios.
                     </span>
                  </h1>
                  <p className="mb-3 mx-6 md:mx-0 md:text-xl text-justify text-gray-300 ">Ofrezco soluciones tecnológicas que combinan <span className="font-bold">desarrollo web, IoT e inteligencia artificial</span>, especializadas en la creación de sitios únicos. Desde aplicaciones web modernas con <span className="font-bold">Next.js y React </span>hasta sistemas conectados con ESP32 para automatización y control. Trabajo con tecnologías como <span className="font-bold">TypeScript, Node.js, APIs y mas. </span>para entregar soluciones personalizadas que optimicen procesos.
                  </p>
                  <div className="flex justify-center md:justify-self-start ">
                     <button className="px-2 py-2 rounded-lg bg-secondary hover:bg-secondary/65 ">Contactame</button>
                  </div>
               </div>

               {/* slider */}
               <div className=" mx-28">
                  <SliderServices />
               </div>

            </div>
         </>
      );
   }

export default ServicesPage
   ;