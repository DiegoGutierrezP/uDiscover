import React from 'react'
import '../styles/Footer.css';
import logoFooter from '../assets/imgs/logoFooter.png'

const Footer = () => {
  return (
    <footer>
        <section className='content'>
            <div className='logo-content'>
                <img src={logoFooter} alt='logo-footer' />
            </div>
            <div className='contactanos'>
                <h3>Contáctanos</h3>
                <p><i class="fa-brands fa-whatsapp"></i>&nbsp; +57 3054246600</p>
                <p><i class="fa-solid fa-phone"></i>&nbsp; USA +1 786 789 0299</p>
                <p><i class="fa-solid fa-phone"></i>&nbsp; COL +57 333 033 3477</p>
                <p><i class="fa-solid fa-phone"></i>&nbsp; CHI +56 786 789 0299</p>
                <p><i class="fa-solid fa-phone"></i>&nbsp; MEX +56 786 789 0299</p>
                <br/>
                <h3>Correo</h3>
                <p><i class="fa-regular fa-envelope"></i>&nbsp; admisiones@ud.school</p>
            </div>
            <div className='siguenos'>
                <h3>Siguenos</h3>
                <div className='icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div>
                <p>
                    Registro ante el departamento de educacion de la florida.
                </p>
            </div>
        </section>
        <p className='copyright'>Copyright © 2022 – Diego Gutierrez – All rights reserved.</p>
    </footer>
  )
}

export default Footer