

// This allows the server to send any files that are not current specified via routes
// in htmlRoutes or apiRoutes
app.use(express.static("public"));

// GET route for home.html

// GET route for survey.html