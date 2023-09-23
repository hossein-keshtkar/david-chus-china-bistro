import ds1Bg from "../assets/images/menu/bgImg/desserts/DS1.png";
import ds1Img from "../assets/images/menu/mainImg/desserts/DS1.jpg";
import ds2Bg from "../assets/images/menu/bgImg/desserts/DS2.png";
import ds2Img from "../assets/images/menu/mainImg/desserts/DS2.jpg";

export const dessertsMenu = {
  id: "desserts",
  header: "Desserts Menu",
  items: [
    {
      description:
        "Layers of German chocolate cake are soaked in rum to moist perfection. Extravagant amounts of chocolate create special truffle filling, and a superb chocolate ganache icing to cover this entire indulgence",
      header: "Chocolate Truffle Cake",
      label: "DS1",
      price: "$5.50 slice",
      img: ds1Img,
      bg: ds1Bg,
    },
    {
      description:
        "This cake combines coffee liquer and espresso cream complimented with a pure apricot jam, layered between cappuccino chiffon",
      header: "Cappuccino Apricot Cake",
      label: "DS2",
      price: "$5.50 slice",
      img: ds2Img,
      bg: ds2Bg,
    },
  ],
};
