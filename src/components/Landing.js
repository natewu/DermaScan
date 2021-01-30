import { Parallax } from 'react-scroll-parallax';

const Landing = () => (
    <div className="landing">
        <Parallax className="custom-class" y={[-70, 70]} tagOuter="figure">
            <img src="./DermaScan.svg" alt="DermaScan" width="300vw" height="300vh"/>
        </Parallax>
    </div>
);

export default Landing