import { Container } from "./style";

export function Tag({ title, icon: Icon, isActive }) {
  return (
    <Container isActive={isActive}>
      {title}
      {Icon && <Icon size={20} />}
    </Container>
  );
}