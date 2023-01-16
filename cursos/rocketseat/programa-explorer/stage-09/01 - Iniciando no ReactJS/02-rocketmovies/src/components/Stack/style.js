import styled from "styled-components";

export const Container = styled.div`
  width: 123rem;
  margin: 0 auto;
  padding: 2.5rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: right;

  background-color: ${({ theme }) => theme.colors.stack_background};
  border-radius: 1.6rem;

  > h2 {
    margin-bottom: .8rem;
    
    font-size: 2.4rem;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.white_light};
  }

  > span {
    margin-bottom: 1.5rem;
    display: flex;
    gap: .6rem ;
    
    color: ${({ theme }) => theme.colors.primary_color};

    svg.unfilled {
      fill: transparent;
    }

    svg.filled {
      fill: ${({ theme }) => theme.colors.primary_color};
    }
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.white_dark};
  }

  > div {
    margin-top: 2.5rem;
    display: flex;
    gap: .8rem;
  }
`;