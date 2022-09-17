import React from "react";
import Card from "./Card";
import InfoCard from "./InfoCard";

const Dashboard = () => {
  return (
    <section>
      <section>
        <h1>LOGO</h1>
        <nav>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </nav>
        <div>
          LOGOUT
        </div>
      </section>
      <section>
        <header>
          <section>BARS</section>
          <section>
            <div>
              <div>MONEDA</div>
              <div>IDIOMA</div>
            </div>
            <div>TEMA</div>
          </section>
          <section>CAMPANA</section>
          <section>PERFIL</section>
        </header>
        <h2>Welcome, Javier</h2>
        <main>
          <section>
            <div>
              <img src="" alt="MEDALLA" />
              <img src="" alt="INFO" />
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
          <section>
            <section>
              <Card/>
              <Card/>
              <Card/>
            </section>
            <hr />
            <section>
              <img src="" alt="FOTO" />
              <hr />
              <section>
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
              <section>
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