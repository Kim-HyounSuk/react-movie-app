import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  title: string;
  imgUrl: string;
}

const Card = ({ id, title, imgUrl }: CardProps) => {
  return (
    <Container>
      <Link to={`:${id}`}>
        <Wrapper>
          <Title>{title}</Title>
          <Img src={imgUrl} />
        </Wrapper>
      </Link>
    </Container>
  );
};

const Container = styled.li``;

const Wrapper = styled.div``;

const Title = styled.h2``;

const Img = styled.img``;

export default Card;
