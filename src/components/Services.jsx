import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.jpg";
import img4 from "../assets/6.jpg";

function Services() {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Frontend Developer</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Technical Support Support</p>
        </div>
        <div>
          <img src={img4} alt="Item4" />
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
