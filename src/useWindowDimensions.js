import {useState, useEffect} from "react";

function getWindowDimensions() {
    const {innerWidth: widthScreen, innerHeight: height} = window;
    return {
        widthScreen,
        height,
    };
}

//A custom hook to get dimensios of the window and handle resizing.
export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
