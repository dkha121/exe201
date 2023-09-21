import "./Content.css";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div id="brxe-zechoz" class="brxe-container">
     
      <div id="brxe-vdnoer" class="brxe-div">
        
      </div>
      <img width="750" height="750" src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1.png" 
      class="brxe-image absolute css-filter size-full brf-reset-transition" alt="" decoding="async" loading="eager" 
      id="brxe-qiciuo" srcset="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1.png 1280w,
       https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1-300x300.png 300w, https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1-1024x1024.png 1024w, https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1-150x150.png 150w, https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1-768x768.png 768w, https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1-500x500.png 500w, https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1-800x800.png 800w" 
       sizes="(max-width: 1280px) 100vw, 1280px" span="translate: none; rotate: none; scale: none; transform: translate3d(28.5153px, 0px, 0px); float: right;"  />
      <div id="brxe-hmsdrh" class="brxe-block">

        <div id="brxe-bgbdnv" class="brxe-block flex">
      
       
          <h1 class="h1-home">
            Unleash your <span class="h1-700 rad-color-2">Creativity</span> with
            the power of <span class="h1-700 rad-color-1">YourMage Ai </span>
          </h1>
          <h2 id="brxe-ukrozz" class="brxe-heading">
            Create production-quality visual assets for your projects with
            unprecedented quality, speed, and style-consistency.
          </h2>
          <div id="brxe-qkfbcb" class="brxe-block">
            <div id="brxe-fbuord" class="brxe-div">
              <Link to={"/login"}   class="brxe-button btn-bg-prim bricks-button md bricks-background-primary">Create an account</Link>
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
          <h1 class="h1-home">Image go here</h1>
        </div>
      </div>
    </div>
  );
}
export default Content;
