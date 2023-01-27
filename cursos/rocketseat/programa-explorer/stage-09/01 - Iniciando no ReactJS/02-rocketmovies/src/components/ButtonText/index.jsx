import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, target, ...rest }) {
  return (
    <Container type="button" to={target}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}