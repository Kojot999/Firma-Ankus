import React from "react";
import "./style.scss";

import img5 from "@assets/img5.jpg";
import img6 from "@assets/img6.webp";
import img7 from "@assets/img7.webp";
import img8 from "@assets/img8.webp";
import img9 from "@assets/img9.webp";
import img10 from "@assets/img10.webp";

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="hero">
        <div className="heroText">
          <h1>Firma Ankus</h1>

          <p>
            Jesteśmy firmą z Dolnego Śląska. Świadczymy usługi
            budowlano-transportowe oraz wykonujemy roboty ziemne, drogowe i
            rozbiórkowe. Realizujemy transport materiałów sypkich oraz transport
            niskopodwoziowy. Jesteśmy zarejestrowani w systemie BDO, posiadamy
            niezbędne certyfikaty i uprawnienia.
            <br />
            <br />
            Dysponujemy bogatą flotą sprzętu budowlanego oraz pojazdów
            transportowych.
          </p>

          <div className="ctaRow">
            <a className="ctaBtn" href="/oferta">
              Zobacz dostępne maszyny →
            </a>
            <a className="ctaBtn ghost" href="/kontakt">
              Kontakt i lokalizacja →
            </a>
          </div>

          <div className="badges">
            <span className="badge">Roboty ziemne</span>
            <span className="badge">Roboty drogowe</span>
            <span className="badge">Roboty rozbiórkowe</span>
            <span className="badge">Transport materiałów sypkich</span>
            <span className="badge">Transport niskopodwoziowy</span>
            <span className="badge">Rejestr w BDO</span>
            <span className="badge">
              Sprzedaż materiałów sypkich w tym piasek, żwir, ziemia
            </span>
          </div>
        </div>

        <div className="heroGallery">
          <div className="galleryGrid">
            <figure className="shot">
              <img src={img5} alt="Prace ziemne" />
            </figure>
            <figure className="shot">
              <img src={img6} alt="Prace ziemne" />
            </figure>
            <figure className="shot">
              <img src={img7} alt="Rozbiórki" />
            </figure>
            <figure className="shot">
              <img src={img8} alt="Rozbiórki" />
            </figure>
            <figure className="shot wide">
              <img src={img9} alt="Transport niskopodwoziowy" />
            </figure>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="panel">
          <h2>Zakres usług</h2>
          <ul className="cardGrid">
            <li className="card">
              <p>Roboty ziemne</p>
              <span>Wykopy, niwelacje, przygotowanie terenu</span>
            </li>
            <li className="card">
              <p>Roboty drogowe</p>
              <span>Podbudowy, utwardzenia, prace przygotowawcze</span>
            </li>
            <li className="card">
              <p>Roboty rozbiórkowe</p>
              <span>Wyburzenia, segregacja i wywóz odpadów</span>
            </li>
            <li className="card">
              <p>Transport materiałów sypkich</p>
              <span>Kruszywa, piasek, ziemia i inne materiały</span>
            </li>
            <li className="card">
              <p>Transport niskopodwoziowy</p>
              <span>Przewóz maszyn i sprzętu do 30 ton</span>
            </li>
          </ul>
        </div>

        <div className="panel">
          <h2>Wynajem / usługi sprzętem budowlanym</h2>
          <ul className="cardGrid">
            <li className="card">
              <p>Koparki kołowe i gąsienicowe 5–26 ton</p>
              <span>Rototilt, widły, młot hydrauliczny, komplet łyżek</span>
            </li>
            <li className="card">
              <p>Koparko-ładowarki</p>
              <span>Krokodyl, widły, młot, komplet łyżek</span>
            </li>
            <li className="card">
              <p>Ładowarki teleskopowe</p>
              <span>
                Kosz do prac na wysokości, widły do palet, łyżka do sypkich
              </span>
            </li>
            <li className="card">
              <p>Wywrotki 3–4 osiowe</p>
              <span>Hydroburty, transport i rozładunek</span>
            </li>
            <li className="card">
              <p>Naczepy wywrotki 26 ton</p>
              <span>Transport materiałów sypkich</span>
            </li>
            <li className="card">
              <p>Naczepy niskopodwoziowe</p>
              <span>Transport sprzętu i maszyn</span>
            </li>
            <li className="card">
              <p>Ciągniki rolnicze</p>
              <span>Tandem, zamiatarka, beczka do przewozu wody</span>
            </li>
          </ul>
        </div>

        <div className="panel">
          <h2>Dodatkowe usługi</h2>
          <ul className="cardGrid">
            <li className="card">
              <p>Wywóz gruzu i odpadów</p>
              <span>Sprawnie i zgodnie z wymaganiami</span>
            </li>
            <li className="card">
              <p>Wywóz ziemi i materiałów sypkich</p>
              <span>Załadunek + transport</span>
            </li>
            <li className="card">
              <p>Sprzedaż kruszyw, piasku, ziemi</p>
              <span>Materiały sypkie — dowóz na miejsce</span>
            </li>
            <li className="card">
              <p>Prace warsztatowe i serwisowe</p>
              <span>Obsługa i naprawy sprzętu</span>
            </li>
          </ul>

          <div className="highlight">
            <h3>Własne wysypisko odpadów</h3>
            <p>
              Posiadamy własne wysypisko odpadów — przyjmujemy odpady budowlane,
              rozbiórkowe, ziemne, gruz oraz inne odpady sypkie.
            </p>
          </div>

          <div className="closing">
            Zapraszamy do współpracy firmy i osoby prywatne. Oferujemy
            konkurencyjne ceny i profesjonalną obsługę.
          </div>
        </div>
      </div>
    </section>
  );
}
