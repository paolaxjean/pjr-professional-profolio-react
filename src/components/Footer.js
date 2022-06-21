import React from "react";

function Footer() {
    return (
        <footer style={{"text-align": "center"}} className="footer bg-light fixed-bottom">
            <ul>
                <li>
                <a href="https:/github.com/magiscoding2113">
                    <img className="github-img" src={""} alt="github logo" />
                </a>

                </li>
                <li>
                    {/* <a href="">
                        <img src={""} alt="linkedin logo"/>
                    </a> */}
                </li>
            </ul>
           
        </footer>
    )
}

export default Footer;