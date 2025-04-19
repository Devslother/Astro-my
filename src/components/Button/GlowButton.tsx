import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./GlowButton.module.css";
import Button, { type ButtonProps } from "./Button";

type GlowButtonProps = ButtonProps & {
  children: ReactNode;
  containerClassName?: string;
  buttonClassName?: string;
};

export const GlowButton = ({
  children,
  containerClassName,
  buttonClassName,
  ...props
}: GlowButtonProps) => {
  return (
    <div className={clsx(styles.container, containerClassName)}>
      <div className={clsx(styles.layer, styles.orange)} />
      <div className={clsx(styles.layer, styles.white)} />
      <Button className={clsx(styles.button, buttonClassName)} {...props}>
        {children}
      </Button>
    </div>
  );
};
