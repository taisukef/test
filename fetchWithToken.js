const fetchWithToken = async (accessToken, url, json) => {
  const headers = {
    "Accept": "application/json",
    "Authorization": "token " + accessToken,
  };
  if (!json) {
    return await (await fetch(url, { headers })).json();
  }
  headers["Content-Type"] = "application/json";
  const body = JSON.stringify(json);
  const method = "PUT";
  return await (await fetch(url, { method, headers, body })).json();
};

export { fetchWithToken };
