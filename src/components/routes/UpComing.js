import React, { useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteNowPlaying";
import CommonBodyInfiniteScroll from "../CommonBodyInfiniteScroll";

const UpComing = () => {
  const [card, setCard] = useState([]);
  const url = "movie/upcoming?";
  useInfiniteScroll({ setCard, url });
  return <CommonBodyInfiniteScroll card={card} title={"UpComing Movies"} />;
};

export default UpComing;
