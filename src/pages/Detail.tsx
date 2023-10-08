import { IMovieDetail, getMovie, makeBgPath } from '@/api';
import { Loading } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
  const [category, id] = [...useLocation().pathname.split('/').slice(1)];
  const { data, isLoading } = useQuery<IMovieDetail>([id], () => getMovie<IMovieDetail>(id));
  const navigate = useNavigate();
  const onOverylayClicked = () => navigate(-1);

  return (
    <AnimatePresence>
      <Overlay onClick={onOverylayClicked} exit={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <Container
        key={`${category}_${id}`}
        layoutId={`${category}_${id}`}
        imgUrl={makeBgPath(data?.backdrop_path || '')}
      >
        {isLoading ? (
          <Wrap>
            <Loading />
          </Wrap>
        ) : (
          <>
            <Button onClick={onOverylayClicked}>
              <svg
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z'
                />
              </svg>
            </Button>
            <Wrapper>
              <Title>{data?.title}</Title>
              <Overview>{data?.overview}</Overview>
              <Info>
                <span>Budget: ${data?.budget.toLocaleString()}</span>
                <span>Revenue: ${data?.revenue.toLocaleString()}</span>
                <span>Runtime: {data?.runtime} minutes</span>
                <span>Rating: {Math.floor((data?.vote_average || 0) * 10) / 10}</span>
                <span>
                  Homepage: <a href={data?.homepage}>{data?.homepage}</a>
                </span>
              </Info>
            </Wrapper>
          </>
        )}
      </Container>
    </AnimatePresence>
  );
};

const Container = styled(motion.div)<{ imgUrl: string }>`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  position: fixed;
  width: 70%;
  height: 80%;
  top: 6.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.semiBgColor};
  border-radius: 1rem;
  background-image: linear-gradient(transparent, black), url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  cursor: pointer;
  z-index: 999;
`;

const Wrap = styled.div`
  position: fixed;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  position: absolute;
  color: ${(props) => props.theme.bgColor};
  width: 4rem;
  height: 4rem;
  top: 0.5rem;
  right: 1rem;
  &:hover {
    color: ${(props) => props.theme.semiBgColor};
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  font-weight: 600;
  margin-bottom: 4.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Overview = styled.p`
  font-size: 1.3rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  font-size: 1.2rem;
  span:last-child {
    display: inline-block;
    a {
      word-wrap: break-word;
      display: inline-block;
      max-width: 100%;
      &:hover {
        color: skyblue;
      }
    }
  }
`;

export default Detail;
