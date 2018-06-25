const serverless = require("serverless-http");
const express = require("express");
const app = express();

const { GATEWAY_API, REGION, STAGE } = process.env;

app.get("/", function(req, res) {
  res.send(`
<html>

<body>
  <h1>Hello World!</h1>
  <div id="greet"></div>
  <script>
    fetch('https://${GATEWAY_API}.execute-api.${REGION}.amazonaws.com/${STAGE}/natter', {
      method: 'POST'
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        const el = document.getElementById("greet");
        el.innerHTML = myJson.message;
      });
  </script>
</body>

</html>
`);
});

module.exports.handler = serverless(app);
