import React from 'react'
import '../styles/Home.css';
import chicoAvion from '../assets/imgs/img-1.png';

const Home = () => {
  return (
    <div className='home'>
        <section className='presentation'>
            <div className='content'>
                <div>
                    <img src={chicoAvion} alt="nino avion" />
                </div>
                <div  className='descrip'>
                    <div className='title'>
                        <p className='type-1'>Enfoque</p>
                        <p className='type-2'>Pedagógico</p>
                        <p className='type-1'>uDiscover</p>
                    </div>
                    <div>
                    <p >Nuestro modelo educativo pone en diálogo tres importantes propuestas pedagógicas:</p>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default Home