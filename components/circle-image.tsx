"use client"
import Image from "next/image";
import { MotionTransition } from "./transitions-componets";

const CircleImage = () => {
    return (
        <MotionTransition position="right" className="fixed bottom-0 right-0 hidden md:inline-block">
            <Image src="/circles.png" width={200} height={200} alt="circle" className="w-full h-full"/>
        </MotionTransition>
    );
}

export default CircleImage;