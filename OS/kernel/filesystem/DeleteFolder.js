import fs from "fs";
export function KernelTFSDeleteFolder(dir) {
  fs.rm(dir, { recursive: true, force: true }, (err) => {
    if (err) {
      throw err;
    }
  });
}
