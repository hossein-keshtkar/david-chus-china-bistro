import fr1Bg from "../assets/images/menu/bgImg/fried-rice/FR1.png";
import fr1Img from "../assets/images/menu/mainImg/fried-rice/FR1.jpg";
import fr2Bg from "../assets/images/menu/bgImg/fried-rice/FR2.png";
import fr2Img from "../assets/images/menu/mainImg/fried-rice/FR2.jpg";
import fr3Bg from "../assets/images/menu/bgImg/fried-rice/FR3.png";
import fr3Img from "../assets/images/menu/mainImg/fried-rice/FR3.jpg";
import fr4Bg from "../assets/images/menu/bgImg/fried-rice/FR4.png";
import fr4Img from "../assets/images/menu/mainImg/fried-rice/FR4.jpg";

export const friedRiceMenu = {
  id: "fried-rice",
  header: "Mei Fan (Very Fine Noodles) Menu",
  items: [
    {
      description:
        "broccoli, snow peas, onions, and bean sprouts sauteed with rice",
      header: "Vegetable Fried Rice",
      label: "FR1",
      price: "$14.95 pint $17.95 large",
      img: fr1Img,
      bg: fr1Bg,
    },
    {
      description:
        "white meat chicken sauteed with onions and bean sprouts with rice",
      header: "Chicken Fried Rice",
      label: "FR2",
      price: "$15.95 pint $18.95 large",
      img: fr2Img,
      bg: fr2Bg,
    },
    {
      description: "sliced beef sauteed with onions and bean sprouts with rice",
      header: "Beef Fried Rice",
      label: "FR3",
      price: "$15.95 pint $18.95 large",
      img: fr3Img,
      bg: fr3Bg,
    },
    {
      description: "sliced veal sauteed with onions and bean sprouts with rice",
      header: "Veal Fried Rice",
      label: "FR4",
      price: "$16.95 pint $19.95 large",
      img: fr4Img,
      bg: fr4Bg,
    },
  ],
};
