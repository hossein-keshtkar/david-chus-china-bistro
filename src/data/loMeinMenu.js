import nl1Bg from "../assets/images/menu/bgImg/lo-mein/NL1.png";
import nl1Img from "../assets/images/menu/mainImg/lo-mein/NL1.jpg";
import nl2Bg from "../assets/images/menu/bgImg/lo-mein/NL2.png";
import nl2Img from "../assets/images/menu/mainImg/lo-mein/NL2.jpg";
import nl3Bg from "../assets/images/menu/bgImg/lo-mein/NL3.png";
import nl3Img from "../assets/images/menu/mainImg/lo-mein/NL3.jpg";

export const loMeinMenu = {
  id: "lo-mein",
  header: "Noodles (Lo Mein) Menu",
  paragraph: "",
  items: [
    {
      description:
        "broccoli, carrots, onions, snow peas, and bean sprouts sauteed with soft lo mein noodles",
      header: "Vegetable Lo Mein",
      label: "NL1",
      price: "$14.95 pint $17.95 large",
      img: nl1Img,
      bg: nl1Bg,
    },
    {
      description:
        "white meat chicken, onions, and bean sprouts sauteed with soft lo mein noodles",
      header: "Chicken Lo Mein",
      label: "NL2",
      price: "$15.95 pint $18.95 large",
      img: nl2Img,
      bg: nl2Bg,
    },
    {
      description:
        "beef, onions, and bean sprouts sauteed with soft lo mein noodles",
      header: "Beef Lo Mein",
      label: "NL3",
      price: "$15.95 pint $18.95 large",
      img: nl3Img,
      bg: nl3Bg,
    },
  ],
};
