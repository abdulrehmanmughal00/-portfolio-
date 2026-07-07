"use client";

import { useEffect, useState } from "react";
import Styles from "./Loader.module.css";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${Styles.loader} ${hide ? Styles.hide : ""}`}>
      <div className={Styles.logo}>
        Wel<span className={Styles.span}>come</span>
      </div>
    </div>
  );
}
