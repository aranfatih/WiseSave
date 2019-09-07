import { InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateNew extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 0, goal: 0, openModal: false, plan: 0, period: 3 };
  }

  render() {
    return (
      <div style={{ padding: "64px 40px 40px 40px" }}>
        <h1 style={{ fontSize: 28, fontWeight: "bold" }}>Create New</h1>
        <div
          style={{
            marginTop: 20,
            width: "100%",
            display: "flex"
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={e => this.setState({ type: 0 })}
            style={{ marginRight: 20 }}
          >
            Random
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={e => this.setState({ type: 1 })}
          >
            Invite
          </Button>
        </div>
        <h1
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 64,
            marginBottom: 8
          }}
        >
          Amount
        </h1>

        {this.state.type === 1 ? (
          <div style={{ marginTop: 32 }}>
            <TextField
              id="standard-name"
              label="Goal ($)"
              value={this.state.goal}
              onChange={e => this.setState({ goal: e.target.value })}
              margin="normal"
              type="number"
            />

            <InputLabel style={{ marginTop: 32 }} htmlFor="age-simple">
              Period
            </InputLabel>
            <Select
              value={this.state.period}
              onChange={e => this.setState({ period: e.target.value })}
              inputProps={{
                name: "Period",
                id: "age-simple"
              }}
            >
              <MenuItem value={1}>Weekly</MenuItem>
              <MenuItem value={2}>Every other week</MenuItem>
              <MenuItem value={3}>Monthly</MenuItem>
            </Select>

            <div
              style={{
                marginTop: 24,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,161,255,1) 0%, rgba(41,188,255,1) 100%)",
                marginBottom: 16,
                color: "white",
                padding: 24,
                borderRadius: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div>
                <div
                  style={{
                    background: "#5BCBFF",
                    borderRadius: 16,
                    padding: "12px 24px"
                  }}
                >
                  <h1>Invitation Code: 24Up7E</h1>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 16
                  }}
                >
                  <button
                    className="buttonn"
                    style={{ background: "white", color: "black" }}
                  >
                    COPY
                  </button>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Or join a thread with Invitation code</p>
              <TextField
                id="standard-name"
                label="Invitation Code"
                value={this.state.invitationCode}
                onChange={e => this.setState({ goal: e.target.value })}
                margin="normal"
                type="number"
              />
              <button className="buttonn">Join</button>
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,161,255,1) 0%, rgba(41,188,255,1) 100%)",
                marginBottom: 16,
                padding: 28,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: 14
              }}
            >
              <button
                className="buttonn whitebtn"
                onClick={e => this.startThread(e)}
              >
                25$
              </button>
              <button
                className="buttonn whitebtn"
                onClick={e => this.startThread(e)}
              >
                200$
              </button>
              <button
                className="buttonn whitebtn"
                onClick={e => this.startThread(e)}
              >
                500$
              </button>
              <button
                className="buttonn whitebtn"
                onClick={e => this.startThread(e)}
              >
                1000$
              </button>
            </div>
            {/* <button className="buttonn" style={{ width: "100%" }}>
    CONFIRM
  </button> */}
          </div>
        )}

        <Dialog
          open={this.state.openModal}
          onClose={e => this.setState({ openModal: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Succefully matched in a game"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We've Succefully matched you in a group of 5 people in a{" "}
              {this.state.plan} thread. Please see your list of threads and
              confirm to start the match.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={e => this.setState({ openModal: false })}
              color="primary"
            >
              <Link to="/Profile">Go to my threads</Link>
            </Button>
            <Button
              onClick={e => this.setState({ openModal: false })}
              color="primary"
              autoFocus
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  startThread(plan) {
    this.setState({ openModal: true, plan: plan.target.value });
  }
}

export default CreateNew;
