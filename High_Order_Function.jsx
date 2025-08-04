import React from 'react';

const videoData = [
  { title: 'React Tutorial', views: 10000, verified: true },
  { title: 'Node Tutorial', views: 8000, verified: false },
  { title: 'Express Tutorial', views: 15000, verified: true },
  { title: 'MongoDB Tutorial', views: 5000, verified: true },
];
function App() {
  // 1️⃣ FILTER: Show only verified videos
  const verifiedVideos = videoData.filter(video => video.verified);
  // 2️⃣ MAP: Render titles of verified videos
  const videoTitles = verifiedVideos.map((video, index) => (
    <li key={index}>{video.title}</li>
  ));

  // 3️⃣ REDUCE: Calculate total views of verified videos
  const totalViews = verifiedVideos.reduce((acc, video) => acc + video.views, 0);
  return (
    <div>
      <h2>Verified Video Titles</h2>
      <ul>{videoTitles}</ul>

      <h3>Total Verified Views: {totalViews.toLocaleString()} 👁️</h3>
    </div>
  );
}
export default App;
videoData ek array hai jisme multiple video objects hain – har ek me title, views, aur verified status hai.
filter() se sirf wahi videos nikale gaye hain jo verified: true hain.
map() se un verified videos ke titles <li> me render kiye gaye hain (list banayi gayi hai).
reduce() ka use karke total verified videos ke views ko add karke ek number me convert kiya gaya hai.
Finally, ek UI bana hai jisme:
Verified video titles ki list dikhti hai
Aur total verified views ka count bhi dikhta hai
///output
Verified Video Titles
- React Tutorial
- Express Tutorial
- MongoDB Tutorial
Total Verified Views: 30,000 👁️

