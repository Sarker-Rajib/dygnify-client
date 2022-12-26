import React from "react";

const ApplicationDisplayCard = ({ application, index }) => {
  const {
    name,
    number,
    email,
    age,
    familyMembers,
    currentAddress,
    permanentAddress,
    businessName,
    businessType,
    GSTno,
    companyName,
    employeCount,
    companyAddress,
    loanAmount,
    interest,
    tenure,
    installment,
  } = application;

  return (
    <div className="p-3 shadow-lg rounded mb-3 mb-lg-5">
      <p className="m-0">Application : {index}</p>
      <h6>
        Client Name: <span className="fs-4">{name}</span>
      </h6>
      <div className="row p-3">
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Contact Number : </p>
          <p>{number}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Email : </p>
          <p>{email}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Age : </p>
          <p>{age}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Family Members : </p>
          <p>{familyMembers}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Current Address : </p>
          <p>{currentAddress}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Permanent Address : </p>
          <p>{permanentAddress}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Business Name : </p>
          <p>{businessName}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Business Type : </p>
          <p>{businessType}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">GST no : </p>
          <p>{GSTno}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Company Name : </p>
          <p>{companyName}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Total Emplyee : </p>
          <p>{employeCount}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Company Address : </p>
          <p>{companyAddress}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Loan Amount : </p>
          <p>{loanAmount}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Interest (in percentage) : </p>
          <p>{interest}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Tenure (in month) : </p>
          <p>{tenure}</p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 border">
          <p className="m-0">Installment (per month) : </p>
          <p>{installment}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDisplayCard;
