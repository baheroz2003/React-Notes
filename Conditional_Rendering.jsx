import React from 'react';

function UserStatus({ isLoggedIn, username }) {
  return (
    <div>
      <h2>
        {isLoggedIn ? `Welcome back, ${username}!` : 'Please log in.'}
      </h2>

      <p>
        {isLoggedIn && '🟢 You are online.'}
      </p>
    </div>
  );
}

export default UserStatus;
Ye ek React functional component hai jiska naam hai UserStatus.
Ye 2 props accept karta hai:
isLoggedIn → true/false batata hai ki user login hai ya nahi.
username → user ka naam, jab wo logged in hai.
💡 Conditional Rendering ka use:
Line 7:
{isLoggedIn ? Welcome back, ${username}! : 'Please log in.'}
👉 Agar isLoggedIn true hai to welcome message dikhega.
👉 Nahi to "Please log in." dikhega.
Line 10:
{isLoggedIn && '🟢 You are online.'}
👉 Agar isLoggedIn true hai to ek green online dot dikhayega.
👉 Nahi to kuch bhi nahi dikhega.
