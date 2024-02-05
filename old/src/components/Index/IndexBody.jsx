import React, { useState, useEffect } from "react";
import './IndexBody.css';
import topImage from "../../images/capanno.jpg";
import svgLogo from "../../images/logo.svg";

export default function IndexBody() {
    const [loaded, setLoaded] = useState(false);
    const [showText, setShowText] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const img = new Image();
        img.src = topImage;
        img.onload = () => {
            setLoaded(true);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowText(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > scrollY) {
                setShowText(false);
            } else if (currentScrollY < scrollY) {
                setShowText(true);
            }
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <>
            <div id="container">
                <div className={`top-part ${loaded ? 'loaded' : ''}`}>
                    <img className="top-image" src={topImage} alt="NON VA NULLA EHEAD" />
                    <div className="top-part-text">
                        <div className={`top-text ${showText ? 'show' : ''}`}>
                            <img src={svgLogo} alt="logo-home" style={{ width: "10%", borderRadius: "15px" }} />
                            <h3>T.R.L. Express S.R.L.</h3>
                            {/* <p>Asap fast shipment</p> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
