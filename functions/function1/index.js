// function1/index.js
exports.handler = async (event) => {
  try {
      // Parse the incoming request body
      const body = JSON.parse(event.body || '{}');
      
      // Your function logic here
      const response = {
          message: "Function 1 Update toray 14th Feb 2024 successfully",
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
