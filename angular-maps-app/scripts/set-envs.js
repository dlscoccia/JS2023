const { writeFileSync, mkdirSync } = require("fs");
require("dotenv").config();

const targetPath = "./src/environments";

const envFileContent = `
export const environment = {
  MAPBOX_KEY:"${process.env["MAPBOX_KEY"]}",
  otra:"PROPIEDAD"
}
`;

mkdirSync(targetPath, { recursive: true });

writeFileSync(`${targetPath}/environments.ts`, envFileContent);
