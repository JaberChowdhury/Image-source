/**
 *
 * 🫒 Title : File operation
 * 🫒 Description : renaming screenshoots
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 17 AUGUST 2023
 *
 **/

const fs = require("fs").promises;
const path = require("path");
const path_url = path.join(__dirname, "/images");

const readDir = async () => {
  try {
    const files = await fs.readdir(path_url);
    files.map(async (f, i) => {
      if (path.extname(f) === ".jpg") {
        await fs.rename(path_url + "/" + f, `${path_url}/quotes${i}.jpg`);
      }
    });
  } catch (error) {
    console.log({ error });
  }
};

readDir();
