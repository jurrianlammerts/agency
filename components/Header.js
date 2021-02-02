import Link from 'next/link';
import { useState, useEffect } from 'react';
import Headroom from 'headroom.js';

import ArrowUp from './icons/ArrowUp';
import { openMenu, closeMenu } from '../animations/menuAnimations';

export default function HeaderComp({ navOpen, dark, dimensions }) {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  useEffect(() => {
    const myElement = document.querySelector('header');
    // construct an instance of Headroom, passing the element
    const headroom = new Headroom(myElement);
    headroom.init();
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className={`logo ${dark ? 'logo-dark' : ''}`}>
            <Link href="/" passHref>
              <a>
                <span>LAMB</span>
                <span>DIGITAL</span>
              </a>
            </Link>
          </div>
          <button
            onClick={() => setMenuState({ menuOpened: !menuState.menuOpened })}
            className={`nav-toggle ${dark ? 'nav-toggle-dark' : ''}`}
          >
            <div className="hamburger-menu">
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <ArrowUp />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
