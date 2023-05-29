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

  return <div className={classes.button_container}><button className={buttonClasses}>{children}</button></div>;
};

export default Button;
