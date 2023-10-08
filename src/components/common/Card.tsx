import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CardProps {
  id: number;
  title: string;
  imgUrl: string;
  category: string;
}

const Card = ({ id, category, title, imgUrl }: CardProps) => {
  const navigate = useNavigate();
  const onCardClicked = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <Container variants={variant}>
      <Img
        layoutId={`${category}_${id}`}
        whileHover={{ y: -20 }}
        initial={{ y: 0 }}
        onClick={() => onCardClicked(id)}
        src={imgUrl}
      />
      <Title>{title}</Title>
    </Container>
  );
};

const variant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Container = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h2`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export default Card;
