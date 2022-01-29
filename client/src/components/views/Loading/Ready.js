import React, { useEffect, useState } from "react";

export const Ready = () => {
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 200);
  }, []);

  return <div></div>;
};
