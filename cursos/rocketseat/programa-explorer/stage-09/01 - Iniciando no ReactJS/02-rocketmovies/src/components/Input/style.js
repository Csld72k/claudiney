import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  padding: 0 1.7rem;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.input_background};
  border-radius: 1rem;

  > input {
    width: 100%;

    font-size: 1.6rem;
    font-weight: 400;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.white_light};

  &::placeholder {
    color: ${({ theme }) => theme.colors.input_placeholder};
  }
  
  
  }

  > svg {
    margin-right: 1.7rem;
  }
`;

