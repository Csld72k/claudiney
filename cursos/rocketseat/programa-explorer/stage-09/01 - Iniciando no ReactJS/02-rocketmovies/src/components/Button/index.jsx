import { Container } from './style';

export function Button({ icon: Icon, title, buttonDark }) {
  return (
    <Container buttonDark={buttonDark}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}