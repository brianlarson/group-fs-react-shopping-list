import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

 // ? ASK ABOUT ODD NEED FOR .jsx in file name
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {

  // Set state vars
  const [items, setItems] = useState([]);

  // Fetch items on load
  useEffect(() => {
    fetchItems();
  }, []);

  // Get items from db and show on DOM
  const fetchItems = () => { 
    axios({
      method: "GET",
      url: "/api/items"
    })
      .then((response) => {
        setItems(response.data);
    })
      .catch((error) => {
        console.log("Error with GET /api/items…", error);
    });
  }

  return (
    <div className="App">
      <Header />
      <main className="notice">
        <section>
          <h2>Add an Item</h2>
          <form>

            <label htmlFor="item">
              Item:
            </label>
            <input id="item" type="text" />
            
            <label htmlFor="quantity">
              Quantity:
            </label>
            <input id="quantity" type="text" />

            <label htmlFor="item">
              Unit:
            </label>
            <input id="unit" type="text" />
            <br /><br />
            <button>Save</button>

          </form>
        </section>
        <section>
          <h2>Shopping List</h2>
          <button>Reset</button>
          &nbsp; &nbsp;
          <button>Clear</button>
          <div>
            <div className="notice">
              <h3>Apples</h3>
              <p>5 lbs.</p>
              <button>Buy</button>
              &nbsp;&nbsp;
              <button>Remove</button>
            </div>           
            <div className="notice">
              <h3>Apples</h3>
              <p>5 lbs.</p>
              <button>Buy</button>
              &nbsp;&nbsp;
              <button>Remove</button>
            </div>           
            <div className="notice">
              <h3>Apples</h3>
              <p>5 lbs.</p>
              <button>Buy</button>
              &nbsp;&nbsp;
              <button>Remove</button>
            </div>           
            <div className="notice">
              <h3>Apples</h3>
              <p>5 lbs.</p>
              <button>Buy</button>
              &nbsp;&nbsp;
              <button>Remove</button>
            </div>           
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
