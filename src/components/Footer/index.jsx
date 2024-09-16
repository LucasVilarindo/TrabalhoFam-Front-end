import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import './style.css'
export default function Footer() {
    return (
        <>
            <footer>
                <ul>
                    <a href="https://www.linkedin.com/in/lucasvilarindo/" target='_blank'><li><IoLogoLinkedin color='#fff' size={40}/></li></a>
                    <a href="https://github.com/LucasVilarindo" target='_blank'><li><FaGithub color='#fff' size={40}/> </li></a>
                    <a href="https://www.instagram.com/petlovebrasil/" target='_blank'><li><AiFillInstagram color='#fff' size={40}/></li></a>
                    <a href="https://www.petlove.com.br/?srsltid=AfmBOor28Qwu7tY_lQX0OmpflBkSybN3-5ASqgJVzHNKHnJh09BeAHk0" target='_blank'><li><CiShop color='#fff' size={40}/></li></a>
                    
                </ul>
            </footer>
        </>
    )
}
