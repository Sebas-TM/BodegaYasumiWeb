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

const Dashboard = () => {
  return (
    <section className='admin'>
      <section className='admin__menu'>
        <h1 className='admin__logo'>LOGO</h1>
        <nav className='admin__nav'>
          <li className='admin__li'>
            <IconHome/>
            Resumen
          </li>
          <li className='admin__li'>
            <IconUsers/>
            Usuarios
          </li>
          <li className='admin__li'>Resumen</li>
          <li className='admin__li'>Resumen</li>
          <li className='admin__li'>
            <IconUser/>
            Perfil
          </li>
        </nav>
        <div className='admin__logout'>
          <IconLogout/>
          LOGOUT
        </div>
      </section>
      <section className='admin__container'>
        <header className='admin__header'>
          <section className='button__header'>
            <IconBars/>
          </section>
          <section className='admin__config'>
            <div className='admin__config-buttons'>
              <div className='button__header'>SOLES</div>
              <div className='button__header'>ES</div>
            </div>
            <div className='button__header'>
              <IconDark/>
            </div>
          </section>
          <section className='button__header'>
            <IconNotification/>
          </section>
          <section className='button__header'>
            <span>Javier V</span>
            <img src="" alt="Foto de perfil" />
          </section>
        </header>
        <h2 className='admin__title'>Welcome, Javier</h2>
        <main className='admin__main'>
          <section className='admin__tablet'>
            <div>
              <img src="" alt="MEDALLA" />
              <IconInfo />
            </div>
            <InfoCard/>
            <div>
              <h4>Next rank</h4>
              <p>Profesional</p>
            </div>
            <hr />
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
          </section>
          <section className='admin__resume'>
            <section className='container__card'>
              <Card/>
              <Card/>
              <Card/>
            </section>
            <hr />
            <section>
              <img src="" alt="FOTO" />
              <hr />
              <section className='container__card'>
                <div>
                  <div>
                    <img src="" alt="GENERIC" />
                  </div>
                  <p>TITLE</p>
                </div>
                <div>
                  <p>DEC 12, 2020, 09:40</p>
                  <p>14:00</p>
                </div>
              </section>
              <section className='container__card'>
                <div>
                  <div>
                    <img src="" alt="GENERIC" />
                  </div>
                  <p>TITLE</p>
                </div>
                <div>
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