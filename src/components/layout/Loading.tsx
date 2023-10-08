import { motion } from 'framer-motion';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <Donut
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        animate={{ rotate: 360, transition: { duration: 0.5, repeat: Infinity } }}
      >
        <circle cx='50' cy='50' r='45' fill='transparent' stroke='#dfe6e9' strokeWidth='10' />
        <circle
          cx='50'
          cy='50'
          r='45'
          fill='transparent'
          stroke='#636e72'
          strokeWidth='10'
          strokeDasharray='70 207'
          strokeDashoffset='0'
        />
      </Donut>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Donut = styled(motion.svg)`
  width: 4rem;
  height: 4rem;
`;

export default Loading;
