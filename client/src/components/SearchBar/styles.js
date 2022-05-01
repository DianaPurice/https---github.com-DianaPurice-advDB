import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "white",
    padding: 0,
    margin: 0,
    width: "100vw",
    height: "30px",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  searchBox: {
    background: "transparent",
    height: "30px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    paddingRight: 1,
  },
  searchBtn: {
    display: "flex",
    background: "transparent",
    padding: 0,
    minWidth: 25,
    height: 20,
    transform: "rotate(90deg)",
  },
  linkedPages: {
    color: "black",
    width: "40%",
    marginRight: 30,
    fontSize: "small",
    fontWeight: "bold",
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  a: {
    textDecoration: "none",
    color: "black",
  },
}));
