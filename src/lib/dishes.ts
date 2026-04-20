import palak from "@/assets/dish-palak-paneer.jpg";
import kathi from "@/assets/dish-kathi-rolls.jpg";
import satay from "@/assets/dish-chicken-satay.jpg";
import noodleBalls from "@/assets/dish-noodle-balls.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka-masala.jpg";

export type Dish = {
  name: string;
  category: "Starters" | "Mains" | "Specials";
  image: string;
  description: string;
};

export const dishes: Dish[] = [
  {
    name: "Crispy Noodle Cheese Balls",
    category: "Starters",
    image: noodleBalls,
    description: "Golden crisp noodle-wrapped bites with a smoky chipotle dip.",
  },
  {
    name: "Chicken Satay Skewers",
    category: "Starters",
    image: satay,
    description: "Tender skewers in roasted peanut sauce with toasted cashew.",
  },
  {
    name: "Paneer Tikka Masala",
    category: "Mains",
    image: paneerTikka,
    description: "Char-grilled paneer simmered in a velvety tomato cashew gravy.",
  },
  {
    name: "Palak Paneer",
    category: "Mains",
    image: palak,
    description: "Slow-cooked spinach with cottage cheese and warming spices.",
  },
  {
    name: "Royal Kathi Rolls",
    category: "Specials",
    image: kathi,
    description: "Flaky parathas wrapped around spiced chicken on makhani sauce.",
  },
];
