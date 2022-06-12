import React from "react"

const Footer = () => (
    <div className="footer">
        <p>To get in touch, please send an email to tom@buriedsignals.com. I'm currently not taking on new projects, but feel free to <a href="https://linktr.ee/tomvaillant">connect with me</a> and I might know someone who can help.</p>
        <p>You can sign up for the Buried Signals newsletter, where I write about visual, immersive and open-source investigative journalism.</p>
        <div className="substack-embed">
            <iframe src="https://buriedsignals.substack.com/embed" width="300" height="90" frameBorder="0" scrolling="no" style={{marginBottom: "0px"}}></iframe>
        </div>
    </div>
)

export default Footer