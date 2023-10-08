import { CardList } from '@/components';
import styled from 'styled-components';

const Popular = () => {
  return (
    <Container>
      <CardList category='popular' />
    </Container>
  );
};

const Container = styled.div``;

export default Popular;
