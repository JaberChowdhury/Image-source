const fs = require("fs").promises;
const path = require("path");

// https://raw.githubusercontent.com/JaberChowdhury/Image-source/main/Quotes/images/quotes1.jpg

const prefix =
  "https://raw.githubusercontent.com/JaberChowdhury/Image-source/main/Quotes/images/";

const path_url = path.join(__dirname, "/");

let files_array = [];

const make_json = async () => {
  const files = await fs.readdir(path_url + "/images");
  await files.map((file) => {
    files_array.push({
      url: prefix + file,
    });
  });

  const smtobig = await files_array.sort((a, b) => {
    const x = a.url.split(".")[2].split("/").reverse()[0];
    const y = b.url.split(".")[2].split("/").reverse()[0];
    return Number(x) - Number(y);
  });

  await fs.writeFile(
    path_url + "/source.json",
    JSON.stringify({
      source: smtobig,
    }),
  );
};

make_json();

/*
console.log(__dirname)
console.log(fs)
*/
