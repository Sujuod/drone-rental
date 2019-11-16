import React from "react";
import DroneImg from "assets/images/drone1.png";

const layoutStyle = {
  background: `linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(54, 71, 68, 1) 0%,
    rgba(122, 227, 249, 1) 100%
  )`,
}

export default function LoginRegisterLayout({ children, title }) {
  return (
    <div style={layoutStyle} className="h-100">
      <div className="container mh-75 d-flex justify-content-center align-items-center">

        <div className="jumbotron jumbotron-fluid mt-5 w-75 mh-75 pt-2">
          <div className="container d-flex flex-column h-100">
            <h1 className="text-center font-weight-lighter mb-4">
              Rent a Drone
            </h1>
            <div className="text-center mb-4 mt-4">
              <img src={DroneImg} className="w-25" alt="logo" />
            </div>
            <h2 className="text-center font-weight-lighter mb-4">{title}</h2>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
