import React from "react";
import logo from "../../assets/logo-xl.png";
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png'


const Footer = () => {
  return (
    <div className="bg-pri-green py-6">
      <div className="container-main">
        <footer className=" footer footer-horizontal footer-center  text-primary-content p-10">
          <aside>
            <img src={logo} alt="" />
            <p>
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <hr />
          </aside>
          <nav>
            <h2 className="text-xl font-semibold">Social Links</h2>
            <div className="grid grid-flow-col gap-4">
              <a>
                <img src={Facebook} alt="" />
              </a>
              <a>
                  <img src={Instagram} alt="" />
              </a>
              <a>
                  <img src={Twitter} alt="" />
              </a>
            </div>
          </nav>
        </footer>
        <div className="divider "></div>
        <div className="flex justify-between text-sm text-gray-300">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <div className="space-x-2.5">
            <a href="*">Privacy Policy</a>
            <a href="*">Teams of Service</a>
            <a href="*">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
