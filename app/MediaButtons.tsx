import { FC } from "react";
import classes from "./MediaButtons.module.css";
import Image from "next/image";

const MediaButtons: FC = () => {
  return (
    <div className={classes.buttons_container}>
      <div className={classes.media_icon}>
        <Image
          src="/InstagramIcon.svg"
          alt="Instagram icon"
          width="18"
          height="18"
        />
      </div>
      <div className={classes.media_icon}>
        <Image
          src="/FacebookIcon.svg"
          alt="Facebook icon"
          width="10"
          height="18"
        />
            </div>
      </div>
  );
};

export default MediaButtons;
