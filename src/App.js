//очень важно импортировать файл!! в каждый компонент
import React from "react";
import paintingData from "./paintings.json";
import PaintingList from "./components/PaintingList";
// ОДИН ФАЙЛ - ОДИН КОМПОНЕНЕТ

//компоненты называем с большой буквы
const App = () => {
  return (
    <div>
      <h1>Главныйй компонент</h1>

      <PaintingList paintingData={paintingData} />
    </div>
  );
};

export default App;
