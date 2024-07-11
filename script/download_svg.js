const https = require("https");
const fs = require("fs");
const path = require("path");

const copticLetters = [
  "Coptic_Alpha-maj.svg",
  "Coptic_Alpha-min.svg",
  "Coptic_Beta-maj.svg",
  "Coptic_Beta-min.svg",
  "Coptic_Gamma-maj.svg",
  "Coptic_Gamma-min.svg",
  "Coptic_Dalda-maj.svg",
  "Coptic_Dalda-min.svg",
  "Coptic_Ei-maj.svg",
  "Coptic_Ei-min.svg",
  "Coptic_Sou.svg",
  "Coptic_Zeta-maj.svg",
  "Coptic_Zeta-min.svg",
  "Coptic_Eta-maj.svg",
  "Coptic_Eta-min.svg",
  "Coptic_Theta-maj.svg",
  "Coptic_Theta-min.svg",
  "Coptic_Iota-maj.svg",
  "Coptic_Iota-min.svg",
  "Coptic_Kappa-maj.svg",
  "Coptic_Kappa-min.svg",
  "Coptic_Laula-maj.svg",
  "Coptic_Laula-min.svg",
  "Coptic_Me-maj.svg",
  "Coptic_Me-min.svg",
  "Coptic_Ne-maj.svg",
  "Coptic_Ne-min.svg",
  "Coptic_Kxi-maj.svg",
  "Coptic_Kxi-min.svg",
  "Coptic_Ou-maj.svg",
  "Coptic_Ou-min.svg",
  "Coptic_Pi-maj.svg",
  "Coptic_Pi-min.svg",
  "Coptic_Ro-maj.svg",
  "Coptic_Ro-min.svg",
  "Coptic_Semma-maj.svg",
  "Coptic_Semma-min.svg",
  "Coptic_Tau-maj.svg",
  "Coptic_Tau-min.svg",
  "Coptic_He-maj.svg",
  "Coptic_He-min.svg",
  "Coptic_Phi-maj.svg",
  "Coptic_Phi-min.svg",
  "Coptic_Khi-maj.svg",
  "Coptic_Khi-min.svg",
  "Coptic_Pxi-maj.svg",
  "Coptic_Pxi-min.svg",
  "Coptic_O-maj.svg",
  "Coptic_O-min.svg",
  "Coptic_Sai-maj.svg",
  "Coptic_Sai-min.svg",
  "Coptic_Fai-maj.svg",
  "Coptic_Fai-min.svg",
  "Coptic_Hai-maj.svg",
  "Coptic_Hai-min.svg",
  "Coptic_Hori-maj.svg",
  "Coptic_Hori-min.svg",
  "Coptic_Dandia-maj.svg",
  "Coptic_Dandia-min.svg",
  "Coptic_Cima-maj.svg",
  "Coptic_Cima-min.svg",
  "Coptic_Ti-maj.svg",
  "Coptic_Ti-min.svg",
  "Coptic_Sampi.svg",
];

const baseURL = "https://upload.wikimedia.org/wikipedia/commons/8/84/";

copticLetters.forEach((letter) => {
  const file = fs.createWriteStream(path.join(__dirname, letter));
  https
    .get(`${baseURL}${letter}`, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Downloaded: ${letter}`);
      });
    })
    .on("error", (err) => {
      fs.unlink(path.join(__dirname, letter));
      console.error(`Error downloading ${letter}: ${err.message}`);
    });
});
