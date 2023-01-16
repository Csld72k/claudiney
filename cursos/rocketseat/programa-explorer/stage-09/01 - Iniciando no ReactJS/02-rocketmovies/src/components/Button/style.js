import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  font-size: 1.6rem;
  font-weight: 500;
  
  background-color: ${({ theme }) => theme.colors.primary_color};
  border-radius: 1rem;
`;