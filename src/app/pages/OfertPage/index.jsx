import "./style.scss";
import img1 from "@assets/img1.jpg";
import img2 from "@assets/img2.jpg";
import img3 from "@assets/img3.webp";
import img4 from "@assets/img4.webp";

export default function OfertPage() {
  return (
    <section className="ofert-page">
      <div className="hero">
        <div className="heroText">
          <h2>Park maszynowy</h2>

          <p>
            Posiadamy w swojej ofercie szeroki zakres maszyn i pojazdów
            budowlanych. Nasza firma specjalizuje się w usługach sprzętem
            budowlanym oraz świadczeniu usług transportowych.
          </p>

          <div className="stats">
            <div className="statCard">
              <span className="statNumber">36</span>
              <span className="statLabel">Wielkość parku maszynowego</span>
            </div>
          </div>
        </div>

        <div className="heroGallery">
          <div className="galleryGrid">
            <img src={img1} alt="Sprzęt budowlany - Ankus" />
            <img src={img2} alt="Transport - Ankus" />
            <img src={img3} alt="Roboty ziemne - Ankus" />
            <img src={img4} alt="Park maszynowy - Ankus" />
          </div>
        </div>
      </div>

      <div className="offerSection">
        <h3>Dostępne maszyny i pojazdy budowlane</h3>
        <p className="subtitle">
          Oferta usług maszynami budowlanymi i transportowymi:
        </p>

        <ul className="offerGrid">
          <li className="offerCard">
            <p>SAMOCHÓD WYWROTKA 3-OSIOWA</p>
            <span>Napędy 6x4 – 6x6 / Hydroburta boczna</span>
          </li>

          <li className="offerCard">
            <p>SAMOCHÓD WYWROTKA 4-OSIOWA</p>
            <span>Napędy 8x4 – 8x6 / Hydroburta boczna</span>
          </li>

          <li className="offerCard">
            <p>NACZEPA WYWROTKA 26 TON</p>
            <span>Transport materiałów sypkich</span>
          </li>

          <li className="offerCard">
            <p>TRANSPORT NISKOPODWOZIOWY DO 30 TON</p>
            <span>Przewóz maszyn i sprzętu</span>
          </li>

          <li className="offerCard">
            <p>KOPARKI KOŁOWE 16–19 TON</p>
            <span>Rototilt / łyżka skarpowa wychylna / łyżki 70–110 cm</span>
          </li>

          <li className="offerCard">
            <p>KOPARKA GĄSIENICOWA 26 TON</p>
            <span>Łyżka skarpowa / łyżka 1,8 m³</span>
          </li>

          <li className="offerCard">
            <p>KOPARKA GĄSIENICOWA 5 TON</p>
            <span>Łyżka skarpowa / łyżki 30–80 cm</span>
          </li>

          <li className="offerCard">
            <p>KOPARKO-ŁADOWARKA JCB 3CX</p>
            <span>
              Łyżka załadunkowa / widły / łyżka skarpowa / łyżki 30–60 cm
            </span>
          </li>

          <li className="offerCard">
            <p>ŁADOWARKA TELESKOPOWA 14M WYSIĘGU</p>
            <span>Kosz wysokościowy / widły / łyżka załadunkowa</span>
          </li>

          <li className="offerCard">
            <p>CIĄGNIK ROLNICZY</p>
            <span>
              Beczka 9000L / zamiatarka / tandem 14 ton / niskie podwozie 17 ton
            </span>
          </li>
        </ul>

        <div className="ctaBox">
          <div className="ctaText">
            <h4>Potrzebujesz wyceny?</h4>
            <p>
              Skontaktuj się z nami — dobierzemy sprzęt i transport pod Twoją
              inwestycję.
            </p>
          </div>

          <a className="ctaBtn" href="/kontakt">
            Przejdź do kontaktu →
          </a>
        </div>
      </div>
    </section>
  );
}
