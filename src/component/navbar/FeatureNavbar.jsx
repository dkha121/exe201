import React from "react";
import logo1 from "./logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faClapperboard,
  faCoins,
  faCube,
  faDatabase,
  faGear,
  faHouse,
  faPalette,
  faPeopleGroup,
  faPerson,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./FeatureNavbar.css";
import {
  faApple,
  faDiscord,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function FeatureNavbar() {
  return (
    <div className="flex flex-col px-2 pt-8">
      <div className="flex flex-col justify-center items-center">
        <Link to="/">
          <button className="flex">
            <div className="w-6 h-6 mr-1">
              <img src={logo1} alt="" />
            </div>
            <p id="brxe-wfbglv" class="brxe-text-basic">
              YourMage
            </p>
            <p id="brxe-ounicz" class="brxe-text-basic rad-color-full">
              .Ai
            </p>
          </button>
        </Link>

        <div className=" mt-4 flex justify-between items-center bg-[#141c2d] px-4 py-2 rounded-3xl">
          <div className="flex items-center text-sm">
            <p className="mr-1 text-white">150</p>
            <FontAwesomeIcon icon={faCoins} className="text-yellow-500 mr-2" />
          </div>
          <p className="w-[1px] font-bold h-5 rounded-md bg-gray-400 mr-2"></p>
          <button className="gradient text-sm text-white px-2 py-1  rounded-md h-2/3">
            Upgrade
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-start">
        <h2 className="text-sm px-4">Start Here</h2>
        <Link to="/features">
          <button className="text-sm flex items-center mt-2 px-4 py-1">
            <FontAwesomeIcon className="mr-2" icon={faHouse} />
            <p>Home</p>
          </button>
        </Link>
        <button className="text-sm flex items-center mt-2 px-4 py-1">
          <FontAwesomeIcon className="mr-2" icon={faPeopleGroup} />
          <p>Comunity Feed</p>
        </button>
        <button className="text-sm flex items-center mt-2 px-4 py-1">
          <FontAwesomeIcon className="mr-2" icon={faPerson} />

          <p>Personal Feed</p>
        </button>
        <button className="text-sm flex items-center mt-2 px-4 py-1">
          <FontAwesomeIcon className="mr-2" icon={faDatabase} />
          <p>Training & Datasets</p>
        </button>
        <button className="text-sm flex items-center mt-2 px-4 py-1">
          <FontAwesomeIcon className="mr-2" icon={faCube} />
          <p>Finetuned Models</p>
        </button>
      </div>
      <div className="mt-10 flex flex-col items-start">
        <h2 className="text-sm px-4">User Tools</h2>
        <Link to="ai-generation">
          <button className="text-sm flex items-center mt-2 px-4 py-2">
            <FontAwesomeIcon className="mr-2" icon={faPalette} />
            <p>AI Image Generation</p>
          </button>
        </Link>
        <button className="text-sm flex items-center mt-2 px-4 py-2">
          <FontAwesomeIcon className="mr-2" icon={faClapperboard} />
          <p>AI Canvas</p>
        </button>
        <button className="text-sm flex items-center mt-2 px-4 py-2">
          <FontAwesomeIcon className="mr-2" icon={faCube} />
          <p>Texture Generation</p>
        </button>
      </div>
      <div className="mt-6 flex flex-col items-start">
        <div className="flex flex-col mb-4 items-start">
          <button className="text-sm flex items-center mt-2 px-4 py-2">
            <FontAwesomeIcon className="mr-2" icon={faGear} />
            <p>Setting</p>
          </button>
          <button className="text-sm flex items-center mt-2 px-4 py-2">
            <FontAwesomeIcon className="mr-2" icon={faCircleQuestion} />

            <p>FAQ & Help</p>
          </button>
        </div>
        <div>
          <button className="px-4 flex items-center">
            <div className="h-10 w-10 mr-2 rounded-full">
              <img
                className="h-full w-full rounded-full"
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/338907404_958055142202200_8468921168827551143_n.jpg?stp=cp6_dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=fe8171&_nc_ohc=N2xuDxneq10AX9anwlA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDko-QcvkRBAv0I8AX-3CUpZAz89ujqZD6HngxRc51VTQ&oe=65115339"
                alt=""
              />
            </div>
            <p className="text-sm text-white font-bold">duongkhavuive</p>
          </button>
          <button className="text-sm flex items-center mt-2 px-4 py-2">
            <FontAwesomeIcon
              className="mr-2 rotate-180"
              icon={faRightFromBracket}
            />

            <p>Logout</p>
          </button>
        </div>
      </div>
      <div className="mt-2 mb-4 flex flex-col items-center justify-center">
        <p className="text-xs">Term of service</p>
        <div className="mt-1 flex justify-between text-xs">
          <a href="https://discord.com/">
            <FontAwesomeIcon className="mr-2" icon={faDiscord} />
          </a>
          <a href="https://www.reddit.com/">
            <FontAwesomeIcon className="mr-2" icon={faReddit} />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon className="mr-2" icon={faTwitter} />
          </a>
          <a href="https://www.apple.com/">
            <FontAwesomeIcon className="" icon={faApple} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeatureNavbar;
