// function1/index.js
require('/opt/nodejs/env-loader'); // Load the .env from the layer

exports.handler = async (event) => {
  try {
      // Parse the incoming request body
      const body = JSON.parse(event.body || '{}');
      
      // Your function logic here
      const response = {
          message: "Function 2 Update toray 24th Feb 2025 successfully",
          dbHost: process.env.DB_HOST,  // Read environment variables
          apiKey: process.env.API_KEY
          receivedData: body
      };

      return {
          statusCode: 200,
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(response)
      };
  } catch (error) {
      return {
          statusCode: 500,
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({ error: error.message })
      };
  }
};
