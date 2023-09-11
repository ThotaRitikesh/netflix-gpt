import React, { useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteNowPlaying";
import CommonBodyInfiniteScroll from "../CommonBodyInfiniteScroll";
import Header from "../Header";

const UpComing = () => {
  const [card, setCard] = useState([]);
  const url = "movie/upcoming?";
  useInfiniteScroll({ setCard, url });
  return <>
  <Header/>
  <CommonBodyInfiniteScroll card={card} title={"UpComing Movies"} />
  </>;
};

export default UpComing;
