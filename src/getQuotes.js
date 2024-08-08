import axios from "axios";
const config = {
  headers: { "X-Api-Key": "cVd0uvcTIITR9BiMtIly4Q==ut4zmp7UUORmYHX9" },
};

const url = "https://api.api-ninjas.com/v1/quotes";
export default async () => {
  const { data } = await axios.get(url, config);

  return data;
};
