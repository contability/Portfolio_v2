import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const useScroll = (e : any) => {
    const [scrollY, setScrollY] = useState<number>(0);

    const listener = () => {
        setScrollY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        }
    });

    return scrollY;
};

const useOnScreen = (ref : any) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    useEffect(() => {
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [])

    return isIntersecting;
}

/**
 * 화면 넘어갈 때 반짝
 * @param locationHash 넘어갈 routing url {string}
 */
const useMoveLocation : Function = (locationHash: string) => {
    navigate(locationHash);
};

export { 
    useScroll
    ,useOnScreen,
    useMoveLocation
};
