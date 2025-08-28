import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlGithub, urlDemo } = data
    return (
        <div className=" p-4 border-2  rounded-3xl bg-[#5941a971] border-[#6b5b87] ">
            <h3 className="mx-3 mb-4 text-lg h-12 ">
                {title}
            </h3>

            <Image src={image} alt="Image product" width={200} height={200}
                className="w-full md:w-[200px] rounded-2xl h-auto " />

            <div className="flex gap-5 mt-5 justify-center m- ">
                <Link href={urlGithub} target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/70">
                    GitHub
                </Link>

                <Link href={urlDemo} target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/70">
                    Demo
                </Link>
            </div>
        </div>
    );
}
export default PortfolioBox;