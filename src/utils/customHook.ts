import { useEffect, useState } from "react";

const useScroll = (e : any) => {
    // const [scrollY, setScrollY] = useState<number>(0);

    // const listener = () => {
    //     setScrollY(window.pageYOffset);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", listener);
    //     return () => {
    //         window.removeEventListener("scroll", listener);
    //     }
    // });

    // return scrollY;

    let scrollTop = e.target.scrollTop;

};

const useOnScreen = (ref : any) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    // useEffect(() => {
    //     observer.observe(ref.current);
    //     return () => observer.disconnect();
    // }, [])

    return isIntersecting;
}

export { 
    useScroll
    ,useOnScreen
};