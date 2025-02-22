import React from "react";
import { specialItems } from "../data/menuItems";

const SpecialsPage = () => {
  return (
    <div className="page-container">
      <div className="specials-page">
        <h1>Specials</h1>
        {specialItems.map((category) => (
          <div key={category.id} className="subcategory-container">
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
    </div>
  );
};

export default SpecialsPage;
