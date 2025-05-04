//HeaderComponent.tsx
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import { Icon } from "../icon/Icon";
import clsx from "clsx";

const navItems = [
  { id: 1, title: "Products", link: "/", hasSubmenu: true },
  { id: 2, title: "Solutions", link: "/about", hasSubmenu: true },
  { id: 3, title: "Learn", link: "/blog", hasSubmenu: true },
  { id: 4, title: "Events", link: "/events", hasSubmenu: false },
  { id: 5, title: "Company", link: "/company", hasSubmenu: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? styles.fixed : ""}`}>
      {/* Логотип */}
      <picture>
        <source
          srcSet="/tetrate-logo-light-small.svg"
          media="(max-width: 767px)"
        />
        <img
          className="teatrate-logo-light"
          src="/tetrate-logo-light.svg"
          alt="Tetrate Logo"
          loading="lazy"
        />
      </picture>

      {/* Навигация (скрывается на мобилке) */}
      <nav className={styles.nav}>
        {navItems.map((nav) => (
          <a
            key={nav.id}
            href={nav.link}
            className={clsx(
              "text__body--16",
              "text__body--16-lg",
              "text__body--16-md",
              styles.navItem
            )}
          >
            {nav.title}
            {nav.hasSubmenu && <Icon name="statedown" width={20} height={20} />}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <Button
          variant="primary"
          size="md"
          className="text__body--16-medium"
          href="https://tetrate.io/contact/pricing-request/"
        >
          Pricing Request
        </Button>

        {/* Бургер-меню (появляется на мобилке) */}
        <button
          className={styles.burger}
          onClick={() => {
            if (window.innerWidth < 1024) {
              window.open("/mobile-menu", "_blank"); // открываем в новой вкладке
            } else {
              setIsMenuOpen(true); // поведение по умолчанию (десктоп)
            }
          }}
        >
          <Icon name="menu" width={24} height={24} />
        </button>
      </div>
    </header>
  );
}
