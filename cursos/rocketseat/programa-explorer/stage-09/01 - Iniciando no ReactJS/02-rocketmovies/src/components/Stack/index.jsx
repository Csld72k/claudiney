import { Container } from "./style";
// import { FiStar } from "react-icons/fi";
import { Tag } from "../Tag";

export function Stack({ title, rating: Icon, description, tagTitle }) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>
        {<Icon className="star1 filled" size={20} />}
        {<Icon className="star2 filled" size={20} />}
        {<Icon className="star3 filled" size={20} />}
        {<Icon className="star4 filled" size={20} />}
        {<Icon className="star4 unfilled" size={20} />}
      </span>
      <p>{description}</p>
      <div>
        <Tag title={tagTitle[0]} />
        <Tag title={tagTitle[1]} />
        <Tag title={tagTitle[2]} />
      </div>
    </Container>
  );
}