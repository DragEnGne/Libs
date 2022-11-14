import fs from "fs";
export function KernelTFSWriteFile(FILENAME, FILEEXTENION, DATA) {
  fs.writeFile(`${FILENAME}${FILEEXTENION}`, DATA, function (err) {
    if (err) throw err;
  });
}
