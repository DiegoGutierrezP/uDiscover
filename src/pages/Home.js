import React from 'react'
import '../styles/Home.css';
import chicoAvion from '../assets/imgs/img-1.png';
import bottomWave from '../assets/imgs/bottom_wave.png';
import topWave from '../assets/imgs/top_wave.png';
import acompanamiento from '../assets/imgs/acompanamiento.png';
import educacion from '../assets/imgs/educacion_inter.png';
import bilin from '../assets/imgs/bilinguismo.png';
import apoya from '../assets/imgs/apoya.png';
import metodologia from '../assets/imgs/metodologia.png';

const Home = () => {
  return (
    <div className='home'>
        <section className='presentation'>
            <div className='content'>
                
                <div  className='descrip'>
                    <h1 className='title'><span>Descubre</span> el legado que dejarás al Mundo</h1>
                    
                    <p >Desde un entorno virtual, guiamos virtudes, habilidades, intereses y afinidades para un proyección integral y sólida del individuo</p>
                    <a className='btn-presentation' href='#'>Inscripciones Abiertas</a>
                    
                </div>
                <div>
                    <img className='img-presentation' src={chicoAvion} alt="nino avion" />
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <img className='wave' src={bottomWave} alt='wave' /> 
        </section>
        <section className='aboutus'>
            <div className='content'>
               <div>
                    <h1 className='title'>
                        Por una educación <span>+</span> humana
                    </h1>
                </div>
                <div className='descrip'>
                    <h2>uDiscover es un Colegio Virtual bilingüe Americano, con enfoque en Tecnología, Emprendimiento e Innovación.</h2>
                    <p>Ofrecemos la modalidad: Académica bilingüe (español–inglés). 
                        Contamos con 3 niveles: Elementary School (básica primaria) , Middle School
                         (básica secundaria) y  High School (educación media) de carácter mixto,
                          Calendarios A (Inicio clases Febrero) y B (Inicio clases Agosto).</p>
                </div>
            </div>
        </section>
        <section className='porque-estudiar'>
            <img className='wave' src={topWave} alt='wave' />
            <br/><br/><br/><br/><br/><br/>
            <div className='content'>
                <h1>¿Porque tu hijo debe estudiar en uDiscover?</h1>
                <div className='grid-cards'>
                    <div className='card'>
                        <img src={acompanamiento} alt='acompanamiento'/>
                        <h3>Acompañamiento Continuo</h3>
                        <p>Tu hijo nunca estará solo. El 100% de las clases son guiadas y acompañadas por profesores en tiempo real.</p>
                    </div>
                    <div className='card'>
                        <img src={educacion} alt='acompanamiento'/>
                        <h3>Educación internacional</h3>
                        <p>Curriculum Internacional, enfocado en tecnología, emprendimiento e innovación.</p>
                    </div>
                    <div className='card'>
                        <img src={bilin} alt='acompanamiento'/>
                        <h3>Bilingüismo</h3>
                        <p>Aprendizaje y perfeccionamiento del Inglés a través de experiencias. Contamos con profesores nativos. Nuestros estudiantes se gradúan con High School Diploma con el que pueden ingresar a la universidad latinoamericana de su elección.</p>
                    </div>
                    <div className='card'>
                        <img src={apoya} alt='acompanamiento'/>
                        <h3>Apoyamos las ideas</h3>
                        <p>Con nuestra incubadora de proyectos basados en modelos disruptivos e innovadores tu hijo llevará sus ideas a otro nivel.</p>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <section className='metodologia'>
        <div className='content'>
            <div className='content-img'>
                <img src={metodologia} alt='nina avion'/>
                {/* <div className='capa'>
                    asdasda
                </div> */}
            </div>
            <div className='descrip'>
                <h2>Educación para la vida</h2>
                <p>
                Más que la mera transmisión de información, el conocimiento es una herramienta 
                para descubrir por sí mismos el rol dentro de una sociedad, las virtudes y las pasiones. 
                Con una mentalidad de libertad e interminable curiosidad, aquí lo importante, más que las respuestas, 
                son las preguntas. 
                </p>
                <br/>
                <br/><br/>
                <a href='#'>Conoce nuestra metodologia</a>
            </div>
        </div>
        
        <svg className='wave2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f5" fill-opacity="1" d="M0,320L1440,256L1440,320L0,320Z"></path>
        </svg>
        </section>
    </div>
  )
}

export default Home