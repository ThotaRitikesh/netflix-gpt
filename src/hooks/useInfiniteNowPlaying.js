import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utiles/constants";

const useInfiniteScroll = ({ setCard, url }) => {
  const [page, setPage] = useState(1);

  const getCardData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/" + url + "page=" + page,
      API_OPTIONS
    );
    const data = await res.json();
    setCard((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
    getCardData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
};

export default useInfiniteScroll;
