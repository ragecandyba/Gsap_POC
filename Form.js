import React from "react";

function Form() {
  return (
    <>
      <div style={{ padding: "15px" }}>
        <div className="row">
          <div className="col-sm-6">
            <p style={{ color: "#ff3c78", fontSize: "18px" }}>INFORMATION</p>
            <div style={{ marginTop: "15px" }}>
              <p style={{ fontSize: "30px" }}>Contact Us</p>
              <p style={{ marginTop: "5px" }}>
                As you might expect of a company that began as a high-end
                interiors contractor, <br />
                we pay strict attention.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "30px" }}>USA</p>
              <p>
                195 E Parker Square Dr, Parker, CO 801
                <br />
                +43 982-314-0958
              </p>
            </div>
            <div>
              <p style={{ fontSize: "30px" }}>India</p>
              <p>
                HW95+C9C, Lorem ipsum dolor sit. <br />
                411014
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              style={{ flexDirection: "row", display: "flex" }}
              className="forminput"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  style={{ padding: "12px" }}
                />
              </div>
              <div style={{ marginLeft: "15px" }} className="emailmargin">
                <input
                  type="text"
                  placeholder="Email"
                  style={{ padding: "12px" }}
                />
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <textarea
                placeholder="Message"
                rows={6}
                cols={50}
                style={{ padding: "12px", resize: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
