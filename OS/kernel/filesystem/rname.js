import fs from "fs";
export function KernelTFSRenameFile(Target, Name) {
  fs.rename(Target, Name, function (err) {
    if (err) throw err;
  });
}
