import { FileSystem } from "../imports/FileSystem";
export function KernelTFSDeleteFolder(dir) {
  FileSystem.rm(dir, { recursive: true, force: true }, (err) => {
    if (err) {
      throw err;
    }
  });
}
