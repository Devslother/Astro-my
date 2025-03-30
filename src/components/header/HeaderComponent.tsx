import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const navItems = [
  { id: 1, title: "Products", link: "/" },
  { id: 2, title: "Solutions", link: "/about" },
  { id: 3, title: "Learn", link: "/blog" },
  { id: 4, title: "Events", link: "/events" },
  { id: 5, title: "Company", link: "/company" },
];

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Логотип */}
      <img
        className="teatrate-logo-light"
        src="/tetrate-logo-light.svg"
        alt="Tetrate Logo"
      />

      {/* Навигация (скрывается на мобилке) */}
      <nav className={styles.nav}>
        {navItems.map((nav) => (
          <a key={nav.id} href={nav.link} className={styles.navItem}>
            {nav.title}
            <img
              className={styles.dropdown}
              src="/dropdown.svg"
              alt="dropdown arrow"
            />
          </a>
        ))}
      </nav>

      {/* Кнопка */}
      <Button appearance="small">Pricing Request</Button>

      {/* Бургер-меню (появляется на мобилке) */}
      <button className={styles.burger} onClick={() => setIsMenuOpen(true)}>
        <img src="/burger.svg" alt="Open menu" />
      </button>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className={styles.menu}>
          {navItems.map((nav) => (
            <a
              key={nav.id}
              href={nav.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.title}
            </a>
          ))}
          <button className={styles.close} onClick={() => setIsMenuOpen(false)}>
            Close
          </button>
        </div>
      )}
    </header>
  );
}
