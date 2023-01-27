import { Link } from "react-router-dom";
import { Container } from "./style";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Header() {
  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      <Input placeholder="Pesquisar pelo título" type="text" icon={FiSearch} />
      <Link className="profileWrapper" to="/profile">
        <span>
          <h2>Claudiney Silva</h2>
          <p>Sair</p>
        </span>
        <img src="https://github.com/csld72k.png" alt="Imagem de perfil." />
      </Link>
    </Container>
  );
}