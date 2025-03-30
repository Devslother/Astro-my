import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance?: "big" | "small";
}

export default function Button({
  children,
  className,
  appearance,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles.accent,
        className,
        appearance === "small" && styles.small,
        appearance === "big" && styles.big
      )}
      {...props}
    >
      {children}
    </button>
  );
}
