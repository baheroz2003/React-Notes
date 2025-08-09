Pizza Order System 🍕 (bilkul waise jaise Zomato/Swiggy me hota hai)
Scenario
Tumhare app me user pizza add kar sakta hai, remove kar sakta hai, ya cart clear kar sakta hai.
Ye state app ke multiple pages me chahiye (Pizza List page, Cart page, Checkout page).
Agar tum normal useState use karoge, to har page me props pass karne padenge = prop drilling ka dard.
Isliye hum useReducer + useContext use karenge.
#step 1:initial state and reducer
const initialState = {
  cart: []
};
function pizzaReducer(state, action) {
  switch (action.type) {
    case "ADD_PIZZA":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_PIZZA":
      return { ...state, cart: state.cart.filter(pizza => pizza.id !== action.payload) };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
}
#step 2:context and provider
import React, { createContext, useReducer, useContext } from "react";

const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [state, dispatch] = useReducer(pizzaReducer, initialState);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
}

export function usePizza() {
  return useContext(PizzaContext);
}
#step 3:add pizza page
function PizzaMenu() {
  const { dispatch } = usePizza();
  const pizzas = [
    { id: 1, name: "Margherita" },
    { id: 2, name: "Pepperoni" }
  ];
  return (
    <div>
      {pizzas.map(pizza => (
        <div key={pizza.id}>
          {pizza.name}
          <button onClick={() => dispatch({ type: "ADD_PIZZA", payload: pizza })}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
#step 4:cart page
function Cart() {
  const { state, dispatch } = usePizza();
  return (
    <div>
      <h2>Your Cart</h2>
      {state.cart.map(pizza => (
        <div key={pizza.id}>
          {pizza.name}
          <button onClick={() => dispatch({ type: "REMOVE_PIZZA", payload: pizza.id })}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
}
#step 5:wrap up
export default function App() {
  return (
    <PizzaProvider>
      <PizzaMenu />
      <Cart />
    </PizzaProvider>
  );
}
useReducer = Tumhare restaurant ka kitchen manager — jo decide karta hai kaunsi pizza banegi, kaunsi hatayenge, kaunsa order cancel hoga.
useContext = Tumhare restaurant ka waiter — jo kitchen ka decision har table (component) tak pohchaata hai bina baar-baar owner se pooche.
useContext = Mic jo poore restaurant me announce karta hai ki “Customer ne pizza order kiya!”
useReducer = Kitchen ka chef jo decide karta hai ki pizza kaunsa banega, kis temperature pe, kitni topping dalni hai.
