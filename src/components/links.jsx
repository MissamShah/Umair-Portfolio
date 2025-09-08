import React from 'react'
import {social} from "../constants/index"

const Links = () => {
  return (
    <>
      {social.map((item, i) => (
        <a key={i} href={item.link} target="_blank" className="text-[#fff] text-[12px] hover:text-[#ffcd9f]">
            <i className={item.icon}></i>
        </a>
      ))}
    </>
  )
}

export default Links;
