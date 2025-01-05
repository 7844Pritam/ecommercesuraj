
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ec from "../assets/img2.png";
import ec1 from "../assets/img3.jpg";
function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };  
  return (
    <Slider {...settings}>
      <div>
        <img src={ec} />
      </div>
      <div>
        <img src={ec1} />
      </div>
      <div>
        <img src={ec} />
      </div>
      <div>
        <img src={ec1} />
      </div>
      <div>
        <img src={ec} />
      </div>
    </Slider>
  );
}

export default MainSlider;
