import { FileSystem } from '../imports/FileSystem';
export function KernelTFSDeleteFile(FILE){
    FileSystem.unlink(FILE, function (err) {
        if (err) throw err;
    });
}