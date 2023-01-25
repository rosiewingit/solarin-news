const { default: axios } = require("axios");
const fs = require("fs");
const { resolve } = require("path");

const client_id = "NHX1Ki0kj0raL_reCTES";
const client_secret = "gx_JGJbox6";
const apiUrl = `https://openapi.naver.com/v1/search/news`;

axios
  .get(apiUrl, {
    method: "get",
    url: apiUrl,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
    params: {
      query: "솔라인, 김재술",
      display: 100,
      sort: "date",
    },
    responseType: "json",
  })
  .then((response) => {
    console.log(response.data);
    const newResultFile = resolve("data", "newsResult.json");
    fs.writeFileSync(newResultFile, JSON.stringify(response.data));
  });
