import { FileSystem } from "../../../imports/FileSystem";
export function KernelTFSRenameFile(Target, Name) {
  FileSystem.rename(Target, Name, function (err) {
    if (err) throw err;
  });
}
