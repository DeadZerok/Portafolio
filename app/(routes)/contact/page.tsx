import ContactMe from "@/components/ContactMe";
import TransitionPage from "@/components/TransitionPage";

const contactPage = () => {
    return (

        <>
            <TransitionPage />
            <div className="flex min-h-[100vh] h-full justify-center ">
                <ContactMe />
            </div>
        </>

    );
}

export default contactPage;