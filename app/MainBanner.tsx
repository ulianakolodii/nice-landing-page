/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import classes from "./MainBanner.module.css";
import Button from "./Button";
import Image from "next/image";

const MainBanner: FC = () => {
  return (
    <div className={classes.banner_container}>
      <div className={classes.main_title_container}>
        <span className={classes.main_title}>Um slogan chamativo aqui.</span>
        <span className={classes.main_description}>
          Um texto sobre o seu produto ou serviço. Explique porque{" "}
          <span className={classes.accent_description}>ele é valioso</span> e
          direcione o usuário ao próximo objetivo.
        </span>
        <div className={classes.banner_buttons_container}>
          <Button variant="colored">Eu quero!</Button>
          <Button variant="outlined">Conhecer mais!</Button>
        </div>
      </div>
      <div className={classes.businessman_container}>
        <img
          src="/Businessman.svg"
          alt="Businessman icon"
          className={classes.businessman_img}
        />
        <img
          src="/PurpleEarth.svg"
          alt="Purple Earth icon"
          className={classes.earth_img}
        />
        <img
          src="/GradientBlur.svg"
          alt="Gradient blur icon"
          className={classes.blur_img}
        />
      </div>
    </div>
  );
};

export default MainBanner;
