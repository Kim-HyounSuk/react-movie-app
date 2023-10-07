import { IAPIResponse, getPopular, makeImagePath } from '@/api';
import { Card } from '@/components';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

const Popular = () => {
  const { data, isLoading } = useQuery<IAPIResponse>(['popular'], getPopular);

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
    </Container>
  );
};

const Container = styled.div``;

export default Popular;
