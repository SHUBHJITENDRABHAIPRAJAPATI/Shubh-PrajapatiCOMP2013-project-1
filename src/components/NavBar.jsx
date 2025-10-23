import React from "react";

/*
 username: string
 cartCount: number
 onToggleCart (optional): not used now, but placeholder
*/
export default function NavBar({ username = "User", cartCount = 0 }) {
  return (
    <div className="NavBar">
      <div className="NavDiv NavUser">Hello, {username}</div>
      <div className="NavDiv NavTitle">
        <h2>Grocery Shopping App</h2>
      </div>
      <div className="NavDiv NavCart">
        <div style={{ position: "relative", display: "inline-block" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.5" fill="white" />
            <circle cx="18" cy="20" r="1.5" fill="white" />
          </svg>

          {/* red dot when cart has items */}
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                right: -4,
                top: -4,
                width: "10px",
                height: "10px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
