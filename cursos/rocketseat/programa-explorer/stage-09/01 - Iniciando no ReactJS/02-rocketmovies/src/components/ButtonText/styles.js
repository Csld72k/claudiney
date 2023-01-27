import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  font-size: 1.6rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.primary_color};
`;