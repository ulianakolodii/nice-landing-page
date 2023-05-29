"use client";
import { FC, use, useState } from "react";
import classes from "./BurgerMenu.module.css";

const BurgerMenu: FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`${classes.burger_menu} ${active ? classes.active : ""}`}
      onClick={() => setActive(!active)}
    >
      <span></span>
    </div>
  );
};

export default BurgerMenu;
