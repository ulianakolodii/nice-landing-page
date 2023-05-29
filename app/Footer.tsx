import { FC } from "react";
import classes from "./Footer.module.css";
import Logo from "./Logo";
import LightMediaButtons from "./LightMediaButtons";

const Footer: FC = () => {
  return (
    <div className={classes.footer_container}>
      <Logo variant="light" />
      <div className={classes.footer_menu_container}>
        <div className={classes.footer_menu}>
          <div>o que fazemos</div>
          <div>como te ajudamos</div>
          <div>fale conosco</div>
        </div>
        <div className={classes.footer_media_buttons}>
          <LightMediaButtons variant="light" />
        </div>
      </div>
      <div className={classes.footer_input_container}>
        <span className={classes.footer_input_title}>
          Receba as novidades do nice
        </span>
        <div className={classes.footer_input_wrapper}>
          <input
            className={classes.footer_input}
            type="email"
            placeholder="nome@email.com"
          ></input>
          <button className={classes.footer_button}>Inscrever</button>
        </div>
      </div>

      <span className={classes.footer_divider}></span>
      <span className={classes.footer_rights}>
        Nice template by @lopesluiza
        <br />
        on Figma - 2021
      </span>
    </div>
  );
};

export default Footer;
