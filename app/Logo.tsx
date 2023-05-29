import { FC } from "react";
import classes from "./Logo.module.css";

const Logo: FC<{ variant?: "light" | "dark" }> = ({ variant }) => {
  let logoClasses = classes.logo;

  if (variant === "light") {
    logoClasses += ` ${classes.light}`;
  } else if (variant === "dark") {
    logoClasses += ` ${classes.dark}`;
  }

  return <span className={logoClasses}>nice</span>;
};

export default Logo;
