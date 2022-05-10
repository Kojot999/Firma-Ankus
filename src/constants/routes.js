import oferta1 from "../img/Oferta1.jpg";
import transport1 from "../img/Transport1.jpg";
import Podwykonastwo1 from "../img/Podwykonastwo1.jpg";

export const ROUTES = [
  {
    name: "Oferta sprzętowa",
    path: "/oferta",
    img: oferta1,
  },
  {
    name: "Podwykonawstwo",
    path: "/oferta#podwykonawstwo",
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
