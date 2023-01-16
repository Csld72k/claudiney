import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/csld72k.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Claudiney Silva</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}