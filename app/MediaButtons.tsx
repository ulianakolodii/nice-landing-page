/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import classes from "./MediaButtons.module.css";

const MediaButtons: FC<{ variant?: "light" | "dark" }> = ({ variant }) => {
  let buttonClasses = classes.button;

  if (variant === "light") {
    buttonClasses += ` ${classes.light}`;
  } else if (variant === "dark") {
    buttonClasses += ` ${classes.dark}`;
  }
  return (
    <div className={classes.buttons_container}>
      <img
        src="/InstagramIcon.svg"
        alt="Instagram icon"
        className={buttonClasses}
      />
      <img
        src="/FacebookIcon.svg"
        alt="Facebook icon"
        className={buttonClasses}
      />
    </div>
  );
};

export default MediaButtons;
