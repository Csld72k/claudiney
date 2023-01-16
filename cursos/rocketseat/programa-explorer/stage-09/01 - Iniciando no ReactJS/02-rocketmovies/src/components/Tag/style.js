import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: .5rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.tag_background_dark};
  color: ${({ theme }) => theme.colors.tag_text};
  border-radius: .8rem;
`;