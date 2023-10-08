import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const location = useLocation();

  return (
    <Container>
      <Items>
        <Link to='/popular'>
          <Item cur='/popular'>
            POPULAR
            {location?.pathname.startsWith('/popular') && (
              <Circle layoutId='circle' layout={true} />
            )}
          </Item>
        </Link>
        <Link to='/coming-soon'>
          <Item cur='/coming-soon'>
            COMING SOON
            {location?.pathname.startsWith('/coming-soon') && (
              <Circle layoutId='circle' layout={true} />
            )}
          </Item>
        </Link>
        <Link to='/now-playing'>
          <Item cur='/now-playing'>
            NOW PLAYING
            {location?.pathname.startsWith('/now-playing') && (
              <Circle layoutId='circle' layout={true} />
            )}
          </Item>
        </Link>
      </Items>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  padding-top: 2.5rem;
  background-color: ${(props) => props.theme.bgColor};
  z-index: 99;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding-bottom: 1.5rem;
`;

const Item = styled.li<{ cur: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      !location?.pathname.startsWith(props.cur) ? props.theme.semiBgColor : 'inherit'};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  bottom: -1rem;
  background-color: ${(props) => props.theme.textColor};
`;

export default Header;
