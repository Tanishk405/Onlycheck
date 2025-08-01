import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="nf-footer">
      <div className="nf-footer-top">
        <p>
          Questions? Call <a href="tel:1-844-505-2993">1-844-505-2993</a>
        </p>
      </div>

      <ul className="nf-footer-links">
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com/support/412">FAQ</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com">Help Center</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="/youraccount">Account</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://media.netflix.com">Media Center</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="http://ir.netflix.com">Investor Relations</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://jobs.netflix.com/jobs">Jobs</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="/redeem">Redeem Gift Cards</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="/gift-cards">Buy Gift Cards</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="/watch">Ways to Watch</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com/legal/privacy">Privacy</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="/cookiepreferences">Cookie Preferences</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com/legal/corpinfo">
            Corporate Information
          </a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com/contactus">Contact Us</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://fast.com">Speed Test</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://www.netflix.com/browse/genre/839338">
            Only on Netflix
          </a>
        </li>
        <li className="nf-footer-link-item">
          <a href="https://help.netflix.com/legal/ad-choices">Ad Choices</a>
        </li>
      </ul>

      <div className="nf-language-selector">
        <svg
          className="language-icon-footer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
            fill="white"
          ></path>
        </svg>
        <select className="form-select-footer">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      <div className="nf-footer-copyright">Netflix, Inc.</div>
    </footer>
  );
}

export default Footer;
