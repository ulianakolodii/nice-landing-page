/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import classes from "./AdvantageItem.module.css";

const AdvantageItem: FC<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  return (
    <div className={classes.advantage_container}>
      <div className={classes.advantage_img_wrapper}>
        <img
          src={image}
          className={classes.advantage_img}
          alt="Advantage icon"
        />
      </div>
      <div className={classes.advantage_description_container}>
        <div className={classes.advatage_title}>{title}</div>
        <div className={classes.advatage_description}>{description}</div>
      </div>
      <img className={classes.plus_icon}src="/PlusIcon.svg" alt="Plus icon" />
    </div>
  );
};

export default AdvantageItem;
