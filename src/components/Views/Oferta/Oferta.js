import styles from "./Oferta.module.scss";
import { Realizacje } from "./OfertaItems/Realizacje";

export const Oferta = () => {
  return (
    <div className={styles.oferta}>
      <div>
        <div className={styles.section1}>
          <h2>USŁUGI MASZYNAMI BUDOWLANYMI</h2>
          <ul>
            <li>
              <p>KOPARKI KOŁOWE 16-19TON (7szt)</p>
              <span>Rototilt / Łyżka Skarpowa wychylna / Łyżki 70-110cm</span>
            </li>
            <li>
              <p>KOPARKA GĄSIENICOWA 26TON</p>{" "}
              <span>Łyżka Skarpowa / Łyżka 1,8m3</span>
            </li>
            <li>
              <p>KOPARKI GĄSIENICOWA 5TON (2szt)</p>{" "}
              <span>Łyżka Skarpowa / Łyżki 30-80cm</span>
            </li>
            <li>
              <p>KOPARKO-ŁADOWARKA JCB 3CX (2szt)</p>{" "}
              <span>
                Łyżka Załadunkowa / Widły Załadunkowe / Łyżka Skarpowa / Łyżki
                30-60cm
              </span>
            </li>
            <li>
              <p>ŁADOWARKA TELESKOPOWA 14M WYSIĘGU (2szt)</p>
              <span>
                Kosz Wysokościowy / Widły Załadunkowe / Łyżka Załadunkowa
              </span>
            </li>
            <li>
              <p>CIĄGNIK ROLNICZY (2szt)</p>
              <span>
                Beczka 9000L / ZAMIATARKA / TANDEM 14TON / NISKIE PODWOZIE 17TON
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div id="transport" className={styles.section2}>
        <h2>TRANSPORT</h2>
        <ul>
          <li>
            <p>SAMOCHÓD WYWROTKA 3-OSIOWA (9szt)</p>
            <span>Napędy 6x4 - 6x6 / Hydroburta Boczna</span>
          </li>
          <li>
            <p>SAMOCHÓD WYWROTKA 4-OSIOWA (6szt)</p>
            <span>Napędy 8x4 - 8x6 / Hybroburta Boczna</span>
          </li>
          <li>
            <p>NACZEPA WYWROTKA 26TON (5szt)</p>
          </li>
          <li>
            <p>TRANSPORT NISKODOWOZIOWY 26TON</p>
            <span></span>
          </li>
        </ul>
      </div>
      <Realizacje />
    </div>
  );
};
