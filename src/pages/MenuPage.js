import React, { useRef } from "react";
import { breakfastItems, lunchItems, drinkItems } from "../data/menuItems";
import MenuSwiper from "../components/MenuSwiper";

const MenuPage = () => {
  // Handle menu page navigation (scrolling to positions)
  const scrollTop = useRef(null);
  const scrollBreakfast = useRef(null);
  const scrollLunch = useRef(null);
  const scrollDrinks = useRef(null);

  const scrollToElement = (menuScrolls) => {
    menuScrolls.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Aligns the element to the top
    });
  };

  return (
    <div className="page-container">
      <div className="menu-page">
        <div className="menu-gallery">
          <MenuSwiper />
        </div>

        <div className="menu-top" ref={scrollTop}>
          <div className="menu-nav">
            <a onClick={() => scrollToElement(scrollBreakfast)}>Breakfast</a>
            <a onClick={() => scrollToElement(scrollLunch)}>Lunch</a>
            <a onClick={() => scrollToElement(scrollDrinks)}>Drinks</a>
          </div>

          <p>
            MAXIMUM OF 3 DIVIDED CHECKS PER TABLE.
            <br />
            Kid's Menu Available
            <br />
            Take Out? Call (805) 499-9323
          </p>
          <p className="tiny-script">(No Online Orders)</p>
        </div>

        {/* BREAKFAST */}
        <div className="category" ref={scrollBreakfast}>
          <section className="category-title">
            <hr />
            <h2>Breakfast - Served All Day</h2>
            <hr />
          </section>

          {breakfastItems.map((category) => (
            <div key={category.id} className="subcategory-container">
              <div className="subcategory-image">
                <img src={category.image} load="lazy" />
              </div>
              <div className="subcategory-box">
                <div className="subcategory-title">
                  <h2>{category.title}</h2>
                  <p>{category.info}</p>
                </div>
                <div className="items-container">
                  {/* Map over items in each category */}
                  {category.items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-info">{item.description}</p>
                      <p className="item-price">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LUNCH */}
        <div className="category" ref={scrollLunch}>
          <section className="category-title">
            <hr />
            <h2>Let's Do Lunch!</h2>
            <hr />
          </section>

          {lunchItems.map((category) => (
            <div key={category.id} className="subcategory-container">
              <div className="subcategory-image">
                <img src={category.image} load="lazy" />
              </div>
              <div className="subcategory-box">
                <div className="subcategory-title">
                  <h2>{category.title}</h2>
                  <p>{category.info}</p>
                </div>
                <div className="items-container">
                  {/* Map over items in each category */}
                  {category.items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-info">{item.description}</p>
                      <p className="item-price">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DRINKS */}
        <div className="category" ref={scrollDrinks}>
          <section className="category-title">
            <hr />
            <h2>Drinks</h2>
            <hr />
          </section>
          {drinkItems.map((category) => (
            <div key={category.id} className="subcategory-container">
              <div className="drink-container">
                {/* Map over items in each category */}
                {category.items.map((item, index) => (
                  <div key={index} className="drink">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-bottom">
          <a onClick={() => scrollToElement(scrollTop)}>Back to the top</a>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
