import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  grid: {
    display: "flex",
  },

  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: 10,
  },
  label: {
    paddingRight: 5,
    textDecoration: "underline",
  },
  value: {
    fontWeight: "bold",
  },
});
