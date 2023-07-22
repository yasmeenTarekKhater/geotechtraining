import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import cartypedata from './cartype.json';
import { useState } from "react";
const CarSearchType = () => {
    const[searchTerm,SetsearchTerm]=useState("");
    const[clickitem,Setclickitem]=useState(0);
    const HandelClick=(index)=>{
        Setclickitem(index)
    }
    return ( <>
    <form className='my-form'>
    <FontAwesomeIcon icon={faSearch} className='form-search-icon'></FontAwesomeIcon>
    <input type="text" placeholder='ابحث بأسم الشركه' onChange={(event)=>{
        SetsearchTerm(event.target.value);
    }} className='text-end  mt-4 form-control '/>
    </form>
    <div className="container car_types_container mb-5">
        <div className="row justify-content-center">
            {
                cartypedata.filter((val) => {
                    if(searchTerm === ""){
                        return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                }).map(val=>{
                    return(
                    <div className={
                        clickitem ===val.id
                        ?'change mb-4 me-2 col-lg-2 col-md-3 col-5'
                        :'car_item mb-4 me-2 col-lg-2 col-md-3 col-5'
                    } key={val.id}
                    onClick={()=>HandelClick(parseInt(val.id))}>
                      <h4>{val.title}</h4>
                      <img src={val.image} alt="car"  className='img-fluid rounded-5'/>
                    </div>
                    )
                })
            }
        </div>
    </div>
    </> );
}
 
export default CarSearchType;