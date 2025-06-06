import React from "react";
import ItemList from "../../Data/ItemList";
import "./Home.css";

const Home = ({ addItemInCart, error, fetchedItems }) => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Biggest Sale of the Season!</h1>
        <p>Get up to 50% off on all products</p>
      </section>

      <section className="items-section">
        <ItemList fetchedItems={fetchedItems} error={error} addItemInCart={addItemInCart} />
      </section>

    </div>
  );
};

export default Home;
