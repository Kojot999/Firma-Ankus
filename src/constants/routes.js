import oferta1 from "../img/Oferta1.jpg";
import transport1 from "../img/Transport1.jpg";
import Podwykonastwo1 from "../img/Podwykonastwo1.jpg";
import DrogaIMG from "../img/DrogaIMG.jpg";
import PraceZiemne from "../img/PraceZiemne.webp";
import Rozbiórki from "../img/Rozbiórki.webp";

export const ROUTES = [
  {
    name: "Oferta sprzętowa",
    path: "/oferta",
    img: oferta1,
  },
  {
    name: "Realizacje",
    path: "/oferta#realizacje",
    img: Podwykonastwo1,
  },
  {
    name: "Transport",
    path: "/oferta#transport",
    img: transport1,
  },
];
export const LINKS = [
  {
    name: "START",
    path: "/",
  },
  {
    name: "KONTAKT",
    path: "/about#kontakt",
  },
  {
    name: "FIRMA",
    path: "/about#firma",
  },
  {
    name: "OFERTA",
    path: "/oferta",
  },
];
export const LINKSREALIZACJE = [
  {
    name: "DROGI",
    img: DrogaIMG,
  },
  {
    name: "PRACE ZIEMNE",
    img: PraceZiemne,
  },
  {
    name: "ROZBIÓRKI",
    img: Rozbiórki,
  },
];
