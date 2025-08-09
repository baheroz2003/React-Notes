import { createContext } from "react";
// Step 1: Create Context
export const UserContext = createContext();
//step 2:Wrap your components in a Provider and give it a value.
import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Home from "./Home";
function App() {
  const [user, setUser] = useState("Baheroz");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Home />
    </UserContext.Provider>
  );
}
export default App;
// #step 3:Instead of passing user as a prop, access it directly using useContext.
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hello, {user} 👋</h1>
      <button onClick={() => setUser("Zeya")}>Change Name</button>
    </div>
  );
}
export default Home;
createContext = Global storage ka locker banaya
Provider = Locker ki key sabko de di
useContext = Direct locker se cheez nikal lo, bina parent se poochhe
💡 Real-life Example:
Tumhare ghar me ek fridge (locker) hai.
Maa (Provider) fridge me doodh rakh deti hai.
Tum (useContext) bina maa ko bole fridge khol ke doodh le lete ho.
Agar useContext na hota, toh tumhe pehle maa se poochhna padta (props drilling).
//output
Kyunki tumne useState("Baheroz") rakha hai, shuru me user = "Baheroz" hoga.
Jab tum "Change Name" button click karoge
setUser("Zeya") chalega → user ka value change ho jayega → component re-render hoga.
