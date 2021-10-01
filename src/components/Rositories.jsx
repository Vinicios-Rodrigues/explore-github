import { useState, useEffect, React } from "react";
import "../styles/Repositories.css";
import { RepositoriesItems } from "./RepositoriesItems";

// https://api.github.com/orgs/rocketseat/repos

const repositories = {
  name: 'Nome do repositorio',
  description: ' descrição do Repositorio',
  url :'https://github.com/Vinicios-Rodrigues?tab=repositories'
}
export const RopositoriesList = () => {
  const [itens, setItens] = useState([]);
  //pega os dados da API
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setItens(data));
  }, []);
  return (
    <section className="wrapper-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {/* render application using  */}
        {itens.map(() => {
          return(
          <RepositoriesItems repositories={repositories} />);
        })}
      </ul>
    </section>
  );
};
