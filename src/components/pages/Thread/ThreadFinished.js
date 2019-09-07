import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableCell } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

class ThreadFinished extends Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false, confirmed: false };
  }

  render() {
    return (
      <div style={{ padding: "64px 40px 40px 40px" }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>
            Saving ID: 3ugH89
          </h1>
          <h2 style={{ color: "#29BCFF", fontWeight: "bolder", fontSize: 20 }}>
            Plan: $200
          </h2>
          <p>Created Date: 3/17/2019</p>
          <p>Progress: 3 out of 5 withdraws</p>
        </div>

        <div style={{ marginTop: 16 }}>
          <Paper>
            <Table style={{ textAlign: "left" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Taken Amount</TableCell>
                  <TableCell align="right">Payed Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">Aran Fatih</TableCell>
                  <TableCell align="right">$0</TableCell>
                  <TableCell align="right">$800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Zardash Kaya</TableCell>
                  <TableCell align="right">$0</TableCell>
                  <TableCell align="right">$800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Akar Mahdi</TableCell>
                  <TableCell align="right">$0</TableCell>
                  <TableCell align="right">$800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">James May</TableCell>
                  <TableCell align="right">$1000</TableCell>
                  <TableCell align="right">$800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Linda Stewart</TableCell>
                  <TableCell align="right">$1000</TableCell>
                  <TableCell align="right">$800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <p style={{ margin: "16px 0px", color: "blue" }}>
            More info with detailed transactions{" "}
          </p>
        </div>

        <Dialog
          open={this.state.openModal}
          onClose={e => this.setState({ openModal: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to confirm starting this thread?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By clicking on YES, your connected payment method will subscribe
              to this saving and will take $200 each month until 2/7/2020.
              Please note that your first payment is right after you click on
              confirm!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={e =>
                this.setState({ openModal: false, confirmed: true })
              }
              color="primary"
            >
              YES
            </Button>
            <Button
              onClick={e => this.setState({ openModal: false })}
              color="primary"
              autoFocus
            >
              NO
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ThreadFinished;
