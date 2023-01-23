import { Container } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Stack } from "../../components/Stack";
import { FiArrowLeft, FiClock, FiStar } from "react-icons/fi";

export function MovieDetails() {
  return (
    <Container>
      <Header />
      <div className="container">
        <div className="info">
          <ButtonText title="Voltar" icon={FiArrowLeft} />

          <div>
            <h1>Interstellar</h1>
            <div className="rating">
              {<FiStar className="star1 filled" size={20} />}
              {<FiStar className="star2 filled" size={20} />}
              {<FiStar className="star3 filled" size={20} />}
              {<FiStar className="star4 filled" size={20} />}
              {<FiStar className="star4 unfilled" size={20} />}
            </div>
          </div>

          <span>
            <img src="https://github.com/csld72k.png" alt="Imagem de perfil." />
            <p>Por Claudiney Silva</p>
            <FiClock />
            <p>23/01/2023 às 08:00</p>
          </span>



        </div>
      </div>
    </Container>
  );
}