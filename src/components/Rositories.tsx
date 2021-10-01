import { useState, useEffect } from "react";
import "../styles/Repositories.css";
import { RepositoriesItems } from "./RepositoriesItems";

//
interface index {
  name: string;
  description: string;
  html_url: string;
}

export const RopositoriesList = () => {
  // syntax stating that prosp has more data
  const [itens, setItens] = useState<index[]>([]);
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
          return <RepositoriesItems key={index.name} index={index} />;
        })}
      </ul>
    </section>
  );
};
