import { useEffect } from "react";

import axios from "axios";

export default function HomepageContent() {
  const handleRequest = () => {
    const response = axios
      .get(
        "https://api.bitbucket.org/2.0/repositories/allintra/teste-front-end/src/main/docs/homepage.md"
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    return response;
  };

  useEffect(() => {
    handleRequest();
  }, []);
}
