import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import ConunterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/TransitionPage";


const pageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">toda mi{' '}
                    <span className="font-bold text-secondary">Trayectoria profecional</span>
                </h1>

                <ConunterServices />
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default pageAboutMe;