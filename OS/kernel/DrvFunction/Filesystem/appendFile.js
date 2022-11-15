import fs from 'fs'
export function KernelTFSAppendFile(FILENAME,FILEEXTENION,DATA){
    fs.appendFile(`${FILENAME}.${FILEEXTENION}`, DATA, function (err) {
        if (err) throw err;
    });
}
