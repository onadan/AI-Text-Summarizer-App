const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  access_token: process.env.ACCESS_TOKEN,
  port: process.env.PORT,
};
