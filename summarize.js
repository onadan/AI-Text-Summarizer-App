const axios = require("axios");
const { access_token } = require("./config");

async function summarizeText(text) {
  let data = JSON.stringify({
    inputs: text,
    parameters: {
      max_length: 100,
      min_length: 30,
    },
  });

  let config = {
    method: "post",
    url: "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token || "",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response.data[0].summary_text;
  } catch (error) {
    console.log(error);
  }
}

module.exports = summarizeText;
