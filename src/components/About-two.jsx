import React from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Import images (if they are in the src folder)
import reactJS from '../images/icons/reactJS.png';
import html5 from '../images/icons/html5.png';
import js from '../images/icons/js.png';
import css from '../images/icons/css.png';
import mui from '../images/icons/mui.png';
import bootstrap from '../images/icons/bootstrap.png';
import sass from '../images/icons/sass.png';
import nodeJS from '../images/icons/nodeJS.png';
import expressJS from '../images/icons/expressJS.png';
import mongodb from '../images/icons/mongodb.png';
import jwt from '../images/icons/jwt.png';
import shopifyTheme from '../images/icons/shopifyTheme.png';
import figma from '../images/icons/figma.png';
import jquery from '../images/icons/jquery.png';
import redux from '../images/icons/Redux.png';
import mysql from '../images/icons/mysql.png';
import tailwind from '../images/icons/tailwind.png';
import skype from '../images/icons/skype.png';
import slack from '../images/icons/slack.png';
import aws from '../images/icons/aws.png';
import git from '../images/icons/git.png';
import github from '../images/icons/github.png';
import gtm from '../images/icons/google-tag-manager.png';
import graphql from '../images/icons/graphql.png';
import threejs from '../images/icons/three-js-icon.png';
import typescript from '../images/icons/typescript.png';
import docker from '../images/icons/docker.png';
import nextjs from '../images/icons/nextjs.png';

const Abouttwo = () => {
    return (
        <section className="bg-[#212428] text-[#fff] relative" id='aboutID'>
            <div className="container mx-auto w-full">
                <div className="w-full flex flex-wrap gap-8">
                    <div className="w-full lg:w-[48%]">
                        <motion.div 
                            whileInView={{ x: 0, opacity: 1 }} 
                            initial={{ x: -80, opacity: 0 }} 
                            transition={{ duration: 1, type: 'spring', delay: 0.4 }} 
                            className="bg-[#212428] shadow-card rounded-lg p-8 mb-8 lg:mb-0"
                        >
                            <h2 className="text-3xl font-semibold text-center lg:text-left text-theme-icon">About Me</h2>
                            <div className="hr bg-[#212428] hr-line my-5"></div>
                            <div className="content flex flex-col gap-4">
                                <p className="text-lg font-medium text-theme-textColor2 leading-relaxed text-center lg:text-left">
                                Hello, my name is Umair Hassan, and I am a Social Media Marketing Specialist with 2 years of experience in developing and executing profitable advertising strategies for Ecommerce businesses.
                                My core expertise lies in paid Facebook and Instagram ads, where I have a proven track record of managing campaigns for both local and international brands, successfully generating millions of dollars in revenue. I am skilled in audience targeting, ad creative development, and data analysis to ensure optimal performance and a high return on ad spend.

                                </p>
                                <p className="text-lg font-medium text-theme-textColor2 leading-relaxed text-center lg:text-left">
                                I am passionate about helping my clients conquer their marketing challenges and achieve their business goals. Whether you are a startup or an established brand, I am committed to building solutions that drive growth and success for your company. Let's connect and build something great together.
                                </p>
                                <div className="hr bg-[#212428] hr-line my-1 w-full"></div>
                                <div className="left-btn flex gap-5 mt-0 justify-center lg:justify-start">
                                    <a href="https://calendly.com/umairhassan/30min" target="_blank">
                                        <button className="bg-[#1b8497] text-[#fff] font-semibold py-2 px-6 rounded-[10px] shadow-card transition-transform duration-300 hover:-translate-y-1">
                                            
                                            HIRE ME
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-[48%]">
                        <motion.div 
                            whileInView={{ y: 0, opacity: 1 }} 
                            initial={{ y: 80, opacity: 0 }} 
                            transition={{ duration: 1, type: 'spring', delay: 0.4 }} 
                            className="bg-[#212428] shadow-card rounded-lg p-8"
                        >
                            <h3 className="text-3xl font-semibold text-center lg:text-left text-theme-icon">About My Skills</h3>
                            <div className="hr bg-[#212428] hr-line my-5"></div>
                            <div className="content flex flex-col gap-8 h-full">
                                <div className="item">
                                <ul className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                        {[
                                            { src: shopifyTheme, alt: "Shopify Theme" },
                                            { src: graphql , alt: "GraphQL" },
                                            { src: js, alt: "JavaScript" },
                                            { src: typescript, alt: "TypeScript" },
                                            { src: reactJS, alt: "ReactJS" },
                                            { src: nextjs, alt: "NextJS" },
                                            { src: html5, alt: "HTML5" },
                                            { src: css, alt: "CSS" },
                                            { src: tailwind, alt: "Tailwind CSS" },
                                            { src: bootstrap, alt: "Bootstrap" },
                                            { src: jquery, alt: "jQuery" },
                                            { src: nodeJS, alt: "NodeJS" },
                                            { src: expressJS, alt: "ExpressJS" },
                                            { src: mongodb, alt: "MongoDB" },
                                            { src: threejs, alt: "ThreeJS" },
                                            { src: sass, alt: "SASS" },
                                            { src: figma, alt: "Figma" },
                                            { src: redux, alt: "Redux" },
                                            { src: mysql, alt: "MySQL" },
                                            { src: git, alt: "Git" },
                                            { src: github, alt: "GitHub" },
                                            { src: docker, alt: "Docker"},
                                            { src: aws, alt: "AWS" },
                                            { src: gtm, alt: "Google Tag Manager"},
                                            { src: skype, alt: "Skype" },
                                            { src: slack, alt: "Slack" },
                                            { src: jwt, alt: "JWT" },                       
                                            { src: mui, alt: "Material-UI" },
                                        ].map((icon, index, array) => (
                                            <>
                                                <li key={index} className="w-20 h-20 flex items-center justify-center bg-[#212428] shadow-card rounded-lg transition-transform duration-300 hover:-translate-y-1">
                                                    <img src={icon.src} alt={icon.alt} className="max-h-8 w-auto" />
                                                </li>
                                                {/* Har 5 icons ke baad horizontal line add karega */}
                                                {(index + 1) % 5 === 0 && index !== array.length - 1 && (
                                                    <div className="hr bg-[#212428] hr-line -my-0 w-full"></div>
                                                )}
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(Abouttwo, "");