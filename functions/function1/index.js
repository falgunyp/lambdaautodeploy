// function1/index.js
require('./env-loader'); // Use relative path for layer imports

// Define constants for reusable values
const HEADERS = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};

exports.handler = async (event) => {
    try {
        // Validate input
        if (!event || (!event.body && event.body !== '')) {
            throw new Error('Invalid input: Missing event body');
        }

        // Parse the incoming request body with error handling
        let body;
        try {
            body = JSON.parse(event.body || '{}');
        } catch (parseError) {
            return {
                statusCode: 400,
                headers: HEADERS,
                body: JSON.stringify({
                    error: 'Invalid JSON in request body'
                })
            };
        }

        // Validate required environment variables
        if (!process.env.DB_HOST || !process.env.API_KEY) {
            throw new Error('Missing required environment variables');
        }

        // Your function logic here
        const response = {
            message: "Function 1 Update toray 24th Feb 2025 successfully",
            dbHost: process.env.DB_HOST,
            apiKey: process.env.API_KEY,
            receivedData: body
        };

        return {
            statusCode: 200,
            headers: HEADERS,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.error('Error in lambda handler:', error);
        
        return {
            statusCode: 500,
            headers: HEADERS,
            body: JSON.stringify({
                error: error.message,
                timestamp: new Date().toISOString()
            })
        };
    }
};
