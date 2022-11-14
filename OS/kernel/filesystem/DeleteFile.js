import fs from 'fs'
export function KernelTFSDeleteFile(FILE){
    fs.unlink(FILE, function (err) {
        if (err) throw err;
      });
}