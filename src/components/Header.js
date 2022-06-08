import React, { useEffect, useRef, useState } from 'react'
import '../styles/Header.css';
import logo from '../assets/imgs/logo-udiscover.png';

const Header = () => {

    let header = useRef(null);
  const [menuBtn,setMenuBtn] = useState(true);  

const handleClickMenuBtn=()=>{
    setMenuBtn(!menuBtn)
} 

useEffect(()=>{
    const onScroll = (e)=>{
        setMenuBtn(true);
        //console.log(window,window.scrollY)
        if(window.scrollY > 30){
            header.current.className = 'header-active';
        }else{
            header.current.className = '';
        }
    }
    window.addEventListener('scroll',onScroll)

    return ()=>{
        window.removeEventListener('scroll',onScroll);
    }
},[])



  return (
    <header ref={header} className="" >
        <a href='#'>
            <img className='logo' src={logo} alt='virtual school' />
        </a>
        <nav className={`navbar ${menuBtn ? '' : 'nav-toggle'}`}>
            <ul>
                <li><a href='#'>Experiencia UDiscover</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Adminsiones</a></li>
                <li><a href='#'>Plataforma</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
        </nav>

        <div  onClick={handleClickMenuBtn} className={`fa-solid ${menuBtn ? 'fa-bars': 'fa-xmark'}`}>
        </div>
    </header>
  )
}

export default Header