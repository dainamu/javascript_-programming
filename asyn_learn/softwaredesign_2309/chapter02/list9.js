const url = "https://httpbin.org/delay/2";

async function fetcher(url) {
  const res = await fetch(url);
  const text = await res.text();
  return text;
}

Promise.all([fetcher(url), fetcher(url), fetcher(url)]).then((data) => {
  console.table(data);
});
