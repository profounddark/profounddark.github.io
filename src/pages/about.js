import React from "react";
import Layout from "../components/layout";
import style from "./about.module.css";
import headShot from "../images/andrew_official.jpg";

export default function Home() {
  return (
    <Layout>
      <h2>About Me</h2>
      <p>My name is Andrew Asplund. Although I've had quite a few "professions," I've found a recent interest
        (and, arguably, a knack) for web development. Although my initial focus was on front-end web development
        (via a web dev certificate program at <a href="https://seattleu.edu">Seattle University</a>, I have tried
        to expand my skillset beyond that.</p>
        <img src={headShot} className={style.headShot} alt="My official instructor headshot" />

      <h2>About this Page</h2>
      <p>After a year of using a basic Boostrap template for my portfolio, I thought it seemed like a good time 
        to get my act together and build a new personal home page, blog, and portfolio.</p>
      <h2>Origin Story</h2>
      <p>The name <em>profounddark.dev</em> is based on a name I've used for years for a variety of things. It comes from the 1993/95 Sega Genesis game <a href="https://en.wikipedia.org/wiki/Phantasy_Star_IV">Phantasy Star IV: The End of the Millenium</a>.</p>

      
    </Layout>
  )
}
