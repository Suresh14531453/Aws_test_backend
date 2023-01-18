const axios = require("axios");
const dotenv=require("dotenv").config()

test("Service returns 'Hello World!'", async () => {
  try {
    const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
    expect(response.data).toBe("hi all");
  } catch (e) {
    console.error(e);
    throw e;
  }
});