import "./App.css";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import { withStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    marginTop: theme.unit * 2,
  },
});

function App(props) {
  const { classes } = props;

  const [customers, setCustomers] = useState("");
  const [completed, setCompleted] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let complete = 0;
    let timer = setInterval(() => {
      if (complete >= 100) {
        complete = 0;
      } else {
        complete += 1;
      }
      setCompleted(complete);
      if (isLoading) {
        clearInterval(timer);
      }
    }, 20);

    callApi()
      .then((res) => {
        setCustomers(res);
      })
      .catch((err) => console.log(err));
  }, [isLoading]);

  const callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    setIsLoading(true);
    return body;
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers && isLoading ? (
            customers.map((c, idx) => {
              return (
                <Customer
                  key={idx}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress
                  className={classes.progress}
                  variant="indeterminate"
                  value={completed}
                  color="secondary"
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
