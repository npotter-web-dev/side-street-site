import React from "react";
import { breakfastItems, lunchItems, drinkItems } from "../data/menuItems";

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

        {/* 2 Egg Classics and Scramblers */}
        <div className="subcategory">
          <h2 className="subcategory-title">{}</h2>
          <p className="subcategory-info">{}</p>
          <div className="item-row">
            <div className="item-list">{}</div>
          </div>
        </div>

        {/* Eggs Benedict */}
        <div className="subcategory">
          <h2 className="subcategory-title"></h2>
        </div>

        {/* Omelettes */}

        {/* South of the Border */}

        {/* Waffles */}

        {/* Pancakes */}

        {/* French Toast */}

        {/* Not So Hungry */}

        {/* Side Orders */}

        {/* Fan Favorites */}
      </div>

      {/* LUNCH */}
      <div id="lunch" className="category">
        <section className="category-title">
          <hr />
          <h2>Let's Do Lunch!</h2>
          <hr />
        </section>

        {/* Burgers */}

        {/* Sandwiches */}

        {/* Soups and Salads */}
      </div>

      {/* DRINKS */}
      <div id="drinks" className="category">
        <section className="category-title">
          <hr />
          <h2>Drinks</h2>
          <hr />
        </section>

        <div>{}</div>
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
