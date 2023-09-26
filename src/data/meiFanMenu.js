import nf10Bg from "../assets/images/menu/bgImg/mei-fan/NF10.png";
import nf10Img from "../assets/images/menu/mainImg/mei-fan/NF10.jpg";
import nf11Bg from "../assets/images/menu/bgImg/mei-fan/NF11.png";
import nf11Img from "../assets/images/menu/mainImg/mei-fan/NF11.jpg";
import nf12Bg from "../assets/images/menu/bgImg/mei-fan/NF12.png";
import nf12Img from "../assets/images/menu/mainImg/mei-fan/NF12.jpg";
import nf13Bg from "../assets/images/menu/bgImg/mei-fan/NF13.png";
import nf13Img from "../assets/images/menu/mainImg/mei-fan/NF13.jpg";

export const meiFanMenu = {
  id: "mei-fan",
  header: "Mei Fan (Very Fine Noodles) Menu",
  paragraph: "",
  items: [
    {
      description:
        "broccoli, snow peas, onions, and bean sprouts sauteed with rice noodles",
      header: "Vegetable Mei Fan",
      label: "NF10",
      price: "$17.95",
      img: nf10Img,
      bg: nf10Bg,
    },
    {
      description: "white meat chicken sauteed with onions and bean sprouts",
      header: "Chicken Mei Fan",
      label: "NF11",
      price: "$20.95",
      img: nf11Img,
      bg: nf11Bg,
    },
    {
      description: "beef sauteed with onions and bean sprouts",
      header: "Beef Mei Fan",
      label: "NF12",
      price: "$20.95",
      img: nf12Img,
      bg: nf12Bg,
    },
    {
      description:
        "white meat chicken, beef, and veal sauteed with onions and bean sprouts",
      header: "House Special Mei Fan",
      label: "NF13",
      price: "$20.95",
      img: nf13Img,
      bg: nf13Bg,
    },
  ],
};
