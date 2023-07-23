import { Container, Content, Logo } from "./styles";
import logo_gray from '../../assets/logo_gray.svg'

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo>
          <div className="logo">
            <img src={logo_gray} alt="" />
            <span>Food Explorer</span>
          </div>
        </Logo>

        <p>
          © 2023 - Todos os direitos reservados.
        </p>

      </Content>
    </Container>
  );
}
