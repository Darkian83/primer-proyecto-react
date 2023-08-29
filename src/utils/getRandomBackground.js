import f1 from "../assets/fondo1.jpg";
import f2 from "../assets/fondo2.jpg";
import f3 from "../assets/fondo3.jpg";
import f4 from "../assets/fondo4.jpg";
import f5 from "../assets/fondo5.png";
import f6 from "../assets/fondo6.png";
import f7 from "../assets/fondo7.png";
import f8 from "../assets/fondo8.png";

const fondos = [f1, f2, f3, f4, f5, f6, f7, f8];

export function getRandomBackground(arr = fondos) {
  const indexRandom = Math.floor(Math.random() * arr.length);
  return arr[indexRandom];
}
