import React from "react";
import "./tutorial.css";
import Navbar from "../Navbar/Navbar";
import InsideMountHelper from "../../images/InsideMountHelper.jpg";
import OutsideMountHelper from "../../images/OutsideMountHelper.jpg";

export default function Tutorial() {
  return (
    <div>
      <Navbar />
      <article className="intro-article">
        <h1>Measuring Your Window</h1>
        <p>
          There are two ways to install Faux Wood, Cellular Shades, and Vinyl
          Blinds on a window: Inside Mount and Outside Mount.
        </p>
        <p>
          Each method requires different measurements for a successful
          installation. Below, you'll find step-by-step instructions for
          measuring your window based on the mount type.
        </p>
      </article>

      <div className="tutorial-body-container">
        <article className="inside-mount-article">
          <h2>Inside Mount</h2>
          <p>
            An Inside Mount is when the blind is installed inside the window
            casing.
          </p>
          <p>
            <strong>Step 1:</strong> Measure the width of your window in three
            different places — top, middle, and bottom. Record the smallest of
            these three as your width.
          </p>
          <p>
            <strong>Step 2:</strong> Measure the length of your window from the
            top of the opening down to the window sill.
          </p>
          <p>
            <strong>Step 3:</strong> Visit your local hardware store and choose
            a blind closest to your measured size. In many cases, trimming may
            not be necessary.
          </p>
          <p>
            If trimming is required, click the option at the top of this page
            for your blind type and enter both the purchased blind size and your
            window's width to calculate the necessary cut.
          </p>
        </article>

        <div className="inside-mount-img-container">
          <img
            className="inside-mount-image"
            src={InsideMountHelper}
            alt="Example of inside mount measurements"
          />
        </div>

        <article className="outside-mount-article">
          <h2>Outside Mount</h2>
          <p>
            An Outside Mount is when the blind is installed on the outside of
            the window casing.
          </p>
          <p>
            <strong>Step 1:</strong> Measure the full width of the window casing
            from edge to edge. Then add 1.5 inches to both the left and right
            sides (3 inches total) to ensure full light coverage and better
            privacy.
          </p>
          <p>
            <strong>Step 2:</strong> Measure the height from the top of the
            casing down to your desired blind length. You’re not limited by a
            window sill, so choose a length that looks best. A 3-inch overlap is
            recommended.
          </p>
        </article>

        <div>
          <img
            className="outside-mount-image"
            src={OutsideMountHelper}
            alt="Example of outside mount measurements"
          />
        </div>
      </div>
    </div>
  );
}
