
import { FileSystem } from "../../imports/FileSystem";
export function KernelTFSWriteFile(FILENAME, FILEEXTENION, DATA) {
  FileSystem.writeFile(`${FILENAME}${FILEEXTENION}`, DATA, function (err) {
    if (err) throw err;
  });
}
