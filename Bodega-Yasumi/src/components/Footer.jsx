import React from 'react'
import { FaFacebookF as FaceIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { AiOutlineSend as SendIcon } from "react-icons/ai";

const Footer = () => {
  return (   
    <footer className="footer">
        <div className="contenedor">
            <div className="barra__footer">
                <div className="footer__up">
                    <div className="footer___up--info">
                        <h4 className="footer__up--tittle">informacion del negocio</h4>
                        <div className="footer__up--options">
                            <a className="footer__texto" href="">careers</a>
                            <a className="footer__texto" href="">b2b</a>
                            <a className="footer__texto" href="">privacy policy</a>
                            <a className="footer__texto" href="">terms & conditions</a>
                            <a className="footer__texto" href="">cookies</a>
                        </div>
                    </div>
                    <div className="footer___up--info">
                        <h4 className="footer__up--tittle">servicio al cliente</h4>
                        <div className="footer__up--options">
                            <a className="footer__texto" href="">faq</a>
                            <a className="footer__texto" href="">contact us</a>
                            <a className="footer__texto" href="">sizing charts</a>
                        </div>
                    </div>
                    <div className="footer___up--info hola">
                        <h4 className="footer__up--tittle">Síguenos</h4>
                        <div className="footer__up--iconos">
                            <FaceIcon className='icon__contact'/>
                            <InstagramIcon className='icon__contact'/>
                            <TwitterIcon className='icon__contact'/>
                        </div>
                    </div>
                    <div className="footer___up--info hola2">
                        <h4 className="footer__up--tittle ">Sign up to vans newsletter</h4>
                        <p className="footer__texto">suscribe to our newsletter to get latest news about our products</p>
                        <div className="footer__up--email">
                            <input className="footer__up--input" type="text" name="" id="" placeholder="INGRESA TU EMAIL"/>
                            <a className="footer__up--icon icon__send" href="">
                                <SendIcon></SendIcon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__down">
                    <p className="footer__texto">©2022 BODEGA YASUMI - TODOS LOS DERECHOS RESERVADOS</p>
                    <div className="footer__down--pay">
                        <i className='icon__pay bx bxl-visa'></i>
                        <i className='icon__pay bx bxl-mastercard'></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer