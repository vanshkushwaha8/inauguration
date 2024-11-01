import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./App.css";
import ribbonImage from './assest/ribbon.png'; // Update with the correct path
import celebrationImage from './assest/mm.jpeg'; // Update with the correct path

function App() {
    const [cutRibbon, setCutRibbon] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showCelebrationImage, setShowCelebrationImage] = useState(true);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
    const [fixedImage, setFixedImage] = useState(false);
    // const audioRef = React.useRef(null);

    const handleRibbonCut = () => {
        setCutRibbon(true);
        // audioRef.current.play();
        setShowConfetti(true);

        // Start timers for three animation cycles, then fix image position
        setTimeout(() => {
            setFixedImage(true);
            setShowConfetti(false);
            setShowWelcomeMessage(false);  // Stop confetti after three cycles
        }, 9000);
         // 3 cycles of 3 seconds each
    };

    return (
        <div className="app">
            {showConfetti && <Confetti numberOfPieces={500} recycle />}

            {/* <audio ref={audioRef} src={process.env.PUBLIC_URL + "/assest/sound.mp3"} preload="auto" /> */}

            <div className="ribbon-container">
                <img src={ribbonImage} alt="Ribbon" className="ribbon-icon" />
                {!cutRibbon ? (
                    <button className="ribbon" onClick={handleRibbonCut}>
                        
                        <span className="scissor">✂️</span>
                    </button>
                ) : (
                    <>
                        {showCelebrationImage && (

                            <div className={`fullscreen-celebration ${fixedImage ? "fixed" : ""}`}>
                                <img src={celebrationImage} alt="Celebration" className="celebration-image" />
                            </div>
                        )}
                        {showWelcomeMessage && <h2 className="welcome-message">Welcome to Mastya Jeevan!</h2>}
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
