import React from 'react'
import './PetShop.css'
import logo from './img/Logo.png'
import imgHome from './img/imgHome.png'
import { GoTriangleDown } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";


export default function PetShop() {
    return (
        <main>
            <nav className='navbar'>
                <div className='section-img'>
                    <img src={logo} alt="" />
                </div>
                <div className='nav-options'>
                    <ul>
                        <li>Inicio</li>
                        <li>Comprar</li>
                        <li>Sobre</li>
                        <li>Contatos</li>
                    </ul>
                </div>
                <div className='section-cart'>
                    <div className='item-cart'><FiShoppingCart color='#fff' size={17} /></div>
                    <p>9 470</p>
                    <GoTriangleDown />
                </div>
            </nav>
            <section className='section-info-img'>
                <div className='section-info'>
                    <h1>Seu novo companheiro entregue diretamente à sua porta.</h1>
                    <p>Loja online de animais de estimação - uma solução conveniente quando você está com preguiça de sair de casa.</p>
                    <a href="https://www.petlove.com.br/?srsltid=AfmBOor28Qwu7tY_lQX0OmpflBkSybN3-5ASqgJVzHNKHnJh09BeAHk0" target="_blank" rel="noopener noreferrer"><div className='btn-comprar'>Comprar</div></a>
                    
                </div>
                <div className='section-img-dog'>
                    <img src={imgHome} alt="" />
                </div>
            </section>
        </main>
    )
}
