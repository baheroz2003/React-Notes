----------------Parent-----------------------------
import React from 'react';
import UserCard from './UserCard';
function App() {
  const user1 = {
    name: "Aman",
    age: 22,
    isOnline: true,
  };
  const user2 = {
    name: "Priya",
    age: 25,
    isOnline: false,
  };
  return (
    <div>
      <h1>User List</h1>
      <UserCard {...user1} />
      <UserCard {...user2} />
    </div>
  );
}
export default App;
--------------------Child----------------
import React from 'react';

function UserCard({ name, age, isOnline }) {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '1em',
      margin: '1em',
      borderRadius: '8px',
      width: '200px'
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}
export default UserCard;
Props ka use hota hai parent se child component me data bhejne ke liye.
Parent component (App.js) ne 2 user objects banaye – user1 aur user2.
Ye objects UserCard component ko props ke through diye using {...user} (spread operator).
Child component (UserCard.js) ne props ko destructure kiya (name, age, isOnline).
Fir ye props values ko UI me dikhaya.
Conditional rendering se isOnline true hai to 🟢 Online, nahi to 🔴 Offline dikhaya.
Is tarah tum ek hi UserCard component ko multiple users ke liye reuse kar sakte ho.

