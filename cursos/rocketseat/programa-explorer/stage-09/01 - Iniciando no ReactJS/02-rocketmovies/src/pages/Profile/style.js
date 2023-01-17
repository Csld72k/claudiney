import styled from "styled-components";

export const Container = styled.div`
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

    
  }
`;

export const Avatar = styled.div`

  > img {
    width: 18.6rem;
  }
  
  > label { 
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.colors.primary_color};
    border-radius: 50%;
    
    svg {
      color: ${({ theme }) => theme.colors.tag_background_dark};

      /* border: 4px solid ${({ theme }) => theme.colors.primary_color}; */
      border-radius: 50%;
  }
}
`;