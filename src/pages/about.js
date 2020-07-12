import React from "react"
import Layout from "../components/layout"
import style from "./about.module.css"
import headShot from "../images/andrew_official.jpg"

export default function Home() {
  return (
    <Layout>
      <h2 className={style.headline}>About Me</h2>
      <p>Hello! My name is Andrew! I am a web developer living in Seattle, WA (USA).</p>
      <img
        src={headShot}
        className={style.headShot}
        alt="My official instructor headshot"
      />
      <p>
        I started into web development in the lates 1990s, building pages in HTML for school projects and a local record company. I got a little sidetracked for a while, but I got back into into web dev via a web dev certificate program at <a href="https://seattleu.edu">Seattle University</a>. Since then, I also became a web development instructor for beginner front-end web developers.
      </p>
      <hr class="stylized"/>
      <h2 className={style.headline}>About this Page</h2>
      <p>
        After a year of using a basic Boostrap template for my portfolio, I thought it seemed like a good time to get my act together and build a new personal home page, blog, and portfolio. The site is built in <a href="https://www.gatsbyjs.org/">GatsbyJS</a>. It's still a work in progress though. This portfolio is my first project using GatsbyJS or React, so there's a bit of a learning curve.
      </p>
      <p>
        The name <em>profounddark.dev</em> is actually a reference from the 1993/95 Sega Genesis game <a href="https://en.wikipedia.org/wiki/Phantasy_Star_IV">Phantasy Star IV: The End of the Millenium</a>. It was the name I gave to my very first personal website that I built. Since then, I've used it for a variety of sites (including <a href="https://twitter.com/profounddark">Twitter</a> and <a href="https://github.com/profounddark">GitHub</a>).
      </p>
    </Layout>
  )
}
