import { useState, useEffect, React } from "react";
import "../styles/Repositories.css";
import { RepositoriesItems } from "./RepositoriesItems";

export const RopositoriesList = () => {
  const [itens, setItens] = useState([]);
  //getting data of the API
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setItens(data));
  }, []);
  return (
    <section className="wrapper-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {/* listing API dates and rendering*/}
        {itens.map((index) => {
          return <RepositoriesItems index={index} />;
        })}
      </ul>
    </section>
  );
};
