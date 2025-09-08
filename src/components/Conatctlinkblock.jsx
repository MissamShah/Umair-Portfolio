import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ContactLinkBlock = () =>{
    return(
        <>
            <h1>hello</h1>
        </>
    )
}

export default SectionWrapper(ContactLinkBlock, "");