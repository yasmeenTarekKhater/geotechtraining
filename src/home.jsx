import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="car-top">
            <h4>كاربلس-CarPlus</h4>
            <h2>نظام النقاط</h2>
        </div>
            <div className="car-middel">
                <h4>yasmeen tarek.....اهلا بيك</h4>
                <img src="/gift.jpg" alt="gift" width={190}/>
                <p>نظام النقاط من كار بلس هيخليك تكسب نقاط كتير مع كل تموينه لعربيتك وهتبدلها بخصومات وهدايا لعربيتك</p>
            </div>
            <div className="car-bottom">
                <h3>رصيد نقاطك</h3>
                <h1>30 <span>نقطه</span></h1>
                <h3><a href="/shimmer" className="text-white">Go to shimmer</a></h3>
            </div>
            <h3><a href="/figma">Go to figma desgin</a></h3>
      </div>
    </>
  );
};

export default Home;
