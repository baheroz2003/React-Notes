import React from 'react';
import "./PlayButton.css";
function PlayButton({ message, children }) {
  function handleClick() {
    console.log(message); // Button click hone par yeh chalega
  }
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}
export default PlayButton;
PlayButton component ek button render karta hai.
onClick={handleClick} — yeh ek event handler hai. Jab button click hoga, handleClick() call hoga.
handleClick() ke andar tumne console.log(message) likha hai — iska matlab hai ki jab button dabega, console me message print hoga.
children button ke andar ka text ya element hota hai jo dikhai deta hai.
#Example 2:
import React from 'react'
import "./PlayButton.css"
function PlayButton({message,children,onClick}) {
    function handleClick(){
        onClick();
    }
  return (
    <button onClick={handleClick}>{children}</button>
  )
}
export default PlayButton;
✅ Hinglish Summary of PlayButton Component:
PlayButton ek custom React button component hai.
Ye 3 props leta hai:
message: ek custom message (use kar sakte ho console log me)
children: button ke andar kya likha ya dikhana hai (jaise ▶️ Play)
onClick: parent component se aaya function, jo button click pe chalega.
💡 Kaise kaam karta hai?
Jab button click hota hai, handleClick() function call hota hai.
handleClick() ke andar onClick() call hota hai, jo parent se mila function hai.
children ke through button ke andar ka text/emoji render hota hai.
#Example 3:
function PlayButton({message, children, onPlay, onPause}) {
   let flag = false;
   function handleClick() {
     if (flag) {
       onPause();   // agar flag true hai → pause call hoga
     } else {
       onPlay();    // agar flag false hai → play call hoga
     }
     flag = !flag;  // flag ka value ulta kar diya (true <-> false)
   }
   return (
     <button onClick={handleClick}>{children}</button>
   )
}
React me flag har render pe reset ho jaayega kyunki wo ek normal variable hai, state nahi.
Isliye button hamesha onPlay() hi call karega, kyunki har render me flag phir se false ho jaata hai.
import React, { useState } from 'react';
function PlayButton({ message, children, onPlay, onPause }) {
  const [isPlaying, setIsPlaying] = useState(false);
  function handleClick() {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
    setIsPlaying(!isPlaying); // toggle state
  }

  return (
    <button onClick={handleClick}>{children}</button>
  );
}
export default PlayButton;
#Example 4
// React library import kar rahe hain
import React from 'react'
// Button ka CSS file import kar rahe hain
import "./PlayButton.css"
// Functional component start — PlayButton ke props me 4 cheezein aa rahi hain:
// message → message from parent (not used here), children → inner HTML/text of button,
// onPlay → function call when play hota hai, onPause → function call when pause hota hai
function PlayButton({message, children, onPlay, onPause}) {
   // Ek local variable banaya jiska naam flag hai (yeh playing/pause state batata hai)
   // ❌ Issue: yeh har click pe reset ho jaayega, because yeh render ke time define ho raha hai
   let flag = false;
    // Jab button pe click hoga to yeh function chalega
    function handleClick(e){
      // Click event ka pura object console me print karega — React ka SyntheticEvent
      console.log(e)
      // Bubbling stop karega — click event parent tak propagate nahi karega
      e.stopPropagation();
      // Default browser behavior rok dega (jaise form submit ya anchor open)
      e.preventDefault();
      // Agar playing hai (flag true), to onPause function chalega
      if(flag){
        onPause()
      }
      // Agar playing nahi hai (flag false), to onPlay function chalega
      else{
        onPlay();
      }
      // Flag ko toggle kar rahe hain — playing se paused ya paused se playing
      // ❌ Lekin yeh toggle kaam nahi karega kyunki flag har bar false se shuru hota hai
      flag = !flag;
    }
    // Button render ho raha hai — click hone par handleClick chalega
    // children wo hoga jo <PlayButton> ke beech likha hoga
    return (
      <button onClick={handleClick}>{children}</button>
    )
}
// Component ko export kar diya taaki doosri jagah use ho sake
export default PlayButton;




