import { IAPIResponse, ICategory, apiMap, makeImagePath } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import { Outlet, useLocation, useMatch } from 'react-router-dom';
import { Card, Loading } from '@/components';
import { motion } from 'framer-motion';

const CardList = () => {
  const category = [...useLocation().pathname.split('/').slice(1)][0];
  const { data, isLoading } = useQuery<IAPIResponse>([category], () =>
    apiMap[category as ICategory['category']](),
  );
  const movieMatch = useMatch(`${category}/:id`);

  return (
    <Container>
      {isLoading ? (
        <Wrap>
          <Loading />
        </Wrap>
      ) : (
        <Wrapper variants={variant} initial='hidden' animate='visible'>
          {data?.results?.map((movie) => {
            return (
              <Card
                key={movie.id}
                category={category}
                id={movie.id}
                title={movie.title}
                imgUrl={makeImagePath(movie.poster_path)}
              />
            );
          })}
        </Wrapper>
      )}
      {movieMatch ? <Outlet /> : null}
    </Container>
  );
};

const variant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  gap: 2rem;
  grid-row-gap: 4rem;
`;

export default CardList;
