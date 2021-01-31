import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import "./Title.css";

function Title() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    window.addEventListener('load', function () {
        var app = document.getElementById('description');
        var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75,
          });

          typewriter
            .pauseFor(10)
            .typeString('Over 85 million people in the U.S. are affected by skin diseases alone.')
            .pauseFor(1000)
            .typeString(' A whopping 50% of Americans over the age of 65, have more than one skin disease.')
            .pauseFor(1000)
            .typeString(' To address this issue, we have designed a skin detection AI app that will allow you to scan your skin whenever you want to stay healthy.')
            .pauseFor(5000)
            .start();

    });

    return(
        <div className="col1" style={{display:"grid", gridTemplateColumns:"0.5fr 1fr 1fr 1fr 0.5fr"}}>
            <div className="Parallax__background" style={{transform: `translateY(-${offsetY *0.30}px)`}}>
                <div className="description__card">
                    <p id="description" style={{textAlign:"left", fontSize:"2vh"}}/>
                </div>
            </div>
        </div>

    )

}

export default Title;
