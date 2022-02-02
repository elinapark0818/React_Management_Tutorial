import "./App.css";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "박엘리나",
    birthday: "920604",
    gender: "여자",
    job: "취준생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "이쁜영서님",
    birthday: "941212",
    gender: "여자",
    job: "취준생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "멋진영빈님",
    birthday: "890620",
    gender: "남자",
    job: "프로그래머",
  },
  {
    id: 4,
    image: "https://placeimg.com/64/64/4",
    name: "막내현걸님",
    birthday: "960915",
    gender: "남자",
    job: "대학생",
  },
];

function App(props) {
  const { classes } = props;
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
          {customers.map((c, idx) => {
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
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);

// {customers.map((c, idx) => {
//   return (
//     <Customer
//       key={idx}
//       id={c.id}
//       image={c.image}
//       name={c.name}
//       birthday={c.birthday}
//       gender={c.gender}
//       job={c.job}
//     />
//   );
// })}
