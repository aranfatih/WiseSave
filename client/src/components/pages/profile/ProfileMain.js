import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileMain extends Component {
  render() {
    return (
      <div style={{ padding: "64px 40px 40px 40px" }}>
        <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>
          Savings
        </h1>
        <div>
          <div
            style={{
              padding: "16px 24px",
              border: "1px dashed black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12
              // marginBottom: 32
            }}
          >
            <h2 style={{ fontWeight: "bolder" }} z>
              <Link to="/New">Create New Saving</Link>
            </h2>
          </div>

          <Link to="/thread">
            <div
              className="hover-shadow"
              style={{
                padding: 16,
                color: "white",
                margin: "16px 0px",
                borderRadius: 12,
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(249,110,0,1) 0%, rgba(248,166,0,1) 100%)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Group Saving</h2>
                <p>today</p>
              </div>
              <div>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: 40,
                    margin: "20px 0px"
                  }}
                >
                  $200
                </h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Progress: Not Confirmed!</h2>
                <p>Tap for more info</p>
              </div>
            </div>
          </Link>

          <Link to="/thread/3ugH89">
            <div
              className="hover-shadow"
              style={{
                padding: 16,
                color: "white",
                margin: "16px 0px",
                borderRadius: 12,
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(229,185,0,1) 0%, rgba(122,209,0,1) 100%)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Group Saving</h2>
                <p>3 months ago</p>
              </div>
              <div>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: 40,
                    margin: "20px 0px"
                  }}
                >
                  $25
                </h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Progress: 64%</h2>
                <p>Tap for more info</p>
              </div>
            </div>
          </Link>

          <Link to="/thread">
            <div
              className="hover-shadow"
              style={{
                padding: 16,
                color: "#29bcff",
                margin: "16px 0px",
                borderRadius: 12,
                background: "white",

                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Group Saving</h2>
                <p>6 months ago</p>
              </div>
              <div>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: 40,
                    margin: "20px 0px"
                  }}
                >
                  $200
                </h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Progress: 100%</h2>
                <p>Tap for more info</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProfileMain;
