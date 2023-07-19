import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  // faEnvelope,
  // faPhone,
  // faGift,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Screen from "./screenone";

const Form = () => {
  const [formValue, setFormValue] = useState({
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="points-task w-75">
        <MDBValidation className="myform  col-10 mx-auto">
          <MDBValidationItem
            className="col-md-6 mb-4 w-100 my-item"
            feedback="Please provide a valid email."
            invalid
          >
            <FontAwesomeIcon
              icon={faSearch}
              color="gray"
              className="Icon_"
            ></FontAwesomeIcon>
            {/* <FontAwesomeIcon icon={faEnvelope} color="gray" className="Icon_2"></FontAwesomeIcon> */}
            <MDBInput
              value={formValue.email}
              name="email"
              onChange={onChange}
              id="validationCustom03"
              required
              label="Eimal"
              autoComplete="off"
            />
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-6 w-100 my-item"
            feedback="Please provide a valid phone number"
            invalid
          >
            <FontAwesomeIcon
              icon={faSearch}
              color="gray"
              className="Icon_"
            ></FontAwesomeIcon>
            {/* <FontAwesomeIcon icon={faPhone} color="gray" className="Icon_2"></FontAwesomeIcon> */}
            <MDBInput
              value={formValue.text}
              name="phone"
              onChange={onChange}
              id="validationCustom05"
              required
              label="Phone"
              autoComplete="off"
            />
          </MDBValidationItem>
          <h4 className="mt-4">قم بادخال قيمه النقاط المستبدله للعميل</h4>
          <MDBValidationItem
            className="col-md-6 w-100 my-item"
            feedback="Please provide a valid points"
            invalid
          >
            <FontAwesomeIcon
              icon={faSearch}
              color="gray"
              className="Icon_"
            ></FontAwesomeIcon>
            {/* <FontAwesomeIcon icon={faGift} color="gray" className="Icon_2"></FontAwesomeIcon> */}
            <MDBInput
              value={formValue.text}
              name="عدد النقاط"
              onChange={onChange}
              id="validationCustom04"
              required
              label="Points"
            />
          </MDBValidationItem>
          <div className="col-12 mt-5">
            <MDBBtn type="submit" className="mx-3 my-2">
                <a href="/home" className="text-white">Home</a>
            </MDBBtn>
            <MDBBtn type="reset" className="mx-3 my-2">
              Reset form
            </MDBBtn>
          </div>
        </MDBValidation>
      </div>
    </>
  );
};

export default Form;
