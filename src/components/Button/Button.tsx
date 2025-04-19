import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

// Общие пропсы для кнопки
interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary"; // Соответствует классам btn--primary и т. д.
  size?: "lg" | "md" | "sm"; // Соответствует классам btn--lg, btn--md, btn--sm
  className?: string;
}

// Пропсы для случая, когда Button рендерится как ссылка (<a>)
type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

// Пропсы для нативной кнопки (<button>)
type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

// Объединяем оба набора пропсов
export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const classes = clsx(
    styles.btn, // базовый стиль кнопки
    styles[`btn--${variant}`], // стиль для variant: primary, secondary и т.д.
    styles[`btn--${size}`], // стиль для size: lg, md, sm
    className // дополнительные CSS-классы
  );
  // Если передан href, рендерим ссылку
  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  // Иначе рендерим кнопку
  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
