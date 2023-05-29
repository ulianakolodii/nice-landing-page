/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import classes from "./Contacts.module.css";
import Button from "./Button";

const Contacts: FC = () => {
  return (
    <div className={classes.contacts_container}>
      <div className={classes.contacts_title_container}>
          <img className={classes.chat_icon} src="/ChatIcon.svg" alt="Chat icon" />
          <span className={classes.contacts_title}>
            Ainda tem dúvidas? Fale conosco!
          </span>
          <span className={classes.contacts_divider}></span>
      </div>
      <div className={classes.contacts_desktop_wrapper}>
        <div className={classes.contacts_decription_container}>
          <span className={classes.contacts_decription}>
            Ofereça um meio de comunicação direto. <br /> Pode ser um{" "}
            <a
              href="mailto:contato@email.com.br"
              className={classes.contacts_description_email}
            >
              contato@email.com.br
            </a>
            <br />
            <br />
            Ou crie um formulário ao lado que entrem em contato{" "}
            <span className={classes.contacts_description_accent}>
              o mais rápido possível!
            </span>
          </span>
        </div>
        <div className={classes.contacts_watsapp_container}>
          <img
            className={classes.whatsapp_icon}
            src="/WhatsappIcon.svg"
            alt="Whastapp icon"
          />{" "}
          <span className={classes.contacts_whatsapp_text}>
            Hey! Estamos no whatsapp!
          </span>
        </div>
        <div className={classes.contacts_inputs_container}>
          <label className={classes.contacts_input}>
            <span className={classes.input_title}>Nome</span>
            <input className={classes.input_field} placeholder="Nome Sobrenome" />
          </label>
          <label className={classes.contacts_input}>
            <span className={classes.input_title}>Email</span>
            <input className={classes.input_field} type="email" placeholder="nome@email.com.br" />
          </label>
          <label className={classes.contacts_input}>
            <span className={classes.input_title}>Telefone</span>
            <input className={classes.input_field} type="telephone" placeholder="21 9988-7766" />
          </label>
          <div className={classes.contacts_button}><Button variant="colored">Enviar!</Button></div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
