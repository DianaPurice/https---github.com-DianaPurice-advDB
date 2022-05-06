import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: 350,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    maxWidth: 350,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    color: "white",
    height: 30,
  },
  googleButton: {
    margin: 0,
  },
  btmContainer: {
    paddingTop: 10,
    justifyContent: "center",
  },
  tnContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    alignItems: "center",
  },
  typesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  namesContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontWeight: "bold",
    color: "black",
  },
}));
