import fs from 'fs'
export function TFSDeleteFile(FILE){
    fs.unlink(FILE, function (err) {
        if (err) throw err;
      });
}