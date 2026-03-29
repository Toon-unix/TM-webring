fetch(`https://raw.githubusercontent.com/CSS-Tricks/css-webring/main/webring.json`)
  .then((response) => response.json())
  .then((sites) => {
     // Got the data.
  });