import React from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app" style={{ textAlign: "center", padding: "4rem 2rem", fontFamily: "sans-serif" }}>
      <h1>🍕 Eat-N-Split</h1>
      <p style={{ color: "#666", fontSize: "1.2rem", marginTop: "1rem" }}>
        🚧 Project under construction — coming soon!
      </p>
      <div style={{ marginTop: "2rem", display: "inline-block", textAlign: "left", background: "#fef8f0", padding: "1.5rem", borderRadius: "10px", border: "1px solid #ffe8cc" }}>
        <h3 style={{ margin: "0 0 1rem 0" }}>Sample Friends Data Ready:</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {initialFriends.map((friend) => (
            <li key={friend.id} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <img src={friend.image} alt={friend.name} style={{ borderRadius: "50%", width: 36, height: 36 }} />
              <span><strong>{friend.name}</strong></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
