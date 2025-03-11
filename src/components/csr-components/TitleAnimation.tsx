"use client";
import { TypeAnimation } from "react-type-animation";

const TitleAnimation = () => {
    return (
        <TypeAnimation
            sequence={["Software Engineer", 1000, "Programmer"]}
            speed={20}
            repeat={Infinity}
        />
    )
}

export default TitleAnimation