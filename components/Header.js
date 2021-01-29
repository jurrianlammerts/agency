import Link from "next/link";
import { useState, useEffect } from "react";

import ArrowUp from "./icons/ArrowUp";
import { openMenu, closeMenu } from "../animations/menuAnimations";

export default function Header({ dimensions }) {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link href="/">
              <a>
                <span>LAMB</span>
                <span>DIGITAL</span>
              </a>
            </Link>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <ArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
