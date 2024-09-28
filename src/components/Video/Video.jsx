import React from "react";
import styled from "styled-components";

import image1 from "../../assets/video images/img 1.png";
import image2 from "../../assets/video images/img 2.png";
import image3 from "../../assets/video images/img 3.png";
import image4 from "../../assets/video images/img 4.png";
import image5 from "../../assets/video images/img 5.png";
import image6 from "../../assets/video images/img 6.png";
import image7 from "../../assets/video images/img 7.png";
import image8 from "../../assets/video images/img 8.png";
import image9 from "../../assets/video images/img 9.png";
import image10 from "../../assets/video images/img 10.png";
import image11 from "../../assets/video images/img 11.png";
import image12 from "../../assets/video images/img 12.png";
import image13 from "../../assets/video images/img 13.png";
import image14 from "../../assets/video images/img 14.png";
import image15 from "../../assets/video images/img 15.png";

const images = [
  { src: image1, link: "https://youtu.be/tWoHL_f3C9k?si=gtLkjD7HE7d2rvSB" },
  {
    src: image2,
    link: "https://youtube.com/shorts/O3waS-pRBFo?si=_wZ8wbscxESVfkJ2",
  },
  {
    src: image3,
    link: "https://youtube.com/shorts/xFY2Ikk7eTU?si=QholgbMoSDQvLo5f",
  },
  {
    src: image4,
    link: "https://youtube.com/shorts/UEbj0Q_bBa0?si=WHEOzdhP0j-8ZNZJ",
  },
  {
    src: image5,
    link: "https://https://youtube.com/shorts/QbqkR7Lh9q0?si=2NjhxWi_bo3bFrHx",
  },
  {
    src: image6,
    link: "https://youtube.com/shorts/9gPcW28lX3I?si=wTebu7p4XN3ted0T",
  },
  { src: image7, link: "https://youtu.be/UyLvfYEWIBg?si=RmsNP9t_uGigwxCb" },
  {
    src: image8,
    link: "https://youtube.com/shorts/ry03t_YFWtA?si=gHqRBfccfYLS4w-K",
  },
  {
    src: image9,
    link: "https://youtube.com/shorts/c80cZOmHmu4?si=s8CLDqxOmVlTyRBQ",
  },
  // { src: image10, link: "https://youtu.be/70U3v_ZHHu0?si=TARd0DQuy4sT0-84" },
];

const ImageGrid = () => {
  return (
    <Grid>
      {images.map((item, index) => (
        <ImageLink
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={item.src} alt={`image-${index}`} />
        </ImageLink>
      ))}
    </Grid>
  );
};

export default ImageGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(20rem, 1fr)
  ); /* Responsive grid */
  gap: 15px; /* Adjust the spacing between grid items */
  padding: 20px;
`;

const ImageLink = styled.a`
  text-decoration: none; /* Remove underline */
  display: block; /* Ensure image fills the grid cell */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures images cover the space without distortion */
  border-radius: 10px; /* Gives a nice rounded border */
  border: 2px solid #ccc; /* Light gray border */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effects */
  cursor: pointer;

  &:hover {
    transform: scale(1.05); /* Slight zoom-in effect */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adds a shadow on hover */
    border-color: #007bff; /* Change border color on hover */
  }
`;
