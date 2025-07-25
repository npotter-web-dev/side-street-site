import { breakfast, lunch } from "../content/contentExport.js";

const breakfastItems = [
  {
    id: 1,
    title: "2 Egg Classics and Scramblers",
    info: "All Egg Breakfasts Served with Two Eggs, Home Fries, and Toast OR Biscuits 'n' Gravy. (Substitute croissant or bagel +$1.50) (Gluten-free toast +$2.95)",
    image: breakfast.chxSteak,
    items: [
      { name: "Just Eggs (2 Eggs)", price: "11.99", description: "" },
      { name: "Applewood Smoked Bacon (4 Strips)", price: "15.99", description: "" },
      { name: "Ham (6 oz.)", price: "15.99", description: "" },
      { name: "Patty Sausage (2 Patties)", price: "15.99", description: "" },
      { name: "Turkey Sausage Links (4 Links)", price: "15.99", description: "" },
      { name: "Cajun Hot Links", price: "15.99", description: "" },
      { name: "Hamburger Patty (8oz.)", price: "13.99", description: "" },
      { name: "Chicken Fried Steak", price: "16.99", description: "" },
      { name: "Carne Asada", price: "17.99", description: "" },
      {
        name: "Side Street Scrambler",
        price: "17.99",
        description: "Chorizo, Spinach and Mushrooms",
      },
      {
        name: "Veggie Scrambler",
        price: "15.99",
        description: "Mushrooms, Tomato, Bell Peppers, Onion, Avocado topped with Cheddar Cheese",
      },
      { name: "Chorizo Scrambler", price: "16.99", description: "" },
      { name: "Minced Ham Scrambler", price: "16.99", description: "" },
      { name: "Minced Hot Link Scrambler", price: "16.99", description: "" },
      {
        name: "Abc Scrambler",
        price: "17.99",
        description: "with Tomato, Grilled Onions and American Cheese",
      },
    ],
  },
  {
    id: 2,
    title: "Eggs Benedict",
    info: "On an English Muffin, topped with Hollandaise, served with Home Fries",
    image: breakfast.cbhBenny,
    items: [
      {
        name: "Traditional (Ham)",
        price: "18.99",
        description: "On an English Muffin, topped with Hollandaise, served with Home Fries",
      },
      {
        name: "Veggie",
        price: "19.99",
        description: "Tomato, Sautéed Mushrooms, Spinach and Avocado",
      },
      { name: "Club", price: "19.99", description: "Turkey, Bacon and Tomato" },
      { name: "Turkey Avocado", price: "19.99", description: "" },
      { name: "Crab Cake", price: "20.99", description: "(Add Avocado +$2.95)" },
      {
        name: "Corned Beef Hash",
        price: "20.99",
        description: "Corned Beef Hash, Mushrooms, Onion and Parsley",
      },
      {
        name: "Country Benedict",
        price: "20.99",
        description: "Fresh Baked Biscuits w/Boneless Chicken Thighs, Poached Eggs and Hollandaise",
      },
      { name: "Chorizo Benedict", price: "19.99", description: "" },
      {
        name: "Biker Benedict",
        price: "19.99",
        description: "Poached Eggs, Sausage Pattie on top of Biscuit Covered in Gravy",
      },
    ],
  },
  {
    id: 3,
    title: "Omelettes",
    info: "Made with Three Eggs, Served with Toast OR Biscuits ‘n‛ Gravy AND Home Fries (substitute croissant or bagel +$2.50), (Gluten-free toast +$2.95). Watching your cholesterol? All omelettes can be made with no yolks! (Egg Beaters +$3.00)",
    image: breakfast.omlette,
    items: [
      {
        name: "Side Street Special",
        price: "17.99",
        description: "Tri Tip, Jack Cheese, Ortega Chilies, Onions, Avocado and Salsa",
      },
      {
        name: "California Dreamer",
        price: "17.99",
        description: "Bacon, Tomato, Guacamole, Cheddar and Jack Cheeses",
      },
      {
        name: "Cobb",
        price: "17.99",
        description: "Chicken, Bacon, Green Onions, topped with Avocado, Tomato and Bleu Cheese",
      },
      {
        name: "Vegetarian",
        price: "15.99",
        description: "Mushroom. Tomato, Avocado, Onions, Bell Pepper and Cheddar Cheese",
      },
      { name: "Spinach, Mushroom and Jack Cheese", price: "16.99", description: "" },
      {
        name: "Spanish",
        price: "15.99",
        description: "Avocado, Ortega Chilies, Salsa and Cheddar Cheese",
      },
      {
        name: "Denver",
        price: "16.99",
        description: "Ham, Bell Pepper, Onion and Cheddar Cheese",
      },
      { name: "A.B.C.", price: "17.99", description: "Avocado, Bacon and Cheddar Cheese" },
      {
        name: "San Francisco",
        price: "17.99",
        description: "Bacon and Pepper Jack, topped with Salsa, Avocado and Sour Cream",
      },
      {
        name: "Chili Verde",
        price: "17.99",
        description: "Pork, onion, topped w cilantro, pepperjack, sour cream and tomatillo sauce",
      },
    ],
  },
  {
    id: 4,
    title: "South of the Border",
    info: "",
    image: "",
    items: [
      {
        name: "Erik's Omelette",
        price: "19.99",
        description:
          "Carne Asada, Cilantro and Onions, topped with Avocado, Sour Cream and Pepper Jack",
      },
      {
        name: "Breakfast Burrito",
        price: "14.99",
        description:
          "Scrambled Eggs, Choice of Bacon or Sausage, Cheddar Cheese, Onions, Ortega Chilies and Tomato. Flour Tortilla topped with sour cream on side. Served with Home Fries.",
      },
      {
        name: "Huevos Rancheros",
        price: "18.99",
        description:
          "Open-faced Flour Tortilla, with Refried Beans, Salsa, 2 Eggs, Jack and Cheddar Cheese, topped with Tomatoes, Sour Cream Green Onions and Guacamole. Served with Home Fries.",
      },
    ],
  },
  {
    id: 5,
    title: "Fan Favorites",
    info: "",
    image: "",
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
          "Fried Eggs with Bacon, Sausage and Cheddar Cheese on a choice of bread. Served with Home Fries.",
      },
    ],
  },
  {
    id: 6,
    title: "Waffles",
    info: "Made From Scratch, Belgian Style, Lightly Dusted With Powdered Sugar and Cinnamon. Combos Served With 2 Eggs & Bacon or Sausage.",
    image: breakfast.bananaNutWaffle,
    items: [
      { name: "Waffle (Plain)", price: "12.99", description: "" },
      { name: "Pecan Waffle", price: "13.99", description: "" },
      { name: "Bacon Waffle", price: "13.99", description: "" },
      { name: "Strawberry Waffle", price: "13.99", description: "with Whipped Cream" },
      { name: "Banana Nut Waffle", price: "13.99", description: "" },
      { name: "Waffle Combo", price: "16.99", description: "" },
      { name: "Pecan Waffle Combo", price: "18.99", description: "" },
      { name: "Bacon Waffle Combo", price: "18.99", description: "" },
      { name: "Strawberry Waffle Combo", price: "18.99", description: "" },
      { name: "Banana Nut Waffle Combo", price: "18.99", description: "" },
      { name: "Chicken & Waffles", price: "15.99", description: "" },
    ],
  },
  {
    id: 7,
    title: "Pancakes",
    info: "Combos Served With 2 Eggs & Bacon or Sausage.",
    image: breakfast.pancakes,
    items: [
      { name: "Buttermilk Pancakes (2 Large)", price: "11.99", description: "" },
      { name: "Blueberry Pancakes", price: "12.99", description: "with Whipped Cream" },
      { name: "Strawberry Pancakes", price: "12.99", description: "with Whipped Cream" },
      { name: "Banana Nut Pancakes", price: "12.99", description: "" },
      { name: "7-Grain Granola Pancakes (2)", price: "11.99", description: "" },
      { name: "Chocolate Chip Pancakes", price: "12.99", description: "" },
      { name: "Gluten Free Pancakes", price: "13.99", description: "" },
      { name: "Pancake Combo", price: "15.99", description: "" },
      { name: "Blueberry Pancake Combo", price: "16.99", description: "" },
      { name: "Strawberry Pancake Combo", price: "17.99", description: "" },
      { name: "Banana Nut Pancake Combo", price: "16.99", description: "" },
      { name: "7-Grain Pancake Combo", price: "15.99", description: "" },
      { name: "Chocolate Chip Pancake Combo", price: "16.99", description: "" },
      { name: "Gluten Free Pancake Combo", price: "17.99", description: "" },
    ],
  },
  {
    id: 8,
    title: "French Toast",
    info: "Lightly dusted with Powdered Sugar and Cinnamon. Watching your cholesterol? All French Toast can be made with no yolks! Combos Served With 2 Eggs & Bacon or Sausage.",
    image: "",
    items: [
      { name: "French Toast (3 Slices)", price: "12.99", description: "" },
      { name: "Strawberry French Toast", price: "13.99", description: "with Whipped Cream" },
      { name: "Banana Nut French Toast", price: "13.99", description: "" },
      { name: "Gluten Free French Toast", price: "13.99", description: "" },
      { name: "French Toast Combo", price: "16.99", description: "" },
      { name: "Blueberry French Toast Combo", price: "17.99", description: "" },
      { name: "Strawberry French Toast Combo", price: "17.99", description: "" },
      { name: "Banana Nut French Toast Combo", price: "17.99", description: "" },
      { name: "Gluten Free French Toast Combo", price: "18.99", description: "" },
    ],
  },
  {
    id: 9,
    title: "Not So Hungry?",
    info: "",
    image: "",
    items: [
      {
        name: "Hot Oatmeal",
        price: "8.99",
        description: "Served with raisins, brown sugar, milk and choice of toast",
      },
      {
        name: "Biscuits 'n' Gravy",
        price: "8.99",
        description: "Two open biscuits topped with gravy. With Home Fries - $11.99",
      },
      { name: "Mixed Fresh Fruit", price: "6.99/$8.99", description: "" },
      {
        name: "Fresh Fruit Platter",
        price: "14.99",
        description: "Served with cottage cheese and granola",
      },
    ],
  },
  {
    id: 10,
    title: "Side Orders",
    info: "",
    image: "",
    items: [
      { name: "Applewood Smoked Bacon (4 Strips)", price: "7.99", description: "" },
      { name: "Turkey Sausage (4 Links)", price: "7.99", description: "" },
      { name: "Sausage Patty (2 Patties)", price: "7.99", description: "" },
      { name: "Ham", price: "8.99", description: "" },
      { name: "1 Egg", price: "3.75", description: "" },
      { name: "Tortilla", price: "2.00", description: "" },
      { name: "Toast", price: "2.95", description: "" },
      { name: "Garlic Toast", price: "2.50", description: "" },
      { name: "English Muffin", price: "2.75", description: "" },
      { name: "Biscuit", price: "3.25", description: "" },
      { name: "Croissant", price: "4.25", description: "" },
      { name: "Bagel", price: "4.25", description: "" },
      { name: "Side One Open Biscuit Topped With Gravy", price: "5.99", description: "" },
      { name: "Gravy", price: "3.00", description: "" },
      { name: "Whipped Cream", price: "1.50", description: "" },
      { name: "Hollandaise Sauce", price: "3.25", description: "" },
      { name: "Cream Cheese", price: "1.50", description: "" },
      { name: "Cottage Cheese", price: "3.25", description: "" },
      { name: "Sour Cream", price: "1.50", description: "" },
      { name: "1/2 Avocado or Guacamole", price: "2.95", description: "" },
      { name: "Potato Salad or Cole Slaw", price: "4.25", description: "" },
      { name: "Onion Rings", price: "8.99", description: "" },
      { name: "Home Fries", price: "3.50", description: "" },
      { name: "French Fries", price: "5.99", description: "" },
      { name: "Sweet Potato Fries", price: "8.99", description: "" },
      { name: "Serrano Chilies", price: "1.95", description: "" },
      { name: "Side of Corned Beef Hash", price: "9.99", description: "" },
      { name: "Side of Chicken Breast", price: "6.99", description: "" },
    ],
  },
];

const lunchItems = [
  {
    id: 1,
    title: "Sandwiches",
    info: "Most of our sandwiches are served on White, Wheat, Rye, Sourdough or 7-Grain Bread (Gluten-free bread +$2.95). Sub a Croissant or French Roll, or add Cheese +$2.50. All include your choice of French Fries, Cole Slaw, Potato Salad, Soup or Mixed Green Salad (Onion Rings or Sweet Potato Fries +$2.50). WE USE ABF FRESH CHICKEN BREASTS.",
    image: "",
    items: [
      {
        name: "Side Street Club",
        price: "15.99",
        description: "Turkey, Ham, Bacon, Swiss and American Cheese, Lettuce, Tomato and Mayo",
      },
      {
        name: "Reuben",
        price: "14.99",
        description: "Corned Beef or Turkey on Grilled Rye with Swiss Cheese and Sauerkraut",
      },
      { name: "Turkey Sandwich", price: "11.99", description: "" },
      { name: "Ham Sandwich", price: "11.99", description: "" },
      { name: "Roast Beef or Corned Beef", price: "12.99", description: "" },
      { name: "Chicken Salad Sandwich", price: "12.99", description: "" },
      {
        name: "Malibu Chicken Sandwich",
        price: "16.99",
        description: "Chicken, Ham, Swiss, Avocado, Lettuce and Tomato",
      },
      { name: "Bacon, Lettuce and Tomato", price: "13.99", description: "(add Avocado +$2.95)" },
      {
        name: "Veggie Sandwich",
        price: "14.99",
        description: "Lettuce, Sprouts, Avocado, Cucumber, Swiss Cheese and Tomato",
      },
      {
        name: "Healthy Roll-Ups",
        price: "16.99",
        description:
          "Choice of Turkey, Chicken Salad, Tuna Salad, Roast Beef with Swiss Cheese, Avocado, Sprouts, Lettuce and Tomatoes Rolled in Whole Wheat Wrap with Brown Mustard and Mayo",
      },
      // Fish
      {
        name: "Albacore Tuna Sandwich",
        price: "14.99",
        description: "with Lettuce, Tomato, Avocado, and Swiss on Grilled Sourdough",
      },
      { name: "Tuna Salad Sandwich", price: "12.99", description: "" },
      {
        name: "Tuna Melt",
        price: "14.99",
        description: "on Grilled Sourdough with Swiss and American Cheese",
      },
      { name: "Tuna Avocado Swiss Melt", price: "15.99", description: "on Grilled Sourdough" },

      // Hot

      {
        name: "Suzanne's Lunch",
        price: "15.99",
        description:
          "Grilled French Garlic Roll stuffed with Turkey, Jack Cheese, Ortega Chilies and Tomato",
      },
      { name: "Grilled Ham and Cheese", price: "12.99", description: "" },
      { name: "Grilled Cheese", price: "11.99", description: "" },
      {
        name: "Turkey Melt",
        price: "15.99",
        description: "Turkey, Bacon, Swiss and Avocado on Grilled Sourdough",
      },
      {
        name: "California Melt",
        price: "15.99",
        description: "Turkey, Avocado, Bacon and Jack Cheese on Grilled Sourdough",
      },
      { name: "Patty Melt", price: "14.99", description: "Beef Patty and Cheese" },
      {
        name: "Beefeater",
        price: "14.99",
        description: "Roast Beef on Grilled Sourdough with Ortega Chilies and Jack Cheese",
      },
      {
        name: "French Dip",
        price: "16.99",
        description: "Roast Beef and Swiss Cheese on French Roll served with Au Jus",
      },
      { name: "BBQ Tri-Tip", price: "16.99", description: "on a French Roll" },
      {
        name: "Beef Philly",
        price: "18.99",
        description: "with Onions, Bell Pepper and Jack Cheese",
      },
      {
        name: "Chicken Philly",
        price: "16.99",
        description: "with Onions, Bell Pepper and Jack Cheese",
      },
    ],
  },
  {
    id: 2,
    title: "Hamburgers",
    info: "All burgers are served with your choice of French Fries, Potato Salad, Cole Slaw, Soup, or Mixed Green Salad (Sub Onion Rings or Sweet Potato Fries +$2.50)",
    image: "",
    items: [
      { name: "Burger", price: "12.99", description: "(with Cheese +$2.50)" },
      { name: "Ortega Jack Burger", price: "14.99", description: "" },
      { name: "Cheddar Avocado Burger", price: "15.99", description: "" },
      {
        name: "Garden Veggie Burger",
        price: "14.99",
        description: "Sprouts, Tomato, Onion and Avocado",
      },
      {
        name: "Patty Melt (on Rye)",
        price: "14.99",
        description: "with American Cheese and Grilled Onion",
      },
      {
        name: "Side Street Burger",
        price: "17.99",
        description:
          "with Corned Beef, American and Swiss Cheese, Bacon, Avocado, Mushrooms and Grilled Onions",
      },
      {
        name: "Hickory Burger",
        price: "15.99",
        description: "Bacon, Jack Cheese, BBQ Sauce topped with an Onion Ring",
      },
      { name: "California Burger", price: "14.99", description: "Avocado and Sprouts" },
      {
        name: "Sourdough Melt Burger",
        price: "14.99",
        description: "with Tomato, Grilled Onions and American Cheese",
      },
    ],
  },
  {
    id: 3,
    title: "Soups and Salads",
    info: "Served with Garlic Toast and choice of dressing. (Sorry NO SOUP ON THE WEEKENDS)",
    image: "",
    items: [
      { name: "Soup of the Day", price: "5.99/$7.99", description: "" },
      { name: "Soup and Garden Salad", price: "9.99", description: "" },
      {
        name: "Bowl Soup or Salad and 1/2 Sandwich",
        price: "10.99",
        description: "(Choice of Ham, Turkey, Tuna, Roast Beef or Chicken Salad)",
      },
      { name: "Side Salad", price: "4.99", description: "(Accompanied with Meal - $2.50)" },
      {
        name: "Grilled Chicken Salad",
        price: "16.99",
        description:
          "Grilled Chicken Breast over Tossed Greens, Red Onion, Cucumber Slices, Tomatoes, Sliced Hard Boiled Egg",
      },
      {
        name: "Chef Salad",
        price: "16.99",
        description:
          "Ham and Turkey, Red Onion, Cheddar and Jack Cheese, Hard-Boiled Egg, Bacon, Tomatoes on a bed of Fresh Lettuce",
      },
      {
        name: "Chicken Salad or Tuna Salad",
        price: "15.99",
        description:
          "Generous Scoop of Homemade Tuna/Chicken Salad on Crisp Salad Greens, Red Onion, Tomato, Sliced Hard-Boiled Egg and Cucumber",
      },
      { name: "Caesar Salad", price: "12.99", description: "Add Chicken +$3.00" },
      {
        name: "Spinach Salad",
        price: "13.99",
        description:
          "Leaf Spinach topped with Crumbled Egg, Bacon, Mushrooms, Tomato. Served with Hot Bacon Dressing",
      },
      {
        name: "Chinese Chicken Salad",
        price: "17.99",
        description: "Shredded Chicken Breast served over Tossed Greens, Chopped",
      },
      {
        name: "Taco Salad",
        price: "17.99",
        description:
          "Refried Beans topped with Lettuce, Beef or Chicken, Cheddar Cheese, Tomatoes, Guacamole, Sour Cream and Salsa in a crispy Tortilla Shell",
      },
      {
        name: "Cobb Salad",
        price: "17.99",
        description:
          "Salad Greens topped with Chicken, Bacon, Egg, Green Onions, Diced Tomatoes, Avocado and Bleu Cheese Crumbles",
      },
    ],
  },
  {
    id: 4,
    title: "Sides",
    info: "",
    image: "",
    items: [
      { name: "French Fries", price: "6.99", description: "" },
      { name: "Fresh Fruit", price: "7.99", description: "" },
      { name: "Homemade Potato Salad", price: "4.99", description: "" },
      { name: "Coleslaw", price: "4.99", description: "" },
      { name: "Onion Rings", price: "8.99", description: "" },
      { name: "Cup of Soup", price: "6.99", description: "" },
    ],
  },
];

const drinkItems = [
  {
    id: 1,
    title: "Drinks",
    info: "",
    image: "",
    items: [
      { name: "Coffee", price: "3.95", description: "" },
      { name: "Cold Brew Coffee", price: "5.25", description: "" },
      { name: "Hot Tea", price: "3.75", description: "" },
      { name: "Iced Tea", price: "3.75", description: "" },
      { name: "Tropical Iced Tea", price: "3.75", description: "" },
      { name: "Soda (One Refill)", price: "3.00", description: "" },
      { name: "Lemonade", price: "3.75", description: "" },
      { name: "Milk", price: "3.75/4.25", description: "" },
      { name: "Hot Chocolate", price: "4.95", description: "" },
      { name: "Chocolate Milk", price: "4.25/5.25", description: "" },
      { name: "Cranberry Juice", price: "4.25/5.25", description: "" },
      { name: "Grapefruit Juice", price: "4.25/5.25", description: "" },
      { name: "Orange Juice (Fresh)", price: "5.99/6.99", description: "" },
      { name: "Apple Juice", price: "4.25/5.25", description: "" },
      { name: "Tomato Juice", price: "4.25/5.25", description: "" },
    ],
  },
];

const specialItems = [
  {
    id: 1,
    title: "",
    info: "",
    image: "",
    items: [
      {
        name: "Spanish Fritatta",
        price: "12.99/ combo $17.99",
        description:
          "Chopped chorizo patty, ortega chiles, red onion, tomato, spinach. Topped with cilantro and cotija cheese.",
      },
      {
        name: "Shelby's Waffle",
        price: "19.99",
        description:
          "Chocolate chip waffle topped with strawberries, whipped cream, powdered sugar, and cinnamon.",
      },
      {
        name: "Spicy Link Omlette",
        price: "18.99",
        description: "Chopped hot link, grilled onion, topped with pepperjack and avocado.",
      },
      {
        name: "Guacamole Serrano Burger",
        price: "17.99",
        description: "Burger topped with pepperjack, guacamole, grilled serranos, and bacon.",
      },
      {
        name: "Spicy Chicken Wrap",
        price: "16.99",
        description:
          "Spicy fried chicken, lettuce, tomato, avocado, cheddar cheese, and chipotle aoli. All wrapped up in a flour tortilla.",
      },
      {
        name: "Strawberry Chicken Salad",
        price: "15.99",
        description:
          "Grilled chicken, chopped strawberries, avocado, and feta cheese. Served with a dressing of your choice.",
      },
    ],
  },
];

export { breakfastItems, lunchItems, drinkItems, specialItems };
