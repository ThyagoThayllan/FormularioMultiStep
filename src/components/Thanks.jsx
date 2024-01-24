import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import "./Thanks.css";

export const Thanks = ({ data }) => {
  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
  };

  return (
    <div className="thanksContainer">
      <h2>Falta pouco...</h2>
      <p>
        A sua opnião é muito importante, em breve você reberá um cupom de 10% de
        desconto para a sua próxima compra.
      </p>
      <p>
        Para concluir sua avaliação, clique no botão de <b>Enviar</b> abaixo.
      </p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="reviewData">
        <span>Satisfação com o produto: {emojiData[data.review]}</span>
      </p>
      <p className="reviewData">
        <span>Comentário: {data.comment}</span>
      </p>
    </div>
  );
};
