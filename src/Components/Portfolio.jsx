/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/waterfall.jpg";

const imageAltText = "image of a waterfall in africa";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "N Queens Chess Solver",
    description:
      "AI Local Search Algorithm, using Simulated Annealing in C++ to find a first available solution to placing N number of Queens on an N-sized Chess Board in a way that no other queen can attack each other.",
    url: "https://github.com/Aryanchaturvedi075/N-Queens-Chess-Solver",
  },
  {
    title: "Monte Carlo Tree Search Agent",
    description:
      "Designed a Monte Carlo Search Tree Agent with Upper Confidence Bound to compete in an algorithmic game contest.",
    url: "https://github.com/Aryanchaturvedi075/Monte_Carlo_Agent_COMP424_F2024",
  },
  {
    title: "Course Recommendation System for McGill University",
    description:
      "Developed a visually intuitive website in a team of 4 for McGill CS Majors to optimize their course selection process, created using Node.js, React, API Endpoints, and a Neo4j Database.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Sign Language Recognition Neural Network",
    description:
      "Created a Multi-Layer Perceptron using only Numpy and compared it against a pre-built Convolutional Neural Network in Keras to identify American Sign Language letters from Kaggle Dataset. Our model outperformed the CNN with an average accuracy of 99.5% against 94.6%",
    url: "https://github.com/Aryanchaturvedi075/Sign_Language_MNIST",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
