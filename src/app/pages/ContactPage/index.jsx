import "./style.scss";
import phoneIcon from "@assets/phoneIcon.png";
import mailIcon from "@assets/mailIcon.png";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div id="firma" className="section section2">
        <h2>Lokalizacja</h2>

        <div className="wrapper">
          <div className="aboutCard">
            <h4>
              Jesteśmy Firmą z Dolnego Śląska, nasza baza znajduję się w
              Piotrowicach k Jawora, 6km od zjadu S3 Jawor.
              <br /> Dokładny adres to Piotrowice 68A 59-424 Męcinka.
            </h4>
          </div>

          <div className="mapCard">
            <div className="mapHeader">
              <span className="dot" />
              <span>Mapa</span>
            </div>

            <div className="mapFrame">
              <iframe
                title="Mapa - Firma Ankus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.383992341111!2d16.14288357685796!3d51.06243289311165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f051510fb68a3%3A0x91974a7fe558b073!2sFirma%20Ankus%20Us%C5%82ugi%20sprz%C4%99tem%20budowlanym%20%2CRoboty%20ziemne%20%2C%20Transport!5e1!3m2!1spl!2spl!4v1770847507039!5m2!1spl!2spl"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              className="mapLink"
              href="https://www.google.com/maps?ll=51.063633,16.147005&z=15&t=h&hl=pl&gl=PL&mapclient=embed&cid=10490935770151956595"
              target="_blank"
              rel="noreferrer"
            >
              Otwórz w Google Maps →
            </a>
          </div>
        </div>
      </div>

      <div id="kontakt" className="section section1">
        <h2>KONTAKT</h2>

        <ul className="contactList">
          <li>
            <span className="iconWrap">
              <img alt="" src={phoneIcon} />
            </span>
            <a href="tel:+605144251">Adam Ankus +605 144 251</a>
          </li>

          <li>
            <span className="iconWrap">
              <img alt="" src={phoneIcon} />
            </span>
            <a href="tel:+608392579">Mirosława Ankus +608 392 579</a>
          </li>

          <li>
            <span className="iconWrap">
              <img alt="" src={phoneIcon} />
            </span>
            <a href="tel:+604106214">Biuro (Mobilny) +604 106 214</a>
          </li>

          <li>
            <span className="iconWrap">
              <img alt="" src={phoneIcon} />
            </span>
            <a href="tel:+726057889">Biuro (Stacjonarny) +72 605 78 89</a>
          </li>

          <li>
            <span className="iconWrap">
              <img alt="" src={phoneIcon} />
            </span>
            <a href="tel:+696068905">Andrzej Ankus +696 068 905</a>
          </li>

          <li>
            <span className="iconWrap">
              <img alt="" src={mailIcon} />
            </span>
            <a href="mailto: firmaankus@gmail.com"> firmaankus@gmail.com</a>
          </li>
        </ul>

        <div className="hours">
          <h3>Godziny pracy</h3>

          <ul className="hoursList">
            <li>
              <span className="day">Poniedziałek – Piątek</span>
              <span className="time">7:00 – 17:00</span>
            </li>
            <li>
              <span className="day">Sobota</span>
              <span className="time">8:00 – 13:00</span>
            </li>
            <li>
              <span className="day">Niedziela</span>
              <span className="time muted">Nieczynne</span>
            </li>
          </ul>

          <p className="hoursNote">
            W pilnych sprawach prosimy o kontakt telefoniczny.
          </p>
        </div>
      </div>
    </section>
  );
}
