import React from "react";
import { FaFacebook , FaInstagram ,FaTwitter , FaLinkedin} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";

const Footer =()=>{
    return(
       <div className="footer">
        <div className="contact">
          <h1>Contact us</h1>
          <div id="call">
           <FaPhone />
           <p>123-456-789</p>
          </div>
          <div id="mail">
            <MdOutlineMailOutline />
            <p>sample@gmail.com</p>
          </div>
        </div>
        <div className="media">
            <h2>Social media</h2>
            <div className="icons">
            <FaFacebook/>
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
            </div>
        </div>
        <div className="payment">
            <h2>Payment</h2>
            <div id="paymenticons">
            <FaGooglePay />
            <SiPaytm />
            <SiPhonepe />
            </div>
        </div>

       </div>
    )
}

export default Footer;