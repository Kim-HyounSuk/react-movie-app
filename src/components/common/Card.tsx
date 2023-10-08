import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  id: number;
  title: string;
  imgUrl: string;
}

const Card = ({ id, title, imgUrl }: CardProps) => {
  const navigate = useNavigate();
  const onCardClicked = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <Container onClick={() => onCardClicked(id)}>
      <Wrapper>
        <Title>{title}</Title>
        <Img src={imgUrl} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.li`
  cursor: pointer;
`;

const Wrapper = styled.div``;

const Title = styled.h2``;

const Img = styled.img``;

export default Card;
