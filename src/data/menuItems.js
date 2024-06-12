import wafflesImg from "../content/images/menu/waffles.jpg";
import omelettesImg from "../content/images/menu/omelettes.jpg";
import veggiesImg from "../content/images/menu/veggies.jpg";

const breakfastItems = [
  {
    id: 1,
    title: "2 Egg Classics and Scramblers",
    info: "All Egg Breakfasts Served with Two Eggs, Home Fries, and Toast OR Biscuits 'n' Gravy. (Substitute Croissant or Bagel, Add $1.50) (Gluten free Bread $2.25)",
    image: omelettesImg,
    items: [
      { name: "JUST EGGS (2 Eggs)", price: "9.99", description: "" },
      { name: "APPLEWOOD SMOKED BACON (4 Strips)", price: "13.99", description: "" },
      { name: "HAM (6 oz.)", price: "13.99", description: "" },
      { name: "PATTY SAUSAGE (2 Patties)", price: "12.99", description: "" },
      { name: "TURKEY SAUSAGE LINKS (4 Links)", price: "12.99", description: "" },
      { name: "CAJUN HOT LINKS", price: "11.99", description: "" },
      { name: "HAMBURGER PATTY (8oz.)", price: "10.99", description: "" },
      { name: "CHICKEN FRIED STEAK", price: "14.99", description: "" },
      { name: "CARNE ASADA", price: "15.99", description: "" },
      {
        name: "SIDE STREET SCRAMBLER",
        price: "14.99",
        description: "Chorizo, Spinach and Mushrooms",
      },
      {
        name: "VEGGIE SCRAMBLER",
        price: "14.99",
        description: "Mushrooms, Tomato, Bell Peppers, Onion, Avocado topped with Cheddar Cheese",
      },
      { name: "CHORIZO SCRAMBLER", price: "13.99", description: "" },
      { name: "MINCED HAM SCRAMBLER", price: "13.99", description: "" },
      { name: "MINCED HOT LINK SCRAMBLER", price: "12.99", description: "" },
      {
        name: "ABC SCRAMBLER",
        price: "15.99",
        description: "with Tomato, Grilled Onions and American Cheese",
      },
    ],
  },
  {
    id: 2,
    title: "Eggs Benedict",
    info: "On an English Muffin, topped with Hollandaise, served with Home Fries",
    image: omelettesImg,
    items: [
      {
        name: "TRADITIONAL (Ham)",
        price: "15.99",
        description: "On an English Muffin, topped with Hollandaise, served with Home Fries",
      },
      {
        name: "VEGGIE",
        price: "16.99",
        description: "Tomato, Sautéed Mushrooms, Spinach and Avocado",
      },
      { name: "CLUB", price: "17.99", description: "Turkey, Bacon and Tomato" },
      { name: "TURKEY AVOCADO", price: "16.99", description: "" },
      { name: "CRAB CAKE", price: "17.99", description: "(Add Avocado +$2.95)" },
      {
        name: "CORNED BEEF HASH",
        price: "17.99",
        description: "Corned Beef Hash, Mushrooms, Onion and Parsley",
      },
      {
        name: "COUNTRY BENEDICT",
        price: "16.99",
        description: "Fresh Baked Biscuits w/Boneless Chicken Thighs, Poached Eggs and Hollandaise",
      },
      { name: "CHORIZO BENEDICT", price: "16.99", description: "" },
      {
        name: "BIKER BENEDICT",
        price: "15.99",
        description: "Poached Eggs, Sausage Pattie on top of Biscuit Covered in Gravy",
      },
    ],
  },
  {
    id: 3,
    title: "Omelettes",
    info: "Made with Three Eggs, Served with Toast OR Biscuits ‘n‛ Gravy AND Home Fries (substitute Croissant or Bagel, Add 1.50), (Gluten Free Toast 2.25). Watching your cholesterol? All Omelettes can be made with no yolks! (Egg Beaters - add  $3.00)",
    image: omelettesImg,
    items: [
      {
        name: "SIDE STREET SPECIAL",
        price: "15.99",
        description: "Tri Tip, Jack Cheese, Ortega Chilies, Onions, Avocado and Salsa",
      },
      {
        name: "CALIFORNIA DREAMER",
        price: "15.99",
        description: "Bacon, Tomato, Guacamole, Cheddar and Jack Cheeses",
      },
      {
        name: "COBB",
        price: "14.99",
        description: "Chicken, Bacon, Green Onions, topped with Avocado, Tomato and Bleu Cheese",
      },
      {
        name: "VEGETARIAN",
        price: "14.99",
        description: "Mushroom. Tomato, Avocado, Onions, Bell Pepper and Cheddar Cheese",
      },
      { name: "SPINACH, MUSHROOM and JACK CHEESE", price: "13.99", description: "" },
      {
        name: "SPANISH",
        price: "13.99",
        description: "Avocado, Ortega Chilies, Salsa and Cheddar Cheese",
      },
      {
        name: "DENVER",
        price: "14.99",
        description: "Ham, Bell Pepper, Onion and Cheddar Cheese",
      },
      { name: "A.B.C.", price: "15.99", description: "Avocado, Bacon and Cheddar Cheese" },
      {
        name: "SAN FRANCISCO",
        price: "15.99",
        description: "Bacon and Pepper Jack, topped with Salsa, Avocado and Sour Cream",
      },
      {
        name: "CHILI VERDE",
        price: "15.99",
        description: "Pork, onion, topped w cilantro, pepperjack, sour cream and tomatillo sauce",
      },
    ],
  },
  {
    id: 4,
    title: "South of the Border",
    info: "",
    image: omelettesImg,
    items: [
      {
        name: "Erik's Omelette",
        price: "16.99",
        description:
          "Carne Asada, Cilantro and Onions, topped with Avocado, Sour Cream and Pepper Jack",
      },
      {
        name: "Breakfast Burrito",
        price: "11.99",
        description:
          "Scrambled Eggs, Choice of Bacon or Sausage, Cheddar Cheese, Onions, Ortega Chilies and Tomato. Flour Tortilla topped with sour cream on side. Served with Home Fries.",
      },
      {
        name: "Huevos Rancheros",
        price: "15.99",
        description:
          "Open-faced Flour Tortilla, with Refried Beans, Salsa, 2 Eggs, Jack and Cheddar Cheese, topped with Tomatoes, Sour Cream Green Onions and Guacamole. Served with Home Fries.",
      },
    ],
  },
  {
    id: 5,
    title: "Fan Favorites",
    info: "",
    image: omelettesImg,
    items: [
      {
        name: "Breakfast Club Sandwich",
        price: "13.99",
        description:
          "Scrambled Eggs with Bacon and Cheddar Cheese on a large English Muffin. Served with Home Fries.",
      },
      {
        name: "Corned Beef Hash",
        price: "15.99",
        description:
          "Homemade! With Sautéed Mushrooms, Onions Parsley, Sliced Tomatoes and 2 Eggs Any Style. Choice of Toast or Biscuits ‘n‛ Gravy.",
      },
      {
        name: "The Whiplash Sandwich",
        price: "14.99",
        description:
          "Fried Eggs with Bacon, Sausage and Cheddar Cheese n a choice of bread. Served with Home Fries.",
      },
    ],
  },
  {
    id: 6,
    title: "Waffles",
    info: "Made from scratch, Belgian style, lightly dusted with Powdered Sugar and Cinnamon",
    image: omelettesImg,
    items: [
      { name: "WAFFLE (Plain)", price: "9.99", description: "" },
      { name: "PECAN WAFFLE", price: "10.99", description: "" },
      { name: "BACON WAFFLE", price: "10.99", description: "" },
      { name: "STRAWBERRY WAFFLE", price: "11.99", description: "with Whipped Cream" },
      { name: "BANANA NUT WAFFLE", price: "10.99", description: "" },
      {
        name: "WAFFLE COMBO",
        price: "13.99",
        description: "served with 2 Eggs, Bacon or Sausage",
      },
      { name: "PECAN COMBO", price: "15.99", description: "" },
      { name: "BACON COMBO", price: "15.99", description: "" },
      { name: "STRAWBERRY WAFFLE COMBO", price: "15.99", description: "" },
      { name: "BANANA NUT WAFFLE COMBO", price: "15.99", description: "" },
      { name: "CHICKEN & WAFFLES", price: "13.99", description: "" },
    ],
  },
  {
    id: 7,
    title: "Pancakes",
    info: "",
    image: omelettesImg,
    items: [
      { name: "BUTTERMILK PANCAKES (2 LARGE)", price: "8.99", description: "" },
      { name: "BLUEBERRY PANCAKES", price: "9.99", description: "with Whipped Cream" },
      { name: "STRAWBERRY PANCAKES", price: "10.99", description: "with Whipped Cream" },
      { name: "BANANA NUT PANCAKES", price: "8.99", description: "" },
      { name: "7-GRAIN ALMOND GRANOLA PANCAKES (2)", price: "9.99", description: "" },
      { name: "CHOCOLATE CHIP PANCAKES (2)", price: "9.99", description: "" },
      { name: "SHORT STACK (3)", price: "8.99", description: "" },
      { name: "FRENCH TOAST", price: "9.99", description: "" },
      {
        name: "PANCAKE COMBO",
        price: "12.99",
        description: "served with 2 Eggs and Bacon or Sausage",
      },
      {
        name: "FRENCH TOAST COMBO",
        price: "12.99",
        description: "served with 2 Eggs and Bacon or Sausage",
      },
    ],
  },
  {
    id: 8,
    title: "Not So Hungry",
    info: "",
    image: omelettesImg,
    items: [
      { name: "CROISSANT", price: "5.99", description: "w/ Butter and Jelly" },
      { name: "BAGEL & CREAM CHEESE", price: "5.99", description: "" },
      { name: "OATMEAL", price: "5.99", description: "w/ Brown Sugar, Raisins and Milk" },
      { name: "FRUIT BOWL", price: "7.99", description: "" },
      { name: "GREEK YOGURT & FRUIT", price: "10.99", description: "" },
      { name: "GREEK YOGURT & FRUIT & GRANOLA", price: "11.99", description: "" },
      {
        name: "SUNRISE PARFAIT",
        price: "13.99",
        description: "Low-fat Yogurt with Fresh Fruit and Granola",
      },
    ],
  },
  {
    id: 9,
    title: "Side Orders",
    info: "",
    image: omelettesImg,
    items: [
      { name: "APPLEWOOD SMOKED BACON (4 Strips)", price: "6.99", description: "" },
      { name: "TURKEY SAUSAGE (4 Links)", price: "5.99", description: "" },
      { name: "SAUSAGE PATTY (2 Patties)", price: "5.99", description: "" },
      { name: "HAM", price: "6.99", description: "" },
      { name: "1 EGG", price: "2.25", description: "" },
      { name: "TORTILLA", price: "2.00", description: "" },
      { name: "TOAST", price: "2.00", description: "" },
      { name: "ENGLISH MUFFIN", price: "2.00", description: "" },
      { name: "CROISSANT", price: "2.99", description: "" },
      { name: "BAGEL", price: "2.99", description: "" },
      { name: "GARLIC TOAST", price: "1.50", description: "" },
      { name: "WHIPPED CREAM", price: "1.00", description: "" },
      { name: "ONION RINGS", price: "5.99", description: "" },
      { name: "BISCUIT", price: "2.25", description: "" },
      { name: "HOME FRIES", price: "3.50", description: "" },
      { name: "FRENCH FRIES", price: "4.99", description: "" },
      { name: "SWEET POTATO FRIES", price: "5.99", description: "" },
      { name: "POTATO SALAD or COLE SLAW", price: "3.25", description: "" },
      { name: "SIDE ONE OPEN BISCUIT TOPPED W GRAVY", price: "4.99", description: "" },
      { name: "COTTAGE CHEESE", price: "2.95", description: "" },
      { name: "HOLLANDAISE SAUCE", price: "2.50", description: "" },
      { name: "CREAM CHEESE", price: "1.25", description: "" },
      { name: "1/2 AVOCADO or GUACAMOLE", price: "2.95", description: "" },
      { name: "GRAVY", price: "2.50", description: "" },
      { name: "SOUR CREAM", price: "1.25", description: "" },
      { name: "SERRANO CHILIES", price: "1.50", description: "" },
      { name: "SIDE OF CORNED BEEF HASH", price: "6.99", description: "" },
      { name: "SIDE OF CHICKEN BREAST", price: "4.99", description: "" },
    ],
  },
];

const lunchItems = [
  {
    id: 1,
    title: "Sandwiches",
    info: "Most of our sandwiches are served on White, Wheat, Rye, Sourdough or 7-Grain Bread (gluten free bread +$2.25). Sub a Croissant or French Roll, or add Cheese +$1.50. All include your choice of French Fries, Cole Slaw, Potato Salad, Soup or Mixed Green Salad (add Onion Rings or Sweet Potato Fries +$1.50). WE USE ABF FRESH CHICKEN BREASTS.",
    image: omelettesImg,
    items: [
      {
        name: "ALBACORE TUNA SANDWICH",
        price: "13.99",
        description: "with Lettuce, Tomato, Avocado, and Swiss on Grilled Sourdough",
      },
      { name: "PATTY MELT", price: "13.99", description: "Beef Patty and Cheese" },
      {
        name: "REUBEN",
        price: "14.99",
        description: "Corned Beef, Swiss Cheese and Sauerkraut on Grilled Rye",
      },
      {
        name: "TRI-TIP SANDWICH",
        price: "14.99",
        description: "with Grilled Onions, Lettuce, Tomato, and Avocado on Ciabatta",
      },
      {
        name: "TURKEY MELT",
        price: "14.99",
        description: "Turkey, Bacon, Swiss and Avocado on Grilled Sourdough",
      },
      {
        name: "FRENCH DIP",
        price: "13.99",
        description: "Roast Beef and Swiss Cheese on French Roll served with Au Jus",
      },
      {
        name: "TUNA MELT",
        price: "13.99",
        description: "on Grilled Sourdough with Swiss and American Cheese",
      },
      {
        name: "TRIPLE DECKER CLUB",
        price: "14.99",
        description: "Turkey, Ham, Bacon, Lettuce, Tomato and Mayo on Toasted Wheat Bread",
      },
      {
        name: "GRILLED CHICKEN CLUB",
        price: "14.99",
        description:
          "Chicken Breast, Bacon, Tomato, Avocado, Lettuce and Swiss Cheese on Grilled Wheat",
      },
      {
        name: "CALIFORNIA MELT",
        price: "13.99",
        description: "Turkey, Avocado, Bacon and Jack Cheese on Grilled Sourdough",
      },
      {
        name: "TUNA AVOCADO SWISS MELT",
        price: "13.99",
        description: "on Grilled Sourdough",
      },
      {
        name: "REUBEN",
        price: "11.99",
        description: "Corned Beef or Turkey on Grilled Rye with Swiss Cheese and Sauerkraut",
      },
      {
        name: "BEEFEATER",
        price: "11.99",
        description: "Roast Beef on Grilled Sourdough with Ortega Chilies and Jack Cheese",
      },
      {
        name: "SUZANNE'S LUNCH",
        price: "13.99",
        description:
          "Grilled French Garlic Roll stuffed with Turkey, Jack Cheese, Ortega Chilies and Tomato",
      },
      {
        name: "GRILLED HAM and CHEESE",
        price: "9.99",
        description: "",
      },
      {
        name: "GRILLED CHEESE",
        price: "8.99",
        description: "",
      },
      {
        name: "BBQ TRI-TIP",
        price: "14.99",
        description: "on a French Roll",
      },
      {
        name: "FRENCH DIP",
        price: "14.99",
        description: "with Au Jus on a French Roll",
      },
      {
        name: "BEEF PHILLY",
        price: "15.99",
        description: "with Onions, Bell Pepper and Jack Cheese",
      },
      {
        name: "SIDE STREET CLUB",
        price: "13.99",
        description: "Turkey, Ham, Bacon, Swiss and American Cheese, Lettuce, Tomato and Mayo",
      },
      {
        name: "TURKEY SANDWICH",
        price: "9.99",
        description: "",
      },
      {
        name: "HAM SANDWICH",
        price: "9.99",
        description: "",
      },
      {
        name: "ROAST BEEF or CORNED BEEF",
        price: "10.99",
        description: "",
      },
      {
        name: "TUNA SALAD SANDWICH",
        price: "10.99",
        description: "",
      },
      {
        name: "CHICKEN SALAD SANDWICH",
        price: "10.99",
        description: "",
      },
      {
        name: "BACON, LETTUCE and TOMATO",
        price: "10.99",
        description: "(add Avocado +$2.95)",
      },
      {
        name: "VEGGIE SANDWICH",
        price: "12.99",
        description: "Lettuce, Sprouts, Avocado, Cucumber, Swiss Cheese and Tomato",
      },
      {
        name: "HEALTHY ROLL-UPS",
        price: "13.99",
        description:
          "Choice of Turkey, Chicken Salad, Tuna Salad, Roast Beef with Swiss Cheese, Avocado, Sprouts, Lettuce and Tomatoes Rolled in Whole Wheat Wrap with Brown Mustard and Mayo",
      },
      {
        name: "MALIBU CHICKEN SANDWICH",
        price: "14.99",
        description: "Chicken, Ham, Swiss, Avocado, Lettuce and Tomato",
      },
      {
        name: "CHICKEN PHILLY",
        price: "13.99",
        description: "with Onions, Bell Pepper and Jack Cheese",
      },
    ],
  },
  {
    id: 2,
    title: "Hamburgers",
    info: "All burgers are served with your choice of French Fries, Potato Salad, Cole Slaw, Soup, or Mixed Green Salad (Sub Onion Rings or Sweet Potato Fries +$1.00)",
    image: omelettesImg,
    items: [
      {
        name: "BURGER",
        price: "9.99",
        description: "(with Cheese +$1.50)",
      },
      {
        name: "ORTEGA JACK BURGER",
        price: "11.99",
        description: "",
      },
      {
        name: "CHEDDAR AVOCADO BURGER",
        price: "13.99",
        description: "",
      },
      {
        name: "GARDEN VEGGIE BURGER",
        price: "12.99",
        description: "Sprouts, Tomato, Onion and Avocado",
      },
      {
        name: "PATTY MELT (on Rye)",
        price: "11.99",
        description: "with American Cheese and Grilled Onion",
      },
      {
        name: "SIDE STREET BURGER",
        price: "14.99",
        description:
          "with Corned Beef, American and Swiss Cheese, Bacon, Avocado, Mushrooms and Grilled Onions",
      },
      {
        name: "HICKORY BURGER",
        price: "13.99",
        description: "Bacon, Jack Cheese, BBQ Sauce topped with an Onion Ring",
      },
      {
        name: "CALIFORNIA BURGER",
        price: "12.99",
        description: "Avocado and Sprouts",
      },
      {
        name: "SOURDOUGH MELT BURGER",
        price: "11.99",
        description: "with Tomato, Grilled Onions and American Cheese",
      },
    ],
  },
  {
    id: 3,
    title: "Soups and Salads",
    info: "Served with Garlic Toast and choice of dressing. (Sorry NO SOUP ON THE WEEKENDS)",
    image: omelettesImg,
    items: [
      {
        name: "SOUP OF THE DAY",
        price: "4.99/$5.99",
        description: "",
      },
      {
        name: "SOUP and Garden Salad",
        price: "8.99",
        description: "",
      },
      {
        name: "BOWL SOUP or SALAD and 1/2 SANDWICH",
        price: "8.99",
        description: "(Choice of Ham, Turkey, Tuna, Roast Beef or Chicken Salad)",
      },
      {
        name: "SIDE SALAD",
        price: "4.99",
        description: "(Accompanied with Meal - $2.50)",
      },
      {
        name: "GRILLED CHICKEN SALAD",
        price: "13.99",
        description:
          "Grilled Chicken Breast over Tossed Greens, Red Onion, Cucumber Slices, Tomatoes, Sliced Hard Boiled Egg",
      },
      {
        name: "CHEF SALAD",
        price: "14.99",
        description:
          "Ham and Turkey, Red Onion, Cheddar and Jack Cheese, Hard-Boiled Egg, Bacon, Tomatoes on a bed of Fresh Lettuce",
      },
      {
        name: "CHICKEN SALAD or TUNA SALAD",
        price: "13.99",
        description:
          "Generous Scoop of Homemade Tuna/Chicken Salad on Crisp Salad Greens, Red Onion, Tomato, Sliced Hard-Boiled Egg and Cucumber",
      },
      {
        name: "CAESAR SALAD",
        price: "10.99",
        description: "Add Chicken +$2.50",
      },
      {
        name: "SPINACH SALAD",
        price: "13.99",
        description:
          "Leaf Spinach topped with Crumbled Egg, Bacon, Mushrooms, Tomato. Served with Hot Bacon Dressing",
      },
      {
        name: "SHELLY'S CHINESE CHICKEN SALAD",
        price: "14.99",
        description: "Shredded Chicken Breast served over Tossed Greens, Chopped",
      },
    ],
  },
  {
    id: 4,
    title: "Sides",
    info: "",
    image: "",
    items: [
      { name: "French Fries", price: "5.99", description: "" },
      { name: "Fresh Fruit", price: "5.99", description: "" },
      { name: "Homemade Potato Salad", price: "5.99", description: "" },
      { name: "Mashed Potatoes", price: "5.99", description: "" },
      { name: "Coleslaw", price: "5.99", description: "" },
      { name: "Onion Rings", price: "6.99", description: "" },
      { name: "Cup of Soup", price: "6.99", description: "" },
      { name: "Cup of Chili", price: "6.99", description: "" },
    ],
  },
];

const drinkItems = [
  {
    id: 1,
    title: "Drinks",
    info: "",
    image: omelettesImg,
    items: [
      { name: "COFFEE", price: "3.50", description: "" },
      { name: "COLD BREW COFFEE", price: "4.25", description: "" },
      { name: "HOT TEA", price: "3.00", description: "" },
      { name: "ICED TEA", price: "3.00", description: "" },
      { name: "TROPICAL ICED TEA", price: "3.00", description: "" },
      { name: "SODA (One Refill)", price: "3.00", description: "" },
      { name: "LEMONADE", price: "3.00", description: "" },
      { name: "MILK", price: "3.50/4.00", description: "" },
      { name: "HOT CHOCOLATE", price: "3.90", description: "" },
      { name: "CHOCOLATE MILK", price: "3.00/4.25", description: "" },
      { name: "CRANBERRY JUICE", price: "3.25/4.99", description: "" },
      { name: "GRAPEFRUIT JUICE", price: "3.25/4.99", description: "" },
      { name: "ORANGE JUICE (fresh)", price: "3.99/4.99", description: "" },
      { name: "APPLE JUICE", price: "3.25/4.99", description: "" },
      { name: "TOMATO JUICE", price: "3.25/4.99", description: "" },
    ],
  },
];

export { breakfastItems, lunchItems, drinkItems };
