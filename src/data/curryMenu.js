import cu21Bg from "../assets/images/menu/bgImg/curry/CU21.png";
import cu21Img from "../assets/images/menu/mainImg/curry/CU21.jpg";
import cu22Bg from "../assets/images/menu/bgImg/curry/CU22.png";
import cu22Img from "../assets/images/menu/mainImg/curry/CU22.jpg";
import cu23Bg from "../assets/images/menu/bgImg/curry/CU23.png";
import cu23Img from "../assets/images/menu/mainImg/curry/CU23.jpg";

export const curryMenu = {
  id: "curry",
  header: "Curry Menu",
  items: [
    {
      description:
        "white meat chicken sauteed with ionions, peas, carrots, and broccoli",
      header: "Curry Chicken",
      label: "CU21",
      price: "$17.95 pint $21.95 large",
      img: cu21Img,
      bg: cu21Bg,
    },
    {
      description: "beef sauteed with ionions, peas, carrots, and broccoli",
      header: "Curry Beef",
      label: "CU22",
      price: "$17.95 pint $21.95 large",
      img: cu22Img,
      bg: cu22Bg,
    },
    {
      description: "veal sauteed with ionions, peas, carrots, and broccoli",
      header: "Curry Veal",
      label: "CU23",
      price: "$18.95 pint $25.95 large",
      img: cu23Img,
      bg: cu23Bg,
    },
  ],
};
