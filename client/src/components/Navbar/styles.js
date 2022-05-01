import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "black",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
    width: "100vw",
  },
  bConstainer: {
    display: "flex",
    height: 60,
    marginLeft: "20px",
  },
  brand: {
    padding: "5px",
    fontSize: "40px",
    color: "white",
    textDecoration: "none",
  },
  bImg: {
    transform: "rotate(90deg)",
    padding: "5px",
    height: 40,
  },
  login: {
    marginRight: 10,
    background: "white",
    borderRadius: 5,
  },
  toolbar: {
    position: "relative",
    marginRight: 10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 200,
    padding: 0,
    justifySelf: "flex-end",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "200px",
    alignItems: "center",
  },
  purple: {
    width: 25,
    height: 25,
  },
  userName: {
    fontSize: "medium",
  },
  logout: {
    color: "green",
    marginRight: 10,
    background: "white",
    borderRadius: 5,
    "&:hover": {
      background: "transparent",
      color: "red",
      border: "1px solid red",
    },
  },
}));
