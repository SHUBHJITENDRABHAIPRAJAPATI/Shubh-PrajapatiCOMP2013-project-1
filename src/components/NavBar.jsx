import React from "react";


export default function NavBar({ username = "Shubh", cartCount = 0 }) {
  
  return (
    <div className="NavBar">
      <div className="NavDiv NavUser">
        Hello, {username}
      </div>

      <div className="NavDiv NavTitle">
        <h2>Grocery Shopping App</h2>
      </div>

      <div className="NavDiv NavCart" style={{ position: "relative" }}>
        {}
        <span style={{ fontSize: "22px" }}>🛒</span>

        {}
        {cartCount > 0 ? (
          <span
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              width: "10px",
              height: "10px",
              backgroundColor: "red",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
        ) : null}
      </div>
    </div>
  );
}
