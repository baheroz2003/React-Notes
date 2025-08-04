#Example 1:
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0); // 🔢 Initial value = 0
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
    </div>
  );
}
export default Counter;
#Example 2:
function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Light is {isOn ? '💡 ON' : '⚫ OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle Light</button>
    </div>
  );
}
#Example 3:
import React, { useState } from 'react';
function NameInput() {
  const [name, setName] = useState(''); // Step 1: Input value ke liye state banayi
  const handleChange = (e) => {
    setName(e.target.value); // Step 2: Jab bhi input change ho, state update karo
  };
  return (
    <div style={{ padding: '20px' }}>
      <h3>Type your name 👇</h3>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'friend'}! 👋</p>
    </div>
  );
}
export default NameInput;
#Example 4:
import React, { useState } from 'react';
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div>
      <h2>🧑 User Profile</h2>
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <br /><br />
      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <p>👋 Hello {user.name || 'user'}, your email is {user.email || 'not provided'}.</p>
    </div>
  );
}
export default UserProfile;
#Example 5:
// React aur useState hook import kar rahe hain
import React, { useState } from 'react';

// TodoList naam ka component define kar rahe hain
function TodoList() {

  // tasks naam ka ek array-type state banaya (initially khali [])
  // setTasks function se hum is array me nayi tasks add karenge
  const [tasks, setTasks] = useState([]);

  // input naam ka state banaya, jo input box ke value ko store karega
  const [input, setInput] = useState('');

  // Ye function tab chalega jab user 'Add' button dabayega
  const handleAdd = () => {
    // Agar input blank nahi hai (trim() se leading/trailing space hata di)
    if (input.trim() !== '') {

      // tasks array me nayi input value ko add kar rahe hain
      // prev => purana tasks array, ...prev se purane tasks ko copy karte hain
      setTasks(prev => [...prev, input]);

      // Input box ko reset kar rahe hain (blank kar diya)
      setInput('');
    }
  };

  // JSX return ho raha hai (UI ban rahi hai)
  return (
    <div>
      <h2>📝 My Todo List</h2>

      {/* Input box jahan user task likhega */}
      <input
        value={input}  // Input ka current value state se aa raha hai
        onChange={(e) => setInput(e.target.value)} // Jab bhi kuch type ho, state update ho
        placeholder="Add a task" // Light grey placeholder text
      />

      {/* Add button jo handleAdd function ko trigger karega */}
      <button onClick={handleAdd}>Add</button>

      {/* Task list dikhane ke liye unordered list */}
      <ul>
        {/* tasks array me jitne bhi task hain, unhe map karke show kar rahe hain */}
        {tasks.map((task, index) => (
          // Har task ek list item ke form me dikh raha hai
          <li key={index}>✅ {task}</li>
        ))}
      </ul>
    </div>
  );
}

// Is component ko baahar use karne ke liye export kar rahe hain
export default TodoList;


