import l12Bg from "../assets/images/menu/bgImg/lunch/L12.png";
import l12Img from "../assets/images/menu/mainImg/lunch/L12.jpg";
import l9Img from "../assets/images/menu/mainImg/lunch/L9.jpg";
import l9Bg from "../assets/images/menu/bgImg/lunch/L9.png";
import l1Img from "../assets/images/menu/mainImg/lunch/L1.jpg";
import l1Bg from "../assets/images/menu/bgImg/lunch/L1.png";
import l27Img from "../assets/images/menu/mainImg/lunch/L27.jpg";
import l27Bg from "../assets/images/menu/bgImg/lunch/L27.png";

export const lunchMenu = [
  {
    id: "lunch",
    header: "Lunch Menu",
    paragraph:
      "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll.",
    items: [
      {
        description:
          "white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
        header: "Szechuan Chicken",
        label: "L12",
        price: "$13.55",
        img: l12Img,
        bg: l12Bg,
      },
      {
        description:
          "white meat chicken, breaded and fried with some green pepper, onion, and pineapples",
        header: "Sweet and Sour Chicken",
        label: "L9",
        price: "$13.55",
        img: l9Img,
        bg: l9Bg,
      },
      {
        description:
          "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request, $1 more for white meat",
        header: "Orange Chicken",
        label: "L1",
        price: "$13.55",
        img: l1Img,
        bg: l1Bg,
      },
      {
        description:
          "white meat chicken OR beef OR vegetables, sauteed with onions, and bean sprouts and soft lo mein noodles",
        header: "Lo Mein",
        label: "L27",
        price: "$13.55",
        img: l27Img,
        bg: l27Bg,
      },
    ],
  },
  {
    id: "soup",
    header: "Soup Menu",
    paragraph: "",
    header: "",
    items: [],
  },
];
