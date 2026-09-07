import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*  JSX RULES 
1. JSX works like HTML, but we can enter "JS mode" by using {} (for text or attributes)
2. We can place JS expressions inside {} e.g. reference variables, create arrays or objects, [].map, ternary operator
3. Statements are not allowed e.g. - if/else, for, switch 
4.JSX produces a javascript expression
*/

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// creating component

function Header() {
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const NumPizza = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {NumPizza > 0 ? (
        // when rendering a list use the "React.Fragment"
        // <> </> is just a shorter version of "React.Fragment"
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone, all organic, all delicious.
          </p>

          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. PLease comse back later :)</p>
      )}

      {/* <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName=' pizzas/spinaci.jpg'
        price={10}
      />
      <Pizza
        name={'Pizza funghi'}
        ingredients='Tomato, mushroom, onion'
        photoName='pizzas/funghi.jpg'
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    );

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("We're closed");
  return (
    <footer className='footer'>
      <footer>
        {/* {hour >= 12 && hour <= 22
          ? `Time:${hour}:00. Welcome to our pizza store`
          : `We're closed, We open from 12:00 till 22:00.`} */}

        {isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        We're open from {openHour}:00 until {closeHour}:00. come visit us or
        order online
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}
//React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
