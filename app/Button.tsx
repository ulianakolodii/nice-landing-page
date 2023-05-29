import { FC, PropsWithChildren } from "react";
import classes from "./Button.module.css";

const Button: FC<PropsWithChildren<{ variant?: "colored" | "outlined" }>> = ({
  children,
  variant,
}) => {
  let buttonClasses = classes.button;

  if (variant === "colored") {
    buttonClasses += ` ${classes.colored}`;
  } else if (variant === "outlined") {
    buttonClasses += ` ${classes.outlined}`;
  }

  return <div className={buttonClasses}>{children}</div>;
};

export default Button;
