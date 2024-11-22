import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

// ? ASK ABOUT ODD NEED FOR .jsx in file name
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {

  // Set state vars
  const [items, setItems] = useState([]);
  const [newName, setNewName] = useState("");
  const [newQuantity, setNewQty] = useState("");
  const [newUnit, setNewUnit] = useState("");

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
        console.log('/api/items GET request sent successfully…', response.data);
        setItems(response.data);
        console.log('AFTER setItems(), items is:', items);
    })
      .catch((error) => {
        console.log("Error with GET /api/items…", error);
    });
  }

  // Add a new item to the db and show on DOM
  const addItem = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "/api/items",
      data: { name: newName, quantity: newQuantity, unit: newUnit }
    })
      .then((response) => {
        console.log('/api/items POST request sent successfully…', response.data);
        
        // Update state of items arr and re-render to DOM with fetch func
        fetchItems();
        console.log('AFTER addItem(), items is:', items);

        // Clear inputs
        setNewName("");
        setNewQty("");
        setNewUnit("");
    })
      .catch((error) => {
        console.log("Error with POST /api/items…", error);
    });
    
  }

  console.log('items is now before returning...', items);

  return (
    <div className="App notice">
      
      <Header />

      <main>
      
        {/* Form component */}
        <section>
          <h2>Add an Item</h2>
          <form>
            <label htmlFor="item">Item:</label>
            <input 
              onChange={(event) => setNewName(event.target.value)} 
              value={newName}
              id="item" 
              type="text"
            />
            
            <label htmlFor="quantity">Quantity:</label>
            <input 
              onChange={(event) => setNewQty(event.target.value)} 
              value={newQuantity}
              id="quantity" 
              type="text"
            />

            <label htmlFor="item">Unit:</label>
            <input 
              onChange={(event) => setNewUnit(event.target.value)} 
              value={newUnit}
              id="unit" 
              type="text"
            />
            <br /><br />
            <button 
              onClick={(event) => addItem(event)}
              type="submit"
            >
              Save
            </button>
          </form>
        </section>

        {/* Shopping list component */}
        <section>
          <h2>Shopping List</h2>
          <button>Reset</button>
          &nbsp; &nbsp;
          <button>Clear</button>
          <div>
            {/* Item child component */}
            {
              Array.isArray(items) && items.map((item) => {
                return (
                  <div key={item.id} className="notice">
                    <h3>{item.name}</h3>
                    <p>{item.quantity} {item.unit}</p>
                    <button>Buy</button>
                    &nbsp;&nbsp;
                    <button>Remove</button>
                  </div>
                );
              })
            }
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
