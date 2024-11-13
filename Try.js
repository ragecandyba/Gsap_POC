import React from "react";

const Try = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-5" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "16px" }}> We are experienced </p>

          <p style={{ fontSize: "28px" }}> Photographers</p>
        </div>
        <div className="col-md-7">
          <div className="columns">
            <div className="col-md-5" style={{ marginLeft: "55%" }}>
              <img
                src="https://quixy.com/wp-content/uploads/2021/09/Website-Builder.png"
                alt="img1"
              />
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-md-5">
                <img
                  src="https://quixy.com/wp-content/uploads/2021/09/Website-Builder.png"
                  alt="img1"
                />
              </div>
              <div className="col-md-5">
                <img
                  src="https://quixy.com/wp-content/uploads/2021/09/Website-Builder.png"
                  alt="img1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Try;
