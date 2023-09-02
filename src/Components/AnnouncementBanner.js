
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function AnnouncementBanner() {
  return (
    <div className="custom-carousel">
      <Carousel>
        <Carousel.Item interval={2000}>
          Free Shipping On All Orders          
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          20% OFF On All Items          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AnnouncementBanner;