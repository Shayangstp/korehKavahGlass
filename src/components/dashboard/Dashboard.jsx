import React from "react";
// import logo from "../img/logo/kavelogo.png";

const card = [
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
  {
    header: "کارخانه بلور کاوه",
    number: "5",
    // logo: logo,
    year: 1350,
    type: "بلور",
    location: "تهران میدان انقلاب نرسیده ب آزادی",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-header d-flex justify-content-between align-items-center">
        <h3>صفحه اصلی </h3>
        <button className="btn btn-primary  m-2">خروج</button>
      </div>

      <div className="parent-card d-flex justify-content-start align-items-center gap-3 flex-wrap flex-row border-top p-3 w-100 ">
        {card.map((item, index) => (
          <div key={index} className="cards col-sm-4 col-md-3 m-auto p-3   ">
            {/* <img src={logo} alt="logo" className=" d-block img-fluid m-auto " /> */}
            <h4 className="my-3"> {item.header}</h4>
            <p>
              سال تاسیس: <span className="fw-bold fs-6 ">{item.year}</span>
            </p>
            <p className="my-3">
              تعدادکوره: <span className="fw-bold fs-6 ">{item.number}</span>
            </p>
            <p className="my-3">
              نوع : <span className="fw-bold fs-6 ">{item.type}</span>
            </p>
            <p className="my-3">
              محل: <span className="fw-bold fs-6 ">{item.location}</span>
            </p>
            <button className="btn btn-primary "> نمایش کوره</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
