import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: 50,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 15,
  },
  paper: {},
  actions: {
    display: "flex",
    flexDirection: "column",
  },
  goBack: {
    fontSize: 20,
    background: "black",
    margin: "0 5px",
  },
  delete: {
    fontSize: 15,
    background: "red",
    paddingBottom: 5,
    margin: 5,
  },
}));
