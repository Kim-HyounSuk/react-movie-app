import { IAPIResponse, getPopular, makeImagePath } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Outlet, useMatch } from 'react-router-dom';
import { Card } from '@/components';

interface CardListProps {
  category: string;
}

const CardList = ({ category }: CardListProps) => {
  const { data, isLoading } = useQuery<IAPIResponse>([`${category}`], getPopular);
  const movieMatch = useMatch(`${category}/:id`);

  return (
    <Container>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        data?.results?.map((movie) => {
          return (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={makeImagePath(movie.poster_path)}
            />
          );
        })
      )}
      <AnimatePresence>
        {movieMatch ? (
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div``;

const OutletWrapper = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  background-color: red;
  top: 9rem;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export default CardList;
