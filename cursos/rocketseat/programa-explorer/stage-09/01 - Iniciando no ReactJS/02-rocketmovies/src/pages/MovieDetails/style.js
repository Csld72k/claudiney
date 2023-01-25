import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas: 
  "header"
  "content";
  
  background-color: ${({ theme }) => theme.colors.background};

  header {
    grid-area: header;
  }
  
  > .container {
    width: 122rem;
    margin: 0 auto;
    grid-area: content;
    overflow-y: auto;

    a[type=button] {
      margin: 4rem 0 2.4rem;
      display: flex;
    }

    .title {
      height: 100%;
      display: flex;
      align-items: center;
    
      h1 {
        font-size: 3.6rem;
        font-weight: 500;
        
        color: ${({ theme }) => theme.colors.white_light};
      }

      .rating {
        margin: .9rem 0 0 2rem;
      }
    }

    .postInfo {
      margin-top: 2.4rem;
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.colors.white_light};

      img {
        width: 1.6rem;
        margin-right: .8rem;
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;
      }

      svg {
        margin: 0 .8rem;
        
        color: ${({ theme }) => theme.colors.primary_color};
      }
    }

    .tags {
      margin-top: 4rem;
      display: flex;
      gap: .8rem;

      div {
        background-color: ${({ theme }) => theme.colors.tag_background};
      }
    }

    .notes {     
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      
      font-size: 1.6rem;
      font-weight: 400;
      text-align: justify;
      
      color: ${({ theme }) => theme.colors.white_light};
    }

  }
`;