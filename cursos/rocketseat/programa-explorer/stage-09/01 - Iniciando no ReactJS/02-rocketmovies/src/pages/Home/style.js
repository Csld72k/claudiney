import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "header"
  "header2"
  "stacks";
  grid-area: header;
  
  background-color: ${({ theme }) => theme.colors.background};

  > div.header {
    width: 100%;
    margin: 4rem 0 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 84rem;
    grid-area: header2;
    
    h1 {
      font-size: 3.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.colors.white};
    }

    button {
      width: 20.7rem;
      height: 4.8rem;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.6rem;
      font-weight: 400;

      color: ${({ theme }) => theme.colors.background};

      svg {
      margin-right: .8rem;
      }
      
    }
  }

  > div.stack-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    grid-area: stacks;
    overflow-y: scroll;
  }
`;