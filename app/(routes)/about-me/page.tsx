import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/TransitionPage";
import { div } from "motion/react-client";

const pageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar/>
                <h1 className="text-2xl leading-tight tex-center 
                md:text-left md:text-5xl md:mt-10 ">toda mi{' '}
                    <span className=" font-bold text-secondary">Trayectoria profecional</span>
                </h1>
            </ContainerPage>
        </>
    );
}

export default pageAboutMe;