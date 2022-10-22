import React from "react";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import { FaSignOutAlt as IconLogout} from "react-icons/fa";
import { FaBars as IconBars} from "react-icons/fa";
import { MdOutlineDarkMode as IconDark } from "react-icons/md";
import { IoNotificationsOutline as IconNotification } from "react-icons/io5";
import { BsInfoCircleFill as IconInfo } from "react-icons/bs";
import { HiHome as IconHome } from "react-icons/hi";
import { HiUsers as IconUsers } from "react-icons/hi";
import { FaUser as IconUser } from "react-icons/fa";
import { AiOutlineCodepenCircle as LogoIcon } from "react-icons/ai";
import { FaMoneyBillAlt as IconMoney } from "react-icons/fa";
import Medalla from "../../assets/img/medalla.png"

const Dashboard = () => {
  return (
    <section className='admin'>
      <section className='admin__menu'>
        <h1 className='admin__logo'>
          <LogoIcon className="image__logo"/>
        </h1>
        <nav className='admin__nav'>
          <li className='admin__li'>
            <IconHome className="p-4"/>
            Resumen
          </li>
          <li className='admin__li'>
            <IconUsers className="p-4"/>
            Usuarios
          </li>
          <li className='admin__li'>Resumen</li>
          <li className='admin__li'>Resumen</li>
          <li className='admin__li'>
            <IconUser className="p-4"/>
            Perfil
          </li>
        </nav>
        <div className='admin__logout'>
          <IconLogout className="p-4"/>
          LOGOUT
        </div>
      </section>
      <section className='admin__container'>
        <header className='admin__header'>
          <section className='button__header button center'>
            <IconBars/>
          </section>
          <section className='admin__config'>
            <div className='admin__config-buttons'>
              <div className='button__header button center'>SOLES</div>
              <div className='button__header button center'>ES</div>
            </div>
            <div className='button__header button center'>
              <IconDark/>
            </div>
          </section>
          <section className='button__header button center'>
            <IconNotification/>
          </section>
          <section className='button__header container__profile flex center'>
            <span className="profile__text">Mayra V</span>
            <img className="profile__image" src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="Foto de perfil" />
          </section>
        </header>
        <h2 className='admin__title'>Welcome, Mayra</h2>
        <main className='admin__main'>
          <section className='admin__tablet button p-1'>
            <div className="container__image-medal flex justify-center">
              <img className="image__medal" src={Medalla} alt="MEDALLA" />
              <IconInfo className="info"/>
            </div>
            <InfoCard/>
            <div className="flex justify-between">
              <h4 className="m-0">Next rank</h4>
              <p>Profesional</p>
            </div>
            <hr />
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
          </section>
          <section className='admin__resume'>
            <section className='container__card'>
              <Card>
                <IconMoney/>
              </Card>
              <Card>
                <IconMoney/>
              </Card>
              <Card>
                <IconMoney/>
              </Card>
            </section>
            <section className="container__sales button m-4">
              <div className="container__image__primary flex justify-center">
                <img className="image__primary" src="https://img.freepik.com/free-vector/space-banner-with-purple-planet-landscape_107791-6230.jpg?w=2000" alt="FOTO" />
              </div>
              <section className='container__sale flex justify-between'>
                <div className='content__sale flex align-center gap-1'>
                  <div className="image__generic">
                  </div>
                  <p>TITLE</p>
                </div>
                <div className='flex gap-1'>
                  <p>DEC 12, 2020, 09:40</p>
                  <p>14:00</p>
                </div>
              </section>
              <section className='container__sale flex justify-between'>
                <div className='content__sale flex align-center gap-1'>
                  <div className="image__generic image__generic-2">
                  </div>
                  <p>TITLE</p>
                </div>
                <div className='flex gap-1'>
                  <p>DEC 12, 2020, 09:40</p>
                  <p>14:00</p>
                </div>
              </section>
            </section>
          </section>
        </main>
      </section>
    </section>
  )
}

export default Dashboard