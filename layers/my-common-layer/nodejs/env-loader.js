const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve('/opt/nodejs/.env');

if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log("✅ .env file loaded from Lambda Layer");
} else {
    console.warn("⚠️ No .env file found in /opt/nodejs/");
}
