import React, { useState } from 'react';
import Slider from "react-slick";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faArrowLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./contactcarpage.css"

const ContactCar = () => {
    const [showBasic, setShowBasic] = useState(false);
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block",marginTop:'-130px' }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style,display:'block',marginTop:'-130px'}}
          onClick={onClick}
        >
        </div>
        
      );
    }
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const settings2 = {
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1021,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return ( <>
   <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid className='ms-5 my_Nav'>
        <MDBNavbarBrand className='px-3'><img src="./carlogo.png" alt="car logo" width={50}/></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 ms-3'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Add Ads</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  More
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto me-3'>
            <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
            <MDBBtn style={{backgroundColor:'rgb(255, 123, 0)',border:'none'}} >Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <header className='my-header'>
     <div className='my-header-color'></div>
     <div className=' container my-header-content'>
            <div>
                <h1>مع كونتاكت كار تقدر تلاقى سياره احلامك وانت قاعد فى بيتك</h1>
                <button className='btn'>قسط عربيتك من هنا</button>
            </div>
     </div>
    </header>
    <div  className='col-10  slider_section'>
    <Slider {...settings}>
      <div className='slider_item_'>
        <div className='slider_item_small'>
          <h3>عربيات للبيع جديد ومستعمل</h3>
        <img src="/caricon1.png" alt="car" width={80}  className='img-fluid'/>
        <div className='slider_item_small_h5'>
          <h5>للبيع الفورى</h5>
          </div>
        </div>
        
      </div>
      <div className='slider_item_'>
        <div className='slider_item_small'>
          <h3>كاتالوج العربيات الجديده بافضل سعر</h3>
        <img src="/caricon2.png" alt="car" width={80}  className='img-fluid '/>
        <div className='slider_item_small_h5'>
          <h5>الاسعار الرسميه</h5>
          </div>
        </div>
        
      </div>
      <div className='slider_item_'>
        <div className='slider_item_small'>
          <h3>امن على عربيتك وخليك مطمن</h3>
        <img src="/safeicon.png" alt="car" width={90}  className='img-fluid'/>
        <div className='slider_item_small_h5'>
          <h5>اكثر امان</h5>
          </div>
        </div>
        
      </div>
      <div className='slider_item_'>
        <div className='slider_item_small'>
          <h3>عربيات للبيع جديد ومستعمل</h3>
        <img src="/caricon1.png" alt="car" width={80}  className='img-fluid'/>
        <div className='slider_item_small_h5'>
          <h5>للبيع الفورى</h5>
          </div>
        </div>
        
      </div>
      <div className='slider_item_'>
        <div className='slider_item_small'>
          <h3>عربيات للبيع جديد ومستعمل</h3>
        <img src="/caricon1.png" alt="car" width={80}  className='img-fluid'/>
        <div className='slider_item_small_h5'>
          <h5>للبيع الفورى</h5>
          </div>
        </div>
        
      </div>
      <div className='slider_item_'>
        <div className='slider_item_small'>
          <h3>عربيات للبيع جديد ومستعمل</h3>
        <img src="/caricon1.png" alt="car" width={80}  className='img-fluid'/>
        <div className='slider_item_small_h5'>
          <h5>للبيع الفورى</h5>
          </div>
        </div>
        
      </div>
    </Slider>
    </div>
    <div className='auto-section'>
<h4 className='text-end me-5 text-danger mb-5'>: التجار والمعارض</h4>
    <div className=' container- col-11  m-auto slider2_section'>
    <h5 className='mb-4'>عرض المزيد</h5>
    <Slider {...settings2}>
    <div className='slider_item_ h-75'>
        <div className='slider_item_small'>
          <h3>الليثى اوتو </h3>
        <img src="/photo3.png" alt="car" width={80}  className='img-fluid'/>
        </div>
    </div>
    <div className='slider_item_ h-75'>
        <div className='slider_item_small'>
          <h3>الامام موتورز</h3>
        <img src="/photo1.jpeg" alt="car" width={80}  className='img-fluid'/>
        </div>
    </div>
    <div className='slider_item_ h-75'>
        <div className='slider_item_small'>
          <h3>غندور اوتو</h3>
        <img src="/photo3.png" alt="car" width={80}  className='img-fluid'/>
        </div>
    </div>
    <div className='slider_item_ h-75'>
        <div className='slider_item_small'>
          <h3> اليثى اوتو</h3>
        <img src="/photo2.jpg" alt="car" width={80}  className='img-fluid'/>
        </div>
    </div>
    <div className='slider_item_ h-75'>
        <div className='slider_item_small'>
          <h3>غندور اوتو</h3>
        <img src="/photo3.png" alt="car" width={80}  className='img-fluid'/>
        </div>
    </div>
    <div className='slider_item_ h-75'>
        <div className='slider_item_small'>
          <h3>الامام موتورز</h3>
        <img src="/photo1.jpeg" alt="car" width={80}  className='img-fluid'/>
        </div>
    </div>
    <div className='slider_item_ h-75'>
        <div className='slider_item_small'>
          <h3>الليثى اوتو </h3>
        <img src="/photo3.png" alt="car" width={80}  className='img-fluid'/>
        </div>
    </div>
        </Slider>
        
    </div>
    </div>
    <div className='mt-5 container'>
      <div className='row justify-content-center mb-3'>
        <button className='btn btn-primary col-3 btn-one'>عربيات للبيع</button>
        <button className='btn btn-danger col-3 ms-2 btn-two'>كاتالوج جديد</button>
      </div>
      <div className='search-div'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrowleft'></FontAwesomeIcon>
      <button className='btn m-auto px-5'> <span>أبدا بحث مفصل </span>فى عربيات للبيع </button>
      <img src="/search.png"alt="search icon"/>
      </div>
      <form className='my-form'>
        <FontAwesomeIcon icon={faSearch} className='form-search-icon'></FontAwesomeIcon>
        <input type="text" placeholder='ابحث بأسم الشركه' className='text-end  mt-4 form-control px-5'/>
      </form>
    </div>
    </> );
}
 
export default ContactCar;