import React from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Import images (if they are in the src folder)
import meta from '../images/icons/meta.png';
import google from '../images/icons/google.png';
import shopifyTheme from '../images/icons/shopifyTheme.png';
import facebook from '../images/icons/facebook.png';
import instagram from '../images/icons/instagram.png';
import tiktok from '../images/icons/tiktok.png';
import amazon from '../images/icons/amazon.png';
import jasper from '../images/icons/jasper-ai.png';
import snapchat from '../images/icons/snapchat.png';
import chatgpt from '../images/icons/chatgpt.png';
import Gemini from '../images/icons/Gemini.png';
import googleLogo from '../images/icons/google-logo.png';
import gtm from '../images/icons/google-tag-manager.png';
import twitter from '../images/icons/twitter.png';
import youtube from '../images/icons/youtube.png';
import linkedin from '../images/icons/linkedin.png';
import reddit from '../images/icons/reddit.png';
import psd from '../images/icons/psd.png';
import pinterest from '../images/icons/pinterest.png';
import business from '../images/icons/my-business.png';
import canva from '../images/icons/canva.png';
import skype from '../images/icons/skype.png';
import slack from '../images/icons/slack.png';
import git from '../images/icons/git.png';
import github from '../images/icons/github.png';


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
                                            { src: shopifyTheme, alt: "Shopify" },
                                            { src: meta , alt: "Meta" },
                                            { src: google, alt: "google Ads" },
                                            { src: facebook, alt: "facebook" },
                                            { src: instagram, alt: "instagram" },
                                            { src: tiktok, alt: "tiktok" },
                                            { src: amazon, alt: "amazon" },
                                            { src: snapchat, alt: "snapchat" },
                                            { src: gtm, alt: "Google Tag Manager"},
                                            { src: business, alt: "business" },
                                            { src: Gemini, alt: "Gemini"},
                                            { src: chatgpt, alt: "chatgpt" },
                                            { src: jasper, alt: "jasper" },
                                            { src: googleLogo, alt: "google Logo" },
                                            { src: twitter, alt: "twitter" },
                                            { src: youtube, alt: "youtube" },
                                            { src: linkedin, alt: "linkedin" },
                                            { src: reddit, alt: "reddit" },
                                            { src: canva, alt: "canva" }, 
                                            { src: pinterest, alt: "pinterest"},
                                            { src: psd, alt: "psd" },
                                            { src: skype, alt: "Skype" },
                                            { src: slack, alt: "Slack" },
                                            { src: git, alt: "Git" },
                                            { src: github, alt: "GitHub" },                      
                        
                                        ].map((icon, index, array) => (
                                            <>
                                                <li key={index} className="w-[90px] h-[90px] flex items-center justify-center bg-[#212428] shadow-card rounded-lg transition-transform duration-300 hover:-translate-y-1">
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