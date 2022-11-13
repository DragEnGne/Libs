import fs from 'fs'
export function TFSCreateFile(FILENAME,FILEEXTENION){
    fs.open(`${FILENAME}${FILEEXTENION}`, 'w', function (err, file) {
        if (err) throw err;
    });
}
