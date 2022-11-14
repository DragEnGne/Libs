import fs from 'fs'
export function TFSAppendFile(FILENAME,FILEEXTENION,DATA){
    fs.appendFile(`${FILENAME}.${FILEEXTENION}`, DATA, function (err) {
        if (err) throw err;
    });
}
