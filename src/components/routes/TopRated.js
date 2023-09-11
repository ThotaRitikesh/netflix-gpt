import React, { useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteNowPlaying";
import CommonBodyInfiniteScroll from "../CommonBodyInfiniteScroll";

const TopRated = () => {
  const [card, setCard] = useState([]);
  const url = "movie/top_rated?";
  useInfiniteScroll({ setCard, url });
  return <CommonBodyInfiniteScroll card={card} title={"Top Rated Movies"} />;
};

export default TopRated;
