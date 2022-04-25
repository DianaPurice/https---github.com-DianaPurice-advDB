import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "black",
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
  },
  bImg: {
    transform: "rotate(90deg)",
    padding: "5px",
    height: 40,
  },
  profile: {
    position: "absolute",
    display: "flex",
    right: "20px",
    marginRight: "2px",
    background: "white",
  },
  temporray: {},
}));
