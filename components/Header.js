import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import ArrowUp from './icons/ArrowUp';
import { openMenu, closeMenu } from '../animations/menuAnimations';

let tl = gsap.timeline();

export default function Header({ dimensions }) {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  const router = useRouter();

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
            <Link href="/">RDAM.</Link>
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
