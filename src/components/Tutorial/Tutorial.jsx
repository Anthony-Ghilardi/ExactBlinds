import React from "react";
import "./tutorial.css";
import Navbar from "../Navbar/Navbar";
import InsideMountHelper from "../../images/InsideMountHelper.jpg";
import OutsideMountHelper from "../../images/OutsideMountHelper.jpg"

export default function Tutorial() {
  return (
    <div>
      <Navbar />
      <div className="tutorial-body-container">
        <article className="intro-article">
          <h1>Measuring your window</h1>
          <p>
            There are two ways in which Faux Wood, Cellular Shades, and Vinyl
            Blinds can be installed on a window. You may choose an Inside Mount
            or an Outside Mount, both of these require different measurements in
            order for a successful installation. Below you will find more
            details about how to measure your winodw for both of these
            installations.
          </p>
          <img className="inside-mount-image" src={InsideMountHelper} alt="Example image of inside mount measuremenets"/>
        </article>
        <article className="inside-mount-article">
          <h2>Inside Mount</h2>
          <p>
            What is an Inside Mount? An Inside mount is when the blind is
            mounted or installed on the inside of the window casing. To measure
            your window for an Inside Mount you should first measure the width
            of your window in three different places. Once you do so select the
            smallest of your three measurements to serve as your width. Next you
            will measure the length of your window. To do so measure from the
            top of the window opening to the top of the window sill. Next you
            check you local hardware store and select the blind of your choosing
            and the closest to your window size. In some cases your window size
            may not require the blinds to be cut, however in the case they do
            need to be cut select an option at the top of this page for your
            corresponding blind and enter the measurements of the blind you
            purchased along with the width of your current window. An estimated
            size for your window will be calculated.
          </p>
        </article>
        <article className="outside-mount-article">
          <h3>Outside Mount</h3>
          <p>
            What is an Outside Mount? An Outside Mount is when the blind is
            mounted or installed on the outside of the window casing. To measure
            your window for an Outside Mount you should first measure the exact
            width of the outside perimeter of the window casing. Then you must
            add a minimum of one and a half inches on both sides of the blind,
            totally three inches total for optimal light control and privacy.
            Next you will measure the length of the window, this is a more
            flexible mesurement as you are not restricted by the window sill.
            Measusre to a length which you find suitable, a three inch overlap
            is a reccomended overlap.
          </p>
          <img className="outside-mount-image" src={OutsideMountHelper} alt="Example image of outside mount measuremenets"/>
        </article>
      </div>
    </div>
  );
}
