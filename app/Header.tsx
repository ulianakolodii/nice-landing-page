import { FC } from "react";
import classes from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";
import MediaButtons from "./MediaButtons";

const Header: FC = () => {
  return (
    <div className={classes.header_container}>
      <BurgerMenu />
      <span className={classes.logo}>nice</span>
      <MediaButtons />
    </div>
  );
};

export default Header;
