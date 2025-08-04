import React, { useState, useEffect, useRef } from 'react';
function App() {
  // Step 1: Count state banaya
  const [count, setCount] = useState(0);
  // Step 2: Button ka reference banaya
  const buttonRef = useRef();
  // Step 3: Page load hone ke turant baad button ka background red kar diya
  useEffect(() => {
    console.log("Component render hua");
    buttonRef.current.style.backgroundColor = 'red';
  }, []); // ye empty [] batata hai ki ye sirf ek baar chalega
  // Step 4: Button click handler
  const handleClick = () => {
    setCount(prev => prev + 1); // count badhao
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Mera Click Counter</h1>
      <button ref={buttonRef} onClick={handleClick}>
        Count is: {count}
      </button>
    </div>
  );
}
export default App;
Button ya kisi bhi DOM element ko CSS se change karna ho directly-useRef
Page load pe koi kaam karna ho (API call ya DOM update)-useEffect
Kisi bhi variable ki value track karni ho (like count, input, etc.)-useState
