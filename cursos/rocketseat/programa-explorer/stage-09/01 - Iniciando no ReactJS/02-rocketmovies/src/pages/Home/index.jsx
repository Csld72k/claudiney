import { Container } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Stack } from "../../components/Stack";
import { FiPlus, FiStar } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />

      <div className="header">
        <h1>Meus filmes</h1>
        <Button icon={FiPlus} title="Adicionar filme" />
      </div>

      <div className="stack-container">
        <Stack
          title="Interstellar"
          rating={FiStar}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend nibh imperdiet sollicitudin. Proin finibus sed lectus tempor sodales. Vestibulum vitae dapibus massa. Nunc nisi ex, sodales at vehicula blandit, semper placerat tellus. Morbi accumsan nibh sit amet tincidunt ullamcorp..."
          tagTitle={["Ficção científica", "Drama", "Família"]}
        />

        <Stack
          title="Interstellar"
          rating={FiStar}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend nibh imperdiet sollicitudin. Proin finibus sed lectus tempor sodales. Vestibulum vitae dapibus massa. Nunc nisi ex, sodales at vehicula blandit, semper placerat tellus. Morbi accumsan nibh sit amet tincidunt ullamcorp..."
          tagTitle={["Ficção científica", "Drama", "Família"]}
        />

        <Stack
          title="Interstellar"
          rating={FiStar}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend nibh imperdiet sollicitudin. Proin finibus sed lectus tempor sodales. Vestibulum vitae dapibus massa. Nunc nisi ex, sodales at vehicula blandit, semper placerat tellus. Morbi accumsan nibh sit amet tincidunt ullamcorp..."
          tagTitle={["Ficção científica", "Drama", "Família"]}
        />

        <Stack
          title="Interstellar"
          rating={FiStar}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend nibh imperdiet sollicitudin. Proin finibus sed lectus tempor sodales. Vestibulum vitae dapibus massa. Nunc nisi ex, sodales at vehicula blandit, semper placerat tellus. Morbi accumsan nibh sit amet tincidunt ullamcorp..."
          tagTitle={["Ficção científica", "Drama", "Família"]}
        />

        <Stack
          title="Interstellar"
          rating={FiStar}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend nibh imperdiet sollicitudin. Proin finibus sed lectus tempor sodales. Vestibulum vitae dapibus massa. Nunc nisi ex, sodales at vehicula blandit, semper placerat tellus. Morbi accumsan nibh sit amet tincidunt ullamcorp..."
          tagTitle={["Ficção científica", "Drama", "Família"]}
        />

        <Stack
          title="Interstellar"
          rating={FiStar}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend nibh imperdiet sollicitudin. Proin finibus sed lectus tempor sodales. Vestibulum vitae dapibus massa. Nunc nisi ex, sodales at vehicula blandit, semper placerat tellus. Morbi accumsan nibh sit amet tincidunt ullamcorp..."
          tagTitle={["Ficção científica", "Drama", "Família"]}
        />
      </div>

    </Container>
  );
}