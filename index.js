// index.js
exports.handler = async (event) => {
    const functionName = event.queryStringParameters && event.queryStringParameters.function;
  
    switch (functionName) {
      case 'hello1':
        return hello1();
      case 'hello2':
        return hello2();
      case 'hello3':
        return hello3();
      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Invalid function name' }),
        };
    }
  };
  
  function hello1() {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from Hello1!' }),
    };
  }
  
  function hello2() {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from Hello2!' }),
    };
  }
  
  function hello3() {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from Hello3!' }),
    };
  }