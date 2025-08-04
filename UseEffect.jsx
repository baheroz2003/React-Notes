useEffect() ek React Hook hai jo tumhe side effects chalane deta hai functional components ke andar.
🧠 Side Effects ka matlab?
Kuch bhi aisa jo:
Component ke andar directly nahi hota
Bahar ki duniya se interact karta hai
Jaise:
✅ API calls
✅ setTimeout / setInterval
✅ DOM manipulation
✅ LocalStorage access
✅ Event listeners
#Example 1:
import { useEffect } from 'react';
function Hello() {
  useEffect(() => {
    console.log('👋 Component mounted');
  }, []); // empty dependency array -> sirf 1 baar chalega
  return <p>Hello Baheroz!</p>;
}
🧠 Explanation:
[] = dependency empty → matlab ye effect sirf pehli render par chalega
Perfect for: ✅ Fetching API, ✅ setting up listener, ✅ Analytics
#Example 2:
import { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`📊 Count updated to: ${count}`);
  }, [count]); // count me change aaya toh effect chalega
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
🧠 Explanation:
count jab bhi change hoga, effect chalega
Perfect for: ✅ Watch any specific prop/state and act accordingly
#Example 3
import React, { useEffect, useState } from 'react';
function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("🕒 Ticking...");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("❌ Cleanup done");
    };
  }, []);

  return <h2>⏳ Timer is Running...</h2>;
}
export function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? "🛑 Unmount Timer" : "▶️ Mount Timer"}
      </button>
      {show && <Timer />}
    </div>
  );
}
useEffect(() => {}, []):
Jab component mount hota hai, tab run hota hai.
Aur jab component unmount hota hai, tab return() wala cleanup function run hota hai.
setInterval():
Har 1 second me "🕒 Ticking..." console me print karta hai.
Jab component unmount hota hai, clearInterval() us ticking ko band kar deta hai.
App component:
Ek button se Timer component ko mount/unmount kar rahe ho.
Jab unmount hota hai, tab "❌ Cleanup done" console me dikhta hai.
Flow:
✅ Mount → Tick start
❌ Unmount → Tick stop + Cleanup log
🔁 Dobara mount → Naya tick start
#Example 4
import React, { useEffect, useState } from 'react';
// ⏳ TimerComponent: Jisme setTimeout use hua hai
function TimerComponent() {
  const [message, setMessage] = useState("⌛ Waiting...");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("✅ Time's up!");
      console.log("⏰ Timeout triggered");
    }, 3000);
    return () => {
      clearTimeout(timeout);
      console.log("❌ Timeout cleared before it triggered");
    };
  }, []);
  return <h2>{message}</h2>;
}
// 🧠 App component: Jahan se TimerComponent ko mount/unmount karte hain
export function App() {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div>
      <button onClick={() => setShowTimer(prev => !prev)}>
        {showTimer ? "🛑 Unmount Timer" : "▶️ Mount Timer"}
      </button>

      {showTimer && <TimerComponent />}
    </div>
  );
}
🧩 TimerComponent kya karta hai?
Jab component mount hota hai, tab:
Ek setTimeout set hota hai jo 3 seconds baad message change karega:
⌛ Waiting... → ✅ Time's up!
Console me print hota hai: ⏰ Timeout triggered (agar 3s complete hote hain)
Agar component 3 seconds se pehle unmount ho gaya (button dabake):
clearTimeout() call hota hai (cleanup)
Console me aata hai: ❌ Timeout cleared before it triggered
🧠 App component kya karta hai?
Ek button deta hai jisse:
TimerComponent mount/unmount hota hai.
showTimer toggle hota hai:
🔘 Show: 🛑 Unmount Timer
🔘 Hide: ▶️ Mount Timer
#Example 5 Fetch API
import { useState, useEffect } from 'react';
function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // fetch only once
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>👤 {user.name}</li>
      ))}
    </ul>
  );
}
✅ Jab UsersList component mount hota hai, tab:
fetch call hota hai ek dummy API se (JSONPlaceholder).
Us API se users ki list milti hai.
setUsers(data) se state update hoti hai.
🔒 [] ka matlab hai: useEffect sirf ek baar chalega, baar-baar nahi.
🧾 Output me kya dikhega?
Ek <ul> list dikhegi jisme:
Har user ka naam ek <li> me hoga, jise 👤 icon ke sath dikhaya gaya hai.
#Example 6 using Async/Await
import { useState, useEffect } from 'react';
function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // 👇 Andar ek async function banaya
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);  // ✅ users state update
      } catch (error) {
        console.error("❌ Error fetching users:", error);
      }
    };
    fetchUsers(); // 🔁 Function ko call kiya
  }, []);
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>👤 {user.name}</li>
      ))}
    </ul>
  );
}
useEffect khud async nahi hota, isliye uske andar ek async function banaya jata hai.
Us async function ke andar fetch() ko await ki madad se call kiya jata hai.
Jab data mil jata hai, tab setUsers() ke through users state update hoti hai.
[] empty dependency array ka matlab: useEffect sirf component mount hone par ek baar chalega.
Agar API call fail hota hai, toh try/catch block us error ko handle karta hai.
async bolta hai function ko — "tum asynchronous ban jao"
taaki await us function ke andar kisi cheez pe ruk sake.





