import { gsap } from 'gsap/dist/gsap';

let tl = gsap.timeline();

export const openMenu = (width) => {
  if (window.document.documentElement.scrollTop != 0) {
    tl.to(window, { duration: 0.5, scrollTo: { y: 0 }, ease: 'expo.inOut' });
  }

  tl.to('nav', 0, {
    css: {
      display: 'block',
    },
  })
    .to('body', 0, { css: { overflow: 'hidden' } })
    .to('.App', 1, {
      duration: 0.5,
      y: width <= 654 ? '100vh' : '70vh',
      ease: 'expo.inOut',
    })
    .to(
      '.logo-dark a',
      0.2,
      {
        duration: 0.3,
        color: '#000',
        ease: 'expo.inOut',
      },
      '=-0.75',
    )
    .to('.hamburger-menu span', 0.6, {
      delay: -1,
      scaleX: 0,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut',
    })
    .to('#Path_1', 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 5,
      },
    })
    .to('#Path_2', 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 20,
      },
    })
    .to('#Line_1', 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 18,
      },
    })
    .to('#circle', 0.6, {
      delay: -0.8,
      css: {
        strokeDashoffset: 0,
      },
      ease: 'expo.inOut',
    })
    .to('.hamburger-menu-close', 0.6, {
      delay: -0.8,
      css: { display: 'block' },
    });
};

export const closeMenu = () => {
  tl.to('.App', 1, {
    y: 0,
    ease: 'expo.inOut',
  })
    .to(
      '.logo-dark a',
      0.2,
      {
        duration: 0.3,
        color: '#fff',
        ease: 'expo.inOut',
      },
      '=-0.5',
    )
    .to('#circle', 0.6, {
      delay: -0.6,
      css: {
        strokeDashoffset: -193,
        strokeDasharray: 227,
      },
    })
    .to('#Path_1', 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to('#Path_2', 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to('#Line_1', 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40,
      },
    })
    .to('.hamburger-menu span', 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut',
    })
    .to('.hamburger-menu-close', 0, {
      delay: -0.1,
      css: { display: 'none' },
    })
    .to('body', 0, { css: { overflow: 'auto' } })
    .to('nav', 0, {
      css: { display: 'none' },
    });
};
