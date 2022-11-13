import fs from fs 
export function TFSRenameFile(Target,Name){
    fs.rename(Target, Name, function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
}