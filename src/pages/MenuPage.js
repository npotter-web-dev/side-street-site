import React from "react";
import { breakfastItems, lunchItems, drinkItems } from "../data/menuItems";

// Consider compartmentalizing

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Welcome to Side Street Cafe!</h1>
      <div className="menu-top">
        <div className="menu-nav">
          <a href="#breakfast">Breakfast</a>
          <a href="#lunch">Lunch</a>
          <a href="#drinks">Drinks</a>
        </div>

        <p>
          MAXIMUM OF 3 DIVIDED CHECKS PER TABLE.
          <br />
          WE RESERVE THE RIGHT TO REFUSE SERVICE TO ANYONE.
        </p>
        <p>
          Kid's Menu Available
          <br />
          Take Out? Call (805) 499-9323
        </p>
      </div>

      {/* BREAKFAST */}
      <div id="breakfast" className="category">
        <section className="category-title">
          <hr />
          <h2>Breakfast - Served All Day</h2>
          <hr />
        </section>

        {breakfastItems.map((category) => (
          <div key={category.id} className="subcategory">
            <div className="subcategory-image">
              <img src={category.image} />
            </div>
            <div>
              <div className="subcategory-title">
                <h2>{category.title}</h2>
                <p>{category.info}</p>
              </div>
              <div className="items-container">
                {/* Map over items in each category */}
                {category.items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-row">
                      <h3>{item.name}</h3>
                    </div>
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
      <div id="lunch" className="category">
        <section className="category-title">
          <hr />
          <h2>Let's Do Lunch!</h2>
          <hr />
        </section>

        {lunchItems.map((category) => (
          <div key={category.id} className="subcategory">
            <div className="subcategory-image">
              <img src={category.image} />
            </div>
            <div>
              <div className="subcategory-title">
                <h2>{category.title}</h2>
                <p>{category.info}</p>
              </div>
              <div className="items-container">
                {/* Map over items in each category */}
                {category.items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-row">
                      <h3>{item.name}</h3>
                    </div>
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
      <div id="drinks" className="category">
        <section className="category-title">
          <hr />
          <h2>Drinks</h2>
          <hr />
        </section>
        {drinkItems.map((category) => (
          <div key={category.id} className="subcategory">
            <div className="subcategory-image">
              <img src={category.image} />
            </div>
            <div>
              <div className="items-container">
                {/* Map over items in each category */}
                {category.items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-row">
                      <h3>{item.name}</h3>
                    </div>
                    <p className="item-info">{item.description}</p>
                    <p className="item-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-bottom">
        <div className="menu-nav">
          <a href="#breakfast">Breakfast</a>
          <a href="#lunch">Lunch</a>
          <a href="#drinks">Drinks</a>
        </div>
        <p>
          MAXIMUM OF 3 DIVIDED CHECKS PER TABLE.
          <br />
          WE RESERVE THE RIGHT TO REFUSE SERVICE TO ANYONE.
        </p>
        <p>
          Kid's Menu Available
          <br />
          Take Out? Call (805) 499-9323
        </p>
      </div>
    </div>
  );
};

export default MenuPage;
