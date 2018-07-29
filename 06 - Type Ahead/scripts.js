document.addEventListener("DOMContentLoaded", typeAhead);

const fetchData = new Promise((resolve, reject) => {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  fetch(endpoint)
    .then(response => {
      if (!response.ok) throw new Error("Network connection error");
      return response.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(err => reject(err));
});

async function typeAhead() {
  const input = document.querySelector(".search");

  const data = await fetchData;

  input.addEventListener("input", e => {
    const search = input.value;
    const results = data.filter(val => {
      if (val.city.toLowerCase().includes(search)) return val;
      if (val.state.toLowerCase().includes(search)) return val;
    });
    appendResults(results, search);
  });

  function appendResults(results, search) {
    const suggestions = document.querySelector(".suggestions");
    const regex = new RegExp(search, "gi");
    const html = results
      .map(result => {
        cityName = result.city.replace(
          regex,
          `<span class='hl'>${search}</span>`
        );
        stateName = result.state.replace(
          regex,
          `<span class='hl'>${search}</span>`
        );
        return `
        <li>
          <span>${cityName}, ${stateName}</span>
          <span>${Number(result.population).toLocaleString()}</span>
        </li>
      `;
      })
      .join("");
    suggestions.innerHTML = html;
    // results.forEach(result => {
    //   const li = document.createElement("li");
    //   li.appendChild(
    //     document.createTextNode(`${result.city}, ${result.state}`)
    //   );
    //   const span = document.createElement("span");
    //   span.innerHTML = `${Number(result.population).toLocaleString()}`;
    //   span.classList.add("population");
    //   li.appendChild(span);
    //   suggestions.appendChild(li);
    // });
  }
}
