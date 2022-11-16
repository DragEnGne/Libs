import { KernelTFSWriteFile } from "./drv/function/Filesystem/writefile.js"
import { KernelTFSAppendFile } from "./drv/function/Filesystem/appendFile.js"
import { KernelTFSCreateFile } from "./drv/function/Filesystem/createfile.js"
import { KernelTFSDeleteFile } from "./drv/function/Filesystem/DeleteFile.js"
import { KernelTFSRenameFile } from "./drv/function/Filesystem/rname.js"
import { KernelTFSDeleteFolder } from './drv/function/Filesystem/DeleteFolder.js';
export class FileSystemDrv {
    Rename(Tar,Name){
        KernelTFSRenameFile(Tar,Name)
    }
    WriteFile(fname,fext,fdata){
        KernelTFSWriteFile(fname,fext,fdata)
    }
    CreateFile(fname,EXT){
        KernelTFSCreateFile(fname,EXT)
    }
    AppendFile(Fname,Fext,FDATA){
        KernelTFSAppendFile(Fname,Fext,FDATA)
    }
    DeleteFile(File){
        KernelTFSDeleteFile(File)
    }
    DeleteFolder(dir){
        KernelTFSDeleteFolder(dir)
    }
}
