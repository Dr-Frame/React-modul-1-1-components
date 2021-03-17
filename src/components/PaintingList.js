import React from "react";
import Painting from "./Painting";

const PaintingList = ({ paintingData }) => (
  /* рендеринг коллекций */

  /* TODO: Ключи помогают опознать реакту элемент коллекции
          ЕСЛИ нету id, то используем что то уникальное например имя, цвет и т.д */
  <ul>
    {paintingData.map(
      ({ url, id, title, price, authorUrl, authorTag, quantity }) => (
        <li key={id}>
          <Painting
            url={url}
            title={title}
            price={price}
            authorUrl={authorUrl}
            authorTag={authorTag}
            quantity={quantity}
          />
        </li>
      )
    )}
  </ul>
);

export default PaintingList;
