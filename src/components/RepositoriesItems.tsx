// adding typing
type prosptype = {
  index: {
    name: string;
    description: string;
    html_url: string;
  };
};
export const RepositoriesItems = (props: prosptype) => {
  return (
    <li>
      <h2>{props.index.name}</h2>
      <p>{props.index.description}</p>
      <a href={props.index.html_url}>Click aqui para acessar o respositorio</a>
    </li>
  );
};
