import Carousel from "react-bootstrap/Carousel";
import React from "react";

export const PreviewProjects = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>NiceSnippets.com slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>NiceSnippets.com slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>NiceSnippets.com slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
