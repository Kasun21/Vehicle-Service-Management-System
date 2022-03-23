const authenticate = (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      next();
    } else {
      return res.send("<h4>User is not authenticated in the server ðŸ‘ŽðŸ½</h4>");
    }
  };
  
  export { authenticate };
  