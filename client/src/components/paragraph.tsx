"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Paragraph() {
  const [hive, setHive] = useState<any | false>(false);

  console.log(axios.defaults.baseURL);

  useEffect(() => {
    async function getHive() {
      const res = await axios.get("/hive/gethive/theadamrock");
      console.log(res.data.hive);
      setHive(res.data.hive);
    }

    getHive();
  }, []);

  return (
    <div>
      <p>{hive.displayName}</p>
    </div>
  );
}
