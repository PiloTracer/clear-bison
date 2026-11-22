"use client";

import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell site-nav__inner">
        <a className="brand-link" href="#top" aria-label="ClearBison home">
          <img src="/mark-metal.jpg" alt="" width={36} height={36} />
          <span>
            <span className="clear">Clear</span>
            <span className="bison">Bison</span>
          </span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#difference">Difference</a>
            </li>
            <li>
              <a href="#options">Options</a>
            </li>
            <li>
              <a href="#trust">Trust</a>
            </li>
            <li>
              <a className="btn btn-primary" href="#contact">
                Talk to the founder
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
