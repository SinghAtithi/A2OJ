import React, { useState, useEffect } from 'react'

const ProgressBar = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleProgress);
        return () => window.removeEventListener("scroll", handleProgress);
    });

    const handleProgress = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight;
        const scroll = `${totalScroll / (windowHeight - document.documentElement.clientHeight) * 100}%`;
        setScroll(scroll);
    }

    return (
        <div
            style={{
                position: 'fixed',
                width: `${scroll}`,
                top: '0',
                left: '0',
                height: '3px',
                background: "#23c186",
                zIndex: '1000'
            }}
        />
    );
}

export default ProgressBar;