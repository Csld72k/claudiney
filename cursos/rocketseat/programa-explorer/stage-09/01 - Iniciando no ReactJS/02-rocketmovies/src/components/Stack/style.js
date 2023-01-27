import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
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