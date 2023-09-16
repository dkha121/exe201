import React from "react";
import logo from "./logo.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header id="brx-header" class="sticky scrolling">
      <div id="second-menunav" class="brxe-section">
        <div id="brxe-gctzol" class="brxe-container">
          <div id="brxe-lximlq" class="brxe-div">
            <Link
              id="brxe-dwcbzy"
              to="/"
              aria-current="page"
              class="brxe-block"
          >
              <img
                src={logo}
                class="brxe-svg"
                id="brxe-wyhuhi"
                fill="none"
                viewBox="0 0 70 68"
                alt="logo"
              />
              <div id="brxe-qfsnks" class="brxe-div">
                <div id="brxe-wfbglv" class="brxe-text-basic">
                  Leonardo
                </div>
                <div id="brxe-ounicz" class="brxe-text-basic rad-color-full">
                  .Ai
                </div>
              </div>
            </Link>
          </div>
          <div id="brxe-kacpqv" class="brxe-div">
            <div id="brxe-cytspe" data-script-id="cytspe" class="brxe-nav-menu">
              <nav class="bricks-nav-menu-wrapper never">
                <ul id="menu-main-v2" class="bricks-nav-menu">
                  <li
                    id="menu-item-3263"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3263 bricks-menu-item"
                  >
                    <a href="https://leonardo.ai/faq/">FAQ</a>
                  </li>
                  <li
                    id="menu-item-3070"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3070 bricks-menu-item"
                  >
                    <a href="https://leonardo.ai/contact-us/">Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              id="brxe-sfbpzd"
              data-script-id="sfbpzd"
              class="brxe-code"
              data-interactions='[{"id":"hahteq","trigger":"click","action":"startAnimation","target":"popup","templateId":"2206","animationType":"slideInRight","animationDuration":".1s"}]'
              data-interaction-id="507c61"
            >
              <svg viewBox="0 0 10 8" width="22">
                <path
                  d="M1 1h8M1 4h 8M1 7h8"
                  stroke="#fff"
                  stroke-width="1"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <span
              id="brxe-zihfzv"
              class="brxe-button btn-bg-prim bricks-button md bricks-background-primary"
            >
              Launch App
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
