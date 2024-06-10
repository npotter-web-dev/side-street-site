const breakfastItems = [
  {
    id: 1,
    title: "2 Egg Classics and Scramblers",
    info: "All Egg Breakfasts Served with Two Eggs, Home Fries, and Toast OR Biscuits 'n' Gravy. (Substitute Croissant or Bagel, Add $1.50) (Gluten free Bread $2.25)",
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
    info: "Made with Three Eggs, Served with Toast OR Biscuits ‘n‛ Gravy AND Home Fries (substitute Croissant or Bagel, Add 1.50), (Gluten Free Toast 2.25).Watching your cholesterol? All Omelettes can be made with no yolks! (Egg Beaters - add  $3.00)",
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
    title: "Waffles",
    info: "Made from scratch, Belgian style, lightly dusted with Powdered Sugar and Cinnamon",
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
    id: 6,
    title: "Pancakes",
    info: "",
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
    id: 7,
    title: "Not So Hungry",
    info: "",
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
    id: 8,
    title: "Side Orders",
    info: "",
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
  {
    id: 9,
    title: "Fan Favorites",
    info: "",
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
];

const lunchItems = [
  {
    id: 1,
    title: "Sandwiches",
    info: "Served with your choice of One Side: Homemade Potato Salad, Cole Slaw, Cottage Cheese, Fresh Fruit, or French Fries",
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
    ],
  },
  {
    id: 2,
    title: "Hot Sandwiches",
    info: "Served with Mashed Potatoes, Vegetables and Gravy",
    items: [
      {
        name: "HOT TURKEY SANDWICH",
        price: "14.99",
        description: "",
      },
      {
        name: "HOT BEEF SANDWICH",
        price: "14.99",
        description: "",
      },
    ],
  },
  {
    id: 3,
    title: "Burgers",
    info: "Served with your choice of One Side: Homemade Potato Salad, Cole Slaw, Cottage Cheese, Fresh Fruit, or French Fries",
    items: [
      {
        name: "Side Street Burger",
        price: "14.99",
        description: "Avocado, Bacon, Lettuce, Tomato, American Cheese, Pickles, and Onions",
      },
      {
        name: "TRADITIONAL BURGER",
        price: "11.99",
        description:
          "with Lettuce, Tomato, Onion, Pickles and 1000 Island Dressing (Add Cheese $1.00)",
      },
      {
        name: "CALIFORNIA BURGER",
        price: "12.99",
        description: "Avocado, Lettuce, Tomato and Swiss Cheese",
      },
      {
        name: "BACON CHEESEBURGER",
        price: "12.99",
        description: "American Cheese, Lettuce, Tomato and Bacon",
      },
      {
        name: "MUSHROOM BURGER",
        price: "12.99",
        description: "Swiss Cheese, Grilled Mushrooms, Lettuce, Tomato and Onion",
      },
      {
        name: "GUACAMOLE BACON BURGER",
        price: "14.99",
        description: "Pepper Jack Cheese, Bacon, Lettuce, Tomato, Guacamole, Pickles and Onion",
      },
      {
        name: "ORTEGA BURGER",
        price: "12.99",
        description: "Jack Cheese, Ortega Chile, Lettuce and Tomato",
      },
    ],
  },
  {
    id: 4,
    title: "Sides",
    info: "",
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
    items: [
      { name: "COFFEE", price: "3.50", description: "" },
      { name: "COLD BREW COFFEE", price: "4.25", description: "" },
      { name: "HOT TEA", price: "3.00", description: "" },
      { name: "ICED TEA", price: "3.00", description: "" },
      { name: "TROPICAL ICED TEA", price: "3.00", description: "" },
      { name: "SODA (One Refill)", price: "3.00", description: "" },
      { name: "LEMONADE", price: "3.00", description: "" },
      { name: "MILK", price: "3.50/4.00", description: "" },
      { name: "HOT CHOCOLATE", price: "3.90", description: "with Whipped Cream" },
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
