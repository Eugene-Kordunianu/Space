import { useContext, useEffect } from "react";

import Context from "../components/context/context";

export default function useScrollLogic() {
  const { setIsPlanetDown } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 350) {
        setIsPlanetDown("_planetDown");
      } else if (scrollPosition <= 0) {
        setIsPlanetDown("_planetUp");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsPlanetDown]);
}
