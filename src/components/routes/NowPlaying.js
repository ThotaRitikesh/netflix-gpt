import React, { useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteNowPlaying";
import CommonBodyInfiniteScroll from "../CommonBodyInfiniteScroll";
import Header from "../Header";

const NowPlaying = () => {
  const [card, setCard] = useState([]);
  const url = "movie/now_playing?";
  useInfiniteScroll({ setCard, url });

  return (
    <>
    <Header/>
      <CommonBodyInfiniteScroll card={card} title={"Now Playing"} />;
    </>
  );
};

export default NowPlaying;
