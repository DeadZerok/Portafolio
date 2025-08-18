import { getPublicRepos } from "@/lib/github";
import { PiGithubLogoDuotone, PiTiktokLogoDuotone, PiTwitchLogoDuotone, PiHouseLineDuotone, PiUserCircleDuotone, PiGearSix, PiGearSixDuotone, PiCodeBlockDuotone, PiCodeDuotone, PiCertificateDuotone, PiHeadCircuitDuotone, PiCircuitryDuotone, PiFigmaLogoDuotone, PiAngularLogoDuotone, PiPencilRulerDuotone, PiFileJsDuotone, PiToolboxDuotone, PiAtomDuotone, PiInstagramLogoDuotone, PiLinkedinLogoDuotone   } from 'react-icons/pi'


const username = process.env.GITHUB_USERNAME!;

// Usamos top-level await para obtener el dato
const projectCount = await getPublicRepos(username);

export const socialNetworks = [
    {
        id: 1,
        logo: <PiInstagramLogoDuotone  size={30}/>,
        src: "https://www.instagram.com/ivan_varona_o/",
    },
    // {
    //     id: 2,
    //     logo: <Twitter   />,
    //     src: "#!",
    // },
    {
        id: 3,
        logo: <PiGithubLogoDuotone   size={30} strokeWidth={1} />,
        src: "https://github.com/DeadZerok",
    },
    {
        id: 4,
        logo: <PiTiktokLogoDuotone size={30} strokeWidth={1} />,
        src: "www.tiktok.com/@ivan.arley7",
    },
    {
        id: 5,
        logo: <PiLinkedinLogoDuotone  size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/ivanvarona",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <PiHouseLineDuotone size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <PiUserCircleDuotone size={28} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <PiGearSixDuotone  size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <PiCodeDuotone size={26} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Certificates",
        icon: <PiCertificateDuotone size={25} color="#fff" strokeWidth={1} />,
        link: "/certificates",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Clasificador de frutas frescas y podridas con IA",
        subtitle: "Python, TensorFlow, MobileNetV2, Computer Vision, Machine Learning",
        description: "Desarrollé y optimicé un sistema de clasificación automática de frutas frescas vs. podridas usando MobileNetV2 con fine-tuning. Aplicación directa en supermercados y procesos agrícolas automatizados",
        date: "jun 2025 ",
    },
    {
        id: 2,
        title: "Iluminacion y Automatizacion de Escalera con pagina web",
        subtitle: "C++, html, css, javaScript, Esp 32",
        description: "Desarrolle en un sistema de iluminación inteligente y automatizada para escaleras, diseñado para mejorar la seguridad y la comodidad. con una interfaz Web que Permite una configuración sencilla y monitoreo del sistema.",
        date: "Feb 2025",
    },
    {
        id: 3,
        title: "Prácticas Grado",
        subtitle: "Sistema de seguridad SBC con tecnología IoT para la protección de motocicletas en la ciudad de Popayán",
        description: "Desarrollé un sistema completo de IoT para seguridad de motocicletas con autenticación múltiple (Telegram Bot API, huella dactilar, RFID). Implementación de sensores de vibración para detección de hurto y notificaciones con Telegram.",
        date: "dic 2024",
    },
    {
        id: 4,
        title: "Blockchain para autenticación de aceites lubricantes",
        subtitle: "Blockchain, Sistemas distribuidos, Criptografía, JavaScript, Node.js",
        description: "Desarrollé una solución web con blockchain para prevenir falsificación de envases, registrando cada producto como bloque único con número de serie, lote y fecha de producción. Mejora significativa en trazabilidad y seguridad.",
        date: "Sep 2024",
    },

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },

    {
        id: 3,
        endCounter: 6,
        text: "Aplicaciones Desarrolladas",
        lineRight: true,
        lineRightMobile: true,
    },

    {
        id: 1,
        endCounter: projectCount,
        text: "Repositorios en GitHub",
        lineRight: true,
        lineRightMobile: true,
    },

    {
        id: 2,
        endCounter: 15,
        text: "Certificaciones obtenidas",
        lineRight: true,
        lineRightMobile: true,
    },

];

export const serviceData = [

    {
        icon: <PiCircuitryDuotone />,
        title: "Sistemas IoT y automatización",
        description: "Diseño e implementación de sistemas inteligentes con control remoto vía web.",
    },
    {
        icon: <PiFigmaLogoDuotone />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web, centradas en la experiencia del usuario",
    },
    {
        icon: <PiAngularLogoDuotone />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <PiHeadCircuitDuotone />,
        title: "Inteligencia Artificial",
        description: "Implementación de modelos de IA para clasificación, predicción y análisis de datos.",
    },
    {
        icon: <PiPencilRulerDuotone />,
        title: "Prototipado",
        description: "Diseño de prototipos funcionales para validar ideas tecnológicas antes de su producción. ",
    },
    {
        icon: <PiAtomDuotone  />,
        title: "Tecnologías ",
        description: [ "• React", "• Next.js", "• Node.js", "• IA", "• IoT",].map((item, i) =>
            <span key={i}>{item} <br /></span >),
    },
    {
        icon: <PiFileJsDuotone />,
        title: "Lenguajes ",
        description: [ "• Java", "• C++", "• Python", "• JavaScript", "• Python",].map((item, i) =>
            <span key={i}>{item} <br /></span >),
    },

    {
        icon: <PiToolboxDuotone  />,
        title: "Herramientas ",
        description: [ "• Docker", "• git", "• VSC"].map((item, i) =>
            <span key={i}>{item} <br /></span >),
    },
    
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Portafolio",
        image: "/portada-1.jpg",
        urlGithub: "https://github.com/DeadZerok/Portafolio",
        urlDemo: "https://ivanvarona.netlify.app/",
    },
    {
        id: 2,
        title: "Clasificador de frutas ",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/DeadZerok/FrutasSanasPodridas",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Iluminacion web de Escalera",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/DeadZerok/IluminacionAutomaticaEscalera-ESP32-c3",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Sistema de seguridad SBC para motos",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/DeadZerok/Sistema-de-seguridad-Moto",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Blockchain para autenticación",
        image: "/image-5.jpg",
        urlGithub: "https://github.com/DeadZerok/BlockChain",
        urlDemo: "#!",
    },
    
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 8,
    //     title: "E-commerce web",
    //     image: "/image-8.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // }
];

export const dataCertificates = [
    {
        id: 1,
        name: "JavaScript Essentials 1",
        date: "Dic 2025",
        description:"Cisco",
        imageUrl: "/certi1.png",
    },
    {
        id: 2,
        name: "IA Generativa: Conceptos básicos de ingeniería de instrucciones",
        date: "Jul 2025",
        description:
            "IBM",
        imageUrl: "/certi2.png",
    },
    {
        id: 3,
        name: "Elementos de la IA",
        date: "Mar 2025",
        description:
            "Universidad de Helsinki y Reaktor",
        imageUrl: "/certi10.png",
    },
    {
        id: 4,
        name: "Cómo resolver problemas y tomar decisiones con eficacia",
        date: "Jul 2025",
        description:"Universyty of California",
        imageUrl: "/certi2.png",
    },
    {
        id: 5,
        name: "PCAP: Programming Essentials in Python",
        date: "Dic 2022",
        description:
            "OpenEDG Python Institute",
        imageUrl: "/certi4.png",
    },
    
    
    {
        id: 6,
        name: "Masterclass 5G Y Casos de uso ",
        date: "Oct 2024",
        description:
            "Ericsson",
        imageUrl: "/certi5.png",
    },
    
    {
        id: 7,
        name: "Industria 4.0",
        date: "Oct 2023",
        description:
            "Ericsson",
        imageUrl: "/certi6.png",
    },
    
    {
        id: 8,
        name: "Ethical hacking ",
        date: "Oct 2022",
        description:
            "HackerMentor",
        imageUrl: "/certi7.png",
    },
    {
        id: 9,
        name: "Variables y estructuras de Contron en Python ",
        date: "Sep 2022",
        description:
            "SENA",
        imageUrl: "/certi8.png",
    },
    {
        id: 10,
        name: "metodologia de la programacion de sistemas informaticos",
        date: "Jul 2022",
        description:
            "SENA",
        imageUrl: "/certi9.png",
    },
    
    
];