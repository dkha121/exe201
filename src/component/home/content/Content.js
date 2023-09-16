import "./Content.css";
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div id="brxe-zechoz" class="brxe-container">
      <div id="brxe-vdnoer" class="brxe-div"></div>
      <div id="brxe-hmsdrh" class="brxe-block">
        <div id="brxe-bgbdnv" class="brxe-block absolute">
          <h1 class="h1-home">
            Unleash your <span class="h1-700 rad-color-1">Creativity</span> with
            the power of <span class="h1-700 rad-color-1">Leonardo Ai </span>
          </h1>
          <h2 id="brxe-ukrozz" class="brxe-heading">
            Create production-quality visual assets for your projects with
            unprecedented quality, speed, and style-consistency.
          </h2>
          <div id="brxe-qkfbcb" class="brxe-block">
            <div id="brxe-fbuord" class="brxe-div">
              <Link to={"/Login"}>Create an account</Link>
              {/* <a
                href="/Login"
                id="brxe-tvkqjj"
                class="brxe-button btn-bg-prim bricks-button md bricks-background-primary"
              >
                Create an account
              </a> */}
              <div id="brxe-zbjzkz" class="brxe-text-basic">
                No credit card needed
              </div>
            </div>
          </div>
        </div>
        <div id="brxe-ddsjs">
          <h1 class="h1-home">
            Image go here
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Content;
