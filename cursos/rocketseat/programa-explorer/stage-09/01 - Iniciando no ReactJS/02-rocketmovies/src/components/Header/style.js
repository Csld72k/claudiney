import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12.8rem;

  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.tag_background_dark};

  > a {
    font-size: 2.4rem;
    font-weight: bold;
    
    color: ${({ theme }) => theme.colors.primary_color};
  }

  > div.input {
    width: 63rem;
    height: 5.6rem;
  }

  > a.profileWrapper {
    display: flex;
    align-items: center;
    gap: .9rem;

    span {
      text-align: end;

      h2 {
        font-size: 1.4rem;
        font-weight: bold;

        color: ${({ theme }) => theme.colors.white_light};
      }

      p {
        font-size: 1.4rem;
        font-weight: 400;

        color: ${({ theme }) => theme.colors.input_placeholder};
      }
    }

    img {
      width: 6.4rem;
    }
  }
`;