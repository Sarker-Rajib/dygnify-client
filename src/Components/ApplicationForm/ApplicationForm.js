import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const [pDvisible, setpDVisible] = useState(true);
  const [bDvisible, setbDVisible] = useState(false);
  const [lDvisible, setlDVisible] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [familyMembers, setfamilyMembers] = useState();
  const [currentAddress, setCurrentAddress] = useState();
  const [permanentAddress, setPermanentAddress] = useState();
  const [businessName, setBusinessName] = useState();
  const [businessType, setBusinessType] = useState();
  const [GSTno, setGSTno] = useState();
  const [companyName, setCompanyName] = useState();
  const [employeCount, setEmployeCount] = useState();
  const [companyAddress, setCompanyAddress] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [interest, setInterest] = useState();
  const [tenure, setTenure] = useState();
  const [installment, setInstallment] = useState();

  const navigate = useNavigate();

  const submitApplication = () => {
    const userData = {
      name: firstName + " " + lastName,
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
    };

    fetch("http://localhost:8000/application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("application was successfully submited");
        }
      });

    // console.log(userData);
    navigate("/applications");
  };

  return (
    <div className="container py-5">
      <h2 className="pb-4">Loan Application </h2>
      <div
        style={{ boxShadow: "0px 0px 15px 5px rgba(15, 200, 255, 0.5)" }}
        className="rounded overflow-hidden p-3"
      >
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              onClick={() => {
                setbDVisible(false);
                setlDVisible(false);
                setpDVisible(true);
              }}
              className={`${pDvisible ? "nav-link active" : "nav-link"}`}
            >
              Personal Details
            </button>
          </li>

          <li className="nav-item">
            <button
              //   onClick={() => {
              //     setpDVisible(false);
              //     setlDVisible(false);
              //     setbDVisible(true);
              //   }}
              className={`${bDvisible ? "nav-link active" : "nav-link"}`}
            >
              Business Details
            </button>
          </li>

          <li className="nav-item">
            <button
              //   onClick={() => {
              //     setpDVisible(false);
              //     setbDVisible(false);
              //     setlDVisible(true);
              //   }}
              className={`${lDvisible ? "nav-link active" : "nav-link"}`}
            >
              Loan Application Data
            </button>
          </li>
        </ul>

        <div className="p-3 border-bottom border-start border-end">
          {pDvisible && (
            <div>
              <p className="text-warning">
                Please fill up all the fields to go next step
              </p>
              <form>
                <div className="personal-details">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>First Name</label>
                      <input
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Last Name</label>
                      <input
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Contact Number</label>
                      <input
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Email</label>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Age</label>
                      <input
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Family Members</label>
                      <input
                        onChange={(e) => {
                          setfamilyMembers(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Current Address</label>
                      <input
                        onChange={(e) => {
                          setCurrentAddress(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Permanent Address</label>
                      <input
                        onChange={(e) => {
                          setPermanentAddress(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-end">
                <button
                  onClick={() => {
                    setpDVisible(false);
                    setlDVisible(false);
                    setbDVisible(true);
                  }}
                  disabled={
                    !(
                      firstName &&
                      lastName &&
                      number &&
                      email &&
                      age &&
                      familyMembers &&
                      currentAddress &&
                      permanentAddress
                    )
                  }
                  className="btn px-4 py-2 border bg-success text-white"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {bDvisible && (
            <div>
              <p className="text-warning">
                Please fill up all the fields to go next step
              </p>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Business Name</label>
                    <input
                      onChange={(e) => {
                        setBusinessName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Business Type</label>
                    <input
                      onChange={(e) => {
                        setBusinessType(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>GST No</label>
                    <input
                      onChange={(e) => {
                        setGSTno(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Company Name</label>
                    <input
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>No. of emplyee</label>
                    <input
                      onChange={(e) => {
                        setEmployeCount(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Company Address</label>
                    <input
                      onChange={(e) => {
                        setCompanyAddress(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="text-end">
                <button
                  onClick={() => {
                    setpDVisible(false);
                    setbDVisible(false);
                    setlDVisible(true);
                  }}
                  disabled={
                    !(
                      businessName &&
                      businessType &&
                      GSTno &&
                      companyName &&
                      employeCount &&
                      companyAddress
                    )
                  }
                  className="btn border px-4 py-2 bg-success text-white"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {lDvisible && (
            <div>
              <p className="text-warning">
                Please fill up all the fields to go next step
              </p>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Loan Amount</label>
                    <input
                      onChange={(e) => {
                        setLoanAmount(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Loan Interest</label>
                    <input
                      onChange={(e) => {
                        setInterest(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Tenure (In Month)</label>
                    <input
                      onChange={(e) => {
                        setTenure(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Installment (per Month)</label>
                    <input
                      onChange={(e) => {
                        setInstallment(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="text-end">
                <button
                  onClick={submitApplication}
                  disabled={!(loanAmount && interest && tenure && installment)}
                  className="btn px-4 py-2 border bg-success text-white"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
