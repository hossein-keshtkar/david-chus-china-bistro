import dk1Bg from "../assets/images/menu/bgImg/duck/DK1.png";
import dk1Img from "../assets/images/menu/mainImg/duck/DK1.jpg";
import dk2Bg from "../assets/images/menu/bgImg/duck/DK2.png";
import dk2Img from "../assets/images/menu/mainImg/duck/DK2.jpg";
import dk3Bg from "../assets/images/menu/bgImg/duck/DK3.png";
import dk3Img from "../assets/images/menu/mainImg/duck/DK3.jpg";

export const duckMenu = {
  id: "duck",
  header: "Duck Menu",
  paragraph: "",
  items: [
    {
      description:
        "marinated duck roasted crisp and served with pancake and green onion with special sauce",
      header: "Peking Duck",
      label: "DK1",
      price: "$29.95 half $53.95 whole",
      img: dk1Img,
      bg: dk1Bg,
    },
    {
      description:
        "boneless duck meat, lightly breaded, deep fried to a crisp, topped with vegetables in chef's special sauce",
      header: "Crispy Duck",
      label: "DK2",
      price: "$33.95",
      img: dk2Img,
      bg: dk2Bg,
    },
    {
      description:
        "sliced lean duck meat sauteed with mixed vegtables in brown sauce",
      header: "Duck with Vegetables",
      label: "DK3",
      price: "$33.95",
      img: dk3Img,
      bg: dk3Bg,
    },
  ],
};
