import { Facebook, Instagram, Twitter, Linkedin } from 'react-bootstrap-icons';


function Footer() {


    return (
        <div class="footer">
            <div class="container">
            <p>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" ><Facebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin /></a>
            </p>
            <p>
                Copyright ©2020 All rights reserved 
            </p>
            </div>
        </div>
    )
}

export default Footer;