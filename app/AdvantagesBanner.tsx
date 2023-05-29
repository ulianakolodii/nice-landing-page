/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import classes from "./AdvantagesBanner.module.css";
import AdvantageItem from "./AdvantageItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "./Button";

const AdvantagesBanner: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className={classes.advantages_container}>
      <span className={classes.advantages_title}>
        Um subtítulo para quem rolou até aqui!
      </span>
      <span className={classes.advantages_description}>
        Aproveite esta seção para destacar os benefícios do seu produto ou
        serviço. Palavras-chave ajudam no SEO.
      </span>
      <Slider {...settings}>
        <div>
          <AdvantageItem
            image="/Target.svg"
            title="Rápido"
            description="Aproveite esta seção para destacar os benefícios do seu produto ou serviço."
          />
        </div>
        <div>
          <AdvantageItem
            image="/EthereumCoin.svg"
            title="Do seu jeito"
            description="Aproveite esta seção para destacar os benefícios do seu produto ou serviço."
          />
        </div>
        <div>
          <AdvantageItem
            image="/CreditCard.svg"
            title="Como você queria"
            description="Aproveite esta seção para destacar os benefícios do seu produto ou serviço."
          />
        </div>
      </Slider>
      <div className={classes.advantages_desktop_wrapper}>
        <div className={classes.advantages_hashtag_container}>
          <span className={classes.advantages_hastag}>#contecomagente</span>
          <span className={classes.advantages_hashtag_title}>
            Simples, rápido e do seu jeito.
          </span>
          <span className={classes.advantages_hashtag_description}>
            Mostre os valores da sua marca e como ela pode fazer parte da vida do
            usuário que está lendo. Gerar identificação é a chave para{" "}
            <span className={classes.advantages_hashtag_decription_accent}>
              conquistar seu cliente.
            </span>
          </span>
          <Button variant="colored">Eu quero!</Button>
        </div>
        <div className={classes.talking_man_container}>
          <img
            src="/TalkingMan.svg"
            alt="Talking man icon"
            className={classes.talking_man_img}
          />
          <img
            src="/GradientBlur.svg"
            alt="Gradient blur icon"
            className={classes.blur_img}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvantagesBanner;
