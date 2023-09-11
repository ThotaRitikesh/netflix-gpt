import React, { useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteNowPlaying";
import CommonBodyInfiniteScroll from "../CommonBodyInfiniteScroll";
import Header from "../Header";

const TvShows = () => {
  const [card, setCard] = useState([]);
  const url = "trending/tv/day?";
  useInfiniteScroll({ setCard, url });
  return <>
  <Header/>
  <CommonBodyInfiniteScroll card={card} title={"Tv Shows"} />
  </>;
};

export default TvShows;
