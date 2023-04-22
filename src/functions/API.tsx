export default async function API(url: string) {
  const host = "https://api.chess.com/pub";

  const options = {
    method: "GET",
  };

  const response = await fetch(host + url, options);

  const data = await response.json();

  const status = response.status;

  var requestResult = { status, data };

  return requestResult;
}
