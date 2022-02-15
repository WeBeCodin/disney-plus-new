import { Container } from "postcss";
import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function MoviesList() {
  const movies = useSelector(selectMovies);
  return (
    <BoxContainer>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap>
              <img src={movie.cardImg} />
            </Wrap>
          ))}

        <Wrap key={movie.id}>
          <img src="/images/slider-scales.jpg" />
        </Wrap>
      </Content>
    </BoxContainer>
  );
}

export default MoviesList;

const BoxContainer = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.3);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
