const corsProxy = require("cors-anywhere");

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy
  .createServer({
    originWhitelist: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://stormy-taiga-82014.herokuapp.com",
      "https://stormy-taiga-82014.herokuapp.com/eat_out_content.html",
      "https://floating-tor-57469.herokuapp.com",
    ],
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () => {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
