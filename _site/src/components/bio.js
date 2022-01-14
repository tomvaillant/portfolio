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
      <p>Hey, I'm Tom. I run Buried Signals, where we create visual essays and interactive documentaries for the web. 
      <br />
      <span id="bio-toggler" onClick={((e) => triggerBio(e.target))}>Read more &#128071;</span></p>   
      </div>
      <div className={bioClass}>
      <p>
      I’m a self-taught filmmaker, programmer and dog dad living in Zurich. In my spare time I run a non-profit called Wallrunners. Past gigs have found me leading teams on award-winning productions for Red Bull, Immersive Garden and North Kingdom. On rainy days I like to write stories about people in different worlds.
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
