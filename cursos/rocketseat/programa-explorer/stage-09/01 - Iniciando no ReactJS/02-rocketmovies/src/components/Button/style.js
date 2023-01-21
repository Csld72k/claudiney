import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  font-size: 1.6rem;
  font-weight: 500;
  
  background-color: ${({ theme, buttonDark }) => buttonDark ? theme.colors.tag_background_2 : theme.colors.primary_color};
  color: ${({ theme, buttonDark }) => buttonDark ? theme.colors.primary_color : theme.colors.tag_background_dark};
  border-radius: 1rem;
`;