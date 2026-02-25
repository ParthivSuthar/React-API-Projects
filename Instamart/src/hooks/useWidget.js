import { useEffect, useState } from "react";
import { CATEGORY_URL } from "../utils/constants";

export function useWidget() {
  const [widget, setWidget] = useState([]);

  async function fetchWidget() {
    try {
      const response = await fetch(CATEGORY_URL);
      const data = await response.json();
      // console.log(data?.data?.cards);
      setWidget(data?.data?.cards);
    } catch (error) {
      console.error("Failed to fetch", error.message);
    }
  }

  useEffect(() => {
    fetchWidget();
  }, []);

  return { widget, setWidget };
}


