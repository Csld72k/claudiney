import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "header"
  "content";
  
  background-color: ${({ theme }) => theme.colors.background};

  > header {
    grid-area: header;
  }

  > .content {
    grid-area: content;
    overflow-y: auto;
  
    .container {
      width: 122rem;
      margin: 0 auto;
      
    
      a[type=button] {
        margin: 4rem 0 2.4rem;
        display: flex;
        gap: .8rem;
        align-items: center;
      }

      form {

        h2 {
          margin-bottom: 3rem;

          font-size: 3.6rem;
          font-weight: 500;
          
          color: ${({ theme }) => theme.colors.white_light};
        }

        .inputContainer {
          margin-bottom: 2rem;
          display: flex;
          gap: 4rem;

            input[type=number]::-webkit-outer-spin-button,
            input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            -moz-appearance:textfield;
            }

        }

        textarea {
          width: 100%;
          height: 27.4rem;
          padding: 1.9rem 1.6rem;

          font-size: 1.6rem;
          font-weight: 400;
          
          color: ${({ theme }) => theme.colors.white_light};
          background-color: ${({ theme }) => theme.colors.input_background};
          border-radius: 1rem;

          resize: none;
        }

        h3 {
          margin: 2.5rem 0 2.4rem;

          font-size: 2rem;
          font-weight: 400;
          
          color: ${({ theme }) => theme.colors.white_dark};
        }

        .tags {
          width: 100%;
          height: 8.8rem;
          padding: 1.6rem;
          display: flex;
          gap: 2.4rem;

          margin-bottom: 3rem;

          background-color: ${({ theme }) => theme.colors.tag_background_2};
          border-radius: .8rem;

          > div {
            width: fit-content;
            height: 5.6rem;
            display: flex;
            align-content: center;
            justify-content: center;
            gap: 1.6rem;
          }
          
          svg {          
            color: ${({ theme }) => theme.colors.primary_color};
          }
          
        }

        .buttonContainer {
          display: flex;
          gap: 4rem;
        }

      }
    }
  }
`;