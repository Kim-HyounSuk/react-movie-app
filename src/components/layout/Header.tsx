import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const location = useLocation();

  return (
    <Container>
      <Items>
        <Link to='/popular'>
          <Item>POPULAR {location?.pathname.startsWith('/popular') && <Circle />}</Item>
        </Link>
        <Link to='/coming-soon'>
          <Item>COMING SOON {location?.pathname.startsWith('/coming-soon') && <Circle />}</Item>
        </Link>
        <Link to='/now-playing'>
          <Item>NOW PLAYING {location?.pathname.startsWith('/now-playing') && <Circle />}</Item>
        </Link>
      </Items>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Circle = styled.span`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  bottom: -1rem;
  background-color: ${(props) => props.theme.textColor};
`;

export default Header;
