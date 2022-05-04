import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "fill",
    width: "100%",
    maxHeight: "600px",
  },
  card: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
    height: "30%",
  },
  imageSection: {
    marginLeft: "20px",
    height: "30%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
  post: {
    margin: 30,
    padding: "20px",
    borderRadius: "15px",
    height: "auto",
    justifyContent: "space-between",
  },
  header: {
    height: "10%",
  },
  actions: {
    height: "30%",
  },
  edit: {
    background: "orange",
    margin: 5,
    fontSize: "10px",
  },
  delete: {
    background: "red",
    margin: 5,
    fontSize: "10px",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
  },
}));
