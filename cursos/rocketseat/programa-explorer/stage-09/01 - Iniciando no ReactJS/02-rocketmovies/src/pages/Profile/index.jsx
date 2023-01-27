import { Link } from "react-router-dom";
import { Container, Avatar } from "./style";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>

      <header>
        <Link to="/" >
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <div>

        <Avatar>
          <img src="https://github.com/csld72k.png" alt="Imagem de perfil." />

          <label htmlFor="avatar">
            <FiCamera size={20} />
            <Input type="file" id="avatar" />
          </label>
        </Avatar>

        <div className="inputContainer">
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="text" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha atual" icon={FiLock} />
          <Input type="password" placeholder="Nova senha" icon={FiLock} />
          <Button title="Salvar" />
        </div>

      </div>
    </Container>
  );
}