"use client"
import Image from "next/image";
import { MotionTransition } from "./transitions-componets";

const AvatarPorfolio = () => {
    return (
        <MotionTransition position="bottom" className=" fixed bottom-0 left-0 hidden md:inline-block">
            <Image src="/avatar-works.png" width={300} height={300} className="w-full h-full justify-end" alt="Avatar portfolio" />
        </MotionTransition>
    );
}

export default AvatarPorfolio;