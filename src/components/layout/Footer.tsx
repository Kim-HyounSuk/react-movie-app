import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Text>© 2023 Vanlan. All rights reserved.</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

export default Footer;
