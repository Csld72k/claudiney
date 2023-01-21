import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: .5rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isActive }) => isActive ? theme.colors.tag_background_dark : "transparent"};
  color: ${({ theme, isActive }) => isActive ? theme.colors.tag_text : theme.colors.input_placeholder};
  border: ${({ theme, isActive }) => isActive ? "transparent" : `2px dashed ${theme.colors.input_placeholder}`};
  border-radius: .8rem;
`;