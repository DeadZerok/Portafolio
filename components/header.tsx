"use client"
import Link from "next/link";
import { useState } from "react";
import { socialNetworks } from "@/data";
import { MotionTransition } from "./transitions-componets";

const Header = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Ivan
                            <span className="text-secondary">Dev</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-5 md:gap-7">
                        {socialNetworks.map(({ logo, src, id, name }) => (
                            <div
                                key={id}
                                className="relative flex flex-col items-center"
                                onMouseEnter={() => setHoveredId(id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <Link
                                    href={src}
                                    target="_blank"
                                    className=" transition-all duration-300 hover:text-secondary flex  "
                                >
                                    {logo}

                                    {hoveredId === id && (
                                    <span className="bg-transparent border-1 text-white px-2 py-1 rounded-full ">
                                        {name}
                                    </span>
                                )}
                                </Link>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
};

export default Header;
