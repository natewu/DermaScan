import React, { useState, useEffect } from 'react';

function Title() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return(
        <div className="Parallax__background" style={{transform: `translateY(-${offsetY *0.35}px)`, color:'black', fontWeight:"350", gridColumn:"2", gridRow:"2"}}>
            <p>
                Random description stuff goes here. random description, description
            </p>
        </div>
    
    )
}

export default Title;