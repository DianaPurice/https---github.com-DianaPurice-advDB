import jwt from "jsonwebtoken";

// wants to like a post
// click the like button => auth middleware (next) => like controller..
// for any kind of action that happens before something = middleware

const auth = async (req, res, next) => {
  console.log(req.headers.authorization);
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
    console.log("here");
  }
};

export default auth;
