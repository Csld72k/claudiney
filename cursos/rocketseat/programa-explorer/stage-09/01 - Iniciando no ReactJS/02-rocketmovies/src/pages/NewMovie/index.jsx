import { Container } from "./style";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";

export function NewMovie() {
  return (
    <Container>
      <Header />

      <div className="content">
        <div className="container">
          <ButtonText title="Voltar" icon={FiArrowLeft} target="/" />
          <form>
            <h2>Novo Filme</h2>
            <div className="inputContainer">
              <Input type="text" placeholder="Título" />
              <Input type="number" placeholder="Sua nota (de 0 a 5)" min="0" max="5" />
            </div>
            <textarea placeholder="Observações"></textarea>
            <h3>Marcadores</h3>
            <div className="tags">
              <Tag title="React" icon={FiX} isActive />
              <Tag title="Novo marcador" icon={FiPlus} />
            </div>
            <div className="buttonContainer">
              <Button title="Excluir filme" buttonDark />
              <Button title="Salvar alterações" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}