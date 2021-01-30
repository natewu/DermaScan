import React, { useState, useEffect } from 'react';

function Title() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return(
        <div style={{display:"grid", gridTemplateColumns:"0.5fr 1fr 1fr 1fr 0.5fr"}}>
            <div className="Parallax__background" style={{transform: `translateY(-${offsetY *0.35}px)`, color:'black', fontWeight:"350", gridColumn:"2", marginTop:"40vh", marginBottom:"-15vh", paddingBottom:"10vh"}}>
                <p>
                    Random description stuff goes here. random description, description
                </p>
            </div>
        </div>
    
    )
}

export default Title;