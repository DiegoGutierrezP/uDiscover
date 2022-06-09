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
import colombia from '../assets/imgs/colombia.png';

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
            <path /* fill="#f3f4f5" */ /* fill="#f1f5f9" */ fill='#e2e8f0' fill-opacity="1" d="M0,320L1440,256L1440,320L0,320Z"></path>
        </svg>
        </section>
        <section className='planes'>
            <div className='content'>
                <h1 className='title'>Aprovecha nuestros precios especiales con descuento</h1>
                <div className='container'>
                    <div className='card'>
                        <div className='circle'>
                        
                                <h2>Plan anual</h2>
                                <span>1 pago</span>
                            
                            <div>
                                <img src={colombia} alt='colombia' />
                            </div>
                           
                        </div>
                        <div className='body-card'>
                            <span className='precio'>COP$ 741.000/mes</span>
                            <div className='info'>
                            <p>
                            1 pago de COP$ 8'894.000.
                            <br/><br/>
                            *En este valor incluye el pago de la matricula, los recursos digitales y 10 mensualidades.
                            </p>
                            </div>
                            <a href='#' >Conoce mas </a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='circle'>
                            <h2>Plan mensual anticipado</h2>
                            <span>12 pagos</span>
                            <div>
                                <img src={colombia} alt='colombia' />
                            </div>
                            
                        </div>
                        <div className='body-card'>
                        <span className='precio'>COP$ 769.000/mes</span>
                        <div className='info'>
                            <p>
                            12 pagos distribuidos en:
                            <br/><br/>
                            1er pago: Matrícula COP$719.000/hasta el 30 abril.<br/>
                            2do pago: Recursos digitales COP$869.000.<br/>
                            3er a 12vo pago: Mensualidades COP$769.000*<br/>
                            *Valor a pagar hasta el 5 de cada mes.
                            </p>
                        </div>
                            <a href='#' >Conoce mas </a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='circle'>
                            <h2>Plan mensual</h2>
                            <span>12 pagos</span>
                            <div>
                                <img src={colombia} alt='colombia' />
                            </div>
                            
                        </div>
                        <div className='body-card'>
                        <span className='precio'>COP$ 869.000/mes</span>
                            <div className='info'>
                            <p>
                            12 pagos distribuidos en:
                            <br/><br/>
                            1er pago: Matrícula COP$719.000/hasta el 30 abril.<br/>
                            2do pago: Recursos digitales COP$869.000.<br/>
                            3er a 12vo pago: Mensualidades COP$869.000
                            </p>
                            </div>
                            <a href='#' >Conoce mas </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='inscribete'>
            <div className='form-content'>
                <div className='content-1'>
                    <div className='content-icon'>
                    <i class="fa-solid fa-pen-ruler"></i>
                    </div>
                
                    <h2>Inscribete ahora</h2>
                    <p>
                    Nuestra asesora pedagógica se pondrá en contacto para iniciar el proceso de inscripción de tu hijo.
                    </p>
                </div>
                <form>
                    <div className='group-form'>
                        <label>Nombre</label>
                        <input type='text'  />
                    </div>
                    <div className='group-form'>
                        <label>Apellidos</label>
                        <input type='text'  />
                    </div>
                    <div className='group-form'>
                        <label>Correo Electronico</label>
                        <input type='email'  />
                    </div>
                    <div className='group-form'>
                        <label>Telefono</label>
                        <input type='phone'  />
                    </div>
                    <div className='group-form'>
                        <label>Edad del Estudiante</label>
                        <input type='number'  />
                    </div>
                    <div className='group-form'>
                        <label>Pais</label>
                        <input type='text'  />
                    </div>
                    <div className='group-form'>
                        <label>¿Cual es el Motivo para buscar un colegio virtual?</label>
                        <input type='text'  />
                    </div>
                    <br/>
                    <input className='btn-enviar' type='submit'/>
                </form>
            </div>
        <svg  className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill='#e2e8f0' fill-opacity="1" d="M0,64L1440,32L1440,0L0,0Z"></path>
            </svg>
        </section>
    </div>
  )
}

export default Home