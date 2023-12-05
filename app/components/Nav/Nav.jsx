import React, { useEffect, useRef, useState } from "react";
import style from './nav.module.scss'

const items = [
  // {
  //   text: "Home",
  // },
  {
    text: "Skills",
  },
  {
    text: "Projects",
  },
  {
    text: "Contact",
  },
];

function Nav({ observerRefs }) {
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const onClick = (item, key) => {
    setVisibleKey(key);
  };

  const observerCallback = async (e, key) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  useEffect(() => {
    if (observerRefs.current?.length && observers.current) {
      Array.from(Array(10).keys()).forEach((_u, key) => {
        observers.current[key] = new IntersectionObserver((e) =>
          observerCallback(e, key)
        );
        if (observerRefs.current[key]) {
          observers.current[key].observe(observerRefs.current[key]);
        }
      });
    }
    return () =>
      observers.current?.forEach((observer) => observer?.current?.disconnect());
  }, [observerRefs, observers]);

  return (
    <>
      <div className={style.navigation}>
        <ul>
          <li>
            <a href='#home' className={style.text}>
              <span className={style.text}>&nbsp;Home&nbsp;</span>
              <span>&nbsp;Home&nbsp;</span>
            </a>
          </li>
          {items.map((item, key) => {
            return (
              <li
                name={item.text.toLowerCase()}
                key={`item-${key}`}
                className={`${key === visibleKey ? style.active : ""}`}
                onClick={() => onClick(item, key)}
              >
                <a href={`#${item.text.toLowerCase()}`}>
                  <span className={style.text}>&nbsp;{item.text}&nbsp;</span>
                  <span>&nbsp;{item.text}&nbsp;</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Nav;
