import * as React from "react"
import Footer from "../components/footer";
import favicon from "../images/favicon.png";
// import BlogIndex from "../pages/index";
// import Bio from "../components/bio";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Link to="/">
          <img src={favicon} className="logo-img" />
        </Link>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default Layout
