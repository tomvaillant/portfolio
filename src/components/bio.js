import React, { useState } from 'react';
import { Link } from "gatsby";
// import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {

  const [readBio, setBioState] = useState(0);
  // const data = useStaticQuery(graphql`
  //   query BioQuery {
  //     site {
  //       siteMetadata {
  //         author {
  //           name
  //           summary
  //         }
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)
  
  console.log("statecheck", readBio);

  function triggerBio() {
    let bioToggler = document.getElementById("bio-toggler");
    if (readBio === 0) {
      setBioState(1);
      bioToggler.innerHTML = `Read less &#9757;&#65039;`;
    } else {
      setBioState(0);
      bioToggler.innerHTML = `Read more &#128071;`;
    }
  }
  
  const bioClass = (readBio === 0) ? "bio-hidden" : "bio-nothidden";

  return (
    <div className="bio">
      <div className="bio-description">
      <p>Hey, I'm Tom. 
      <br /><br />Visualising thoughts and sharing insights from a decade working as a creative producer in digital and film. I run Buried Signals, where we create visual essays and interactive documentaries for the web. 
      <br /><br />Born at <a href="https://www.wren.co/profile/tomvaillant" target="_blank" rel="noreferrer">357 PPM</a>. <span id="bio-toggler" onClick={((e) => triggerBio(e.target))}>Read more &#128071;</span></p>   
      </div>
      <div className={bioClass}>
      <p>
      Currently consulting as an exec creative producer at Immersive Garden, past gigs have found me leading teams on award-winning projects for Red Bull and North Kingdom. I’m a self-taught filmmaker, programmer and dog dad living in Zurich. On calm days I work on a non-profit called Wallrunners, write fiction or code the occasional experiment!
      <br /><br />
      I'm the sum of a few parts : an independent filmmaking background, multiple code bootcamps, a French-American upbringing and a childhood obsession for science-fiction.
      </p>
      </div>
      <div className="bio-buttons">
        <Link to="https://buriedsignals.com" target="_blank">
          <div className="bio-button">Buried Signals</div>
        </Link>
        <Link to="https://buriedsignals.com/studio" target="_blank">
          <div className="bio-button">Studio</div>
        </Link>
        <Link to="https://wallrunners.org" target="_blank">
          <div className="bio-button">Wallrunners</div>
        </Link>
        <Link to="https://www.linkedin.com/in/tomvaillant/" target="_blank">
          <div className="bio-button">Resumé</div>
        </Link>
        <Link to="https://linktr.ee/tomvaillant" target="_blank">
          <div className="bio-button">Connect <span>&#128075;</span></div>
        </Link>
      </div>
    </div>
  )
}

export default Bio
