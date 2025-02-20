// function2/index.js
exports.handler = async (event) => {
    try {
        // Handle GET request
        const response = {
            message: "Function 2 Update toray 20th Feb 2024 successfully",
            queryParameters: event.queryStringParameters || {}
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
