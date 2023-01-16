import { Container } from "./style";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Header() {
  return (
    <Container>
      <a>RocketMovies</a>
      <Input placeholder="Pesquisar pelo título" type="text" icon={FiSearch} />
      <a className="profileWrapper">
        <span>
          <h2>Claudiney Silva</h2>
          <p>Sair</p>
        </span>
        <img src="https://github.com/csld72k.png" alt="Imagem de perfil." />
      </a>
    </Container>
  );
}