import { FC } from "react";
import classes from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";
import MediaButtons from "./MediaButtons";
import Logo from "./Logo";

const Header: FC = () => {
  return (
    <div className={classes.header_container}>
      <BurgerMenu />
      <Logo variant="dark" />
      <MediaButtons variant="dark" />
    </div>
  );
};

export default Header;
