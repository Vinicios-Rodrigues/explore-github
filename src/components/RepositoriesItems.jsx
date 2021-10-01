import React from "react";

export const RepositoriesItems = (props) => {
  return (
    <li>
      <h2>{props.index.name}</h2>
      <p>{props.index.description}</p>
      <a href={props.index.html_url}>Click aqui para acessar o respositorio</a>
      
    </li>
  );
};
