"use strict";

module.exports.natter = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      message: "Hello world"
    })
  };

  callback(null, response);
};
