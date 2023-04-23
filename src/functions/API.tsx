export default async function API(url: string) {
  const host = "https://fakestoreapi.com/";

  const options = {
    method: "GET",
  };

  const response = await fetch(host + url, options);

  const data = await response.json();

  const status = response.status;

  var requestResult = { status, data };

  return requestResult;
}
