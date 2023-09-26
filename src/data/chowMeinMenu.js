import cm1Bg from "../assets/images/menu/bgImg/chow-mein/CM1.png";
import cm1Img from "../assets/images/menu/mainImg/chow-mein/CM1.jpg";
import cm2Bg from "../assets/images/menu/bgImg/chow-mein/CM2.png";
import cm2Img from "../assets/images/menu/mainImg/chow-mein/CM2.jpg";
import cm3Bg from "../assets/images/menu/bgImg/chow-mein/CM3.png";
import cm3Img from "../assets/images/menu/mainImg/chow-mein/CM3.jpg";
import cm4Bg from "../assets/images/menu/bgImg/chow-mein/CM4.png";
import cm4Img from "../assets/images/menu/mainImg/chow-mein/CM4.jpg";

export const chowMeinMenu = {
  id: "chow-mein",
  header: "Chow Mein Menu",
  paragraph: "",
  items: [
    {
      description:
        "broccoli, snow peas, onions, bean sprouts, and celery sauteed with white sauce",
      header: "Vegetable Chow Mein",
      label: "CM1",
      price: "$14.95 pint $17.95 large",
      img: cm1Img,
      bg: cm1Bg,
    },
    {
      description:
        "white meat chicken sauteed with bean sprouts, onions, and celery in white sauce",
      header: "Chicken Chow Mein",
      label: "CM2",
      price: "$15.95 pint $18.95 large",
      img: cm2Img,
      bg: cm2Bg,
    },
    {
      description:
        "beef sauteed with bean sprouts, onions, and celery in brown sauce",
      header: "Beef Chow Mein",
      label: "CM3",
      price: "$15.95 pint $18.95 large",
      img: cm3Img,
      bg: cm3Bg,
    },
    {
      description:
        "veal sauteed with bean sprouts, onions, and celery in brown sauce",
      header: "Veal Chow Mein",
      label: "CM4",
      price: "$16.95 pint $19.95 large",
      img: cm4Img,
      bg: cm4Bg,
    },
  ],
};
