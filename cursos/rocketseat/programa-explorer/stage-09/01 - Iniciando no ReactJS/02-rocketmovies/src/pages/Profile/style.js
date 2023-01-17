import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};

  > header {
    height: 14.4rem;
    padding-left: 16.8rem;
    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.stack_background};

    a {     
      font-size: 1.6rem;
      font-weight: 400;
      
      color: ${({ theme }) => theme.colors.primary_color};

      svg {
        margin-right: .8rem;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.inputContainer {
      display: flex;
      flex-direction: column;
      gap: .8rem;

      /* &:nth-child(4) {
        display: none;
        margin-top: 1.6rem;
      } */

      div.input {
        width: 34rem;
        height: 5.6rem;

        &:nth-child(3) {
        margin-top: 1.6rem;
      }

        }
          
      button {
        margin-top: 2.4rem;

        font-size: 1.6rem;
        font-weight: 500;
        
        color: ${({ theme }) => theme.colors.tag_background_dark};
      }
    }
  }
`;

export const Avatar = styled.div`
  margin-bottom: 6.4rem;
  position: relative;

  > img {
    width: 18.6rem;
    margin-top: -9rem;
  }
  
  > label { 
    width: 4.8rem;
    height: 4.8rem;
    position: absolute;
    bottom: .7rem;
    right: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary_color};
    border-radius: 50%;
    
    svg {
      color: ${({ theme }) => theme.colors.tag_background_dark};
    }

    div {
      display: none;
    }
}
`;