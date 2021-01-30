import "./Footer.css";
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div style={{margin:"0 auto"}}>
                    <a href="https://github.com/natewu/DermaScan" target="_blank" without rel="noreferrer" style={{textDecoration:"none", color: "white"}}>
                        <GitHubIcon/> <p>Source Code</p>
                    </a>
                </div>
                
            </div>
            
        </div>
    )
}
