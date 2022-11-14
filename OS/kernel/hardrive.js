import { KernelTFSWriteFile } from "./filesystem/writefile.js"
import { KernelTFSAppendFile } from "./filesystem/appendFile.js"
import { KernelTFSCreateFile } from "./filesystem/createfile.js"
import { KernelTFSDeleteFile } from "./filesystem/DeleteFile.js"
import { KernelTFSRenameFile } from "./filesystem/rname.js"
import { KernelTFSDeleteFolder } from './filesystem/DeleteFolder.js';
export let FileSystem = {
    Rename(Tar,Name){
        KernelTFSRenameFile(Tar,Name)
    },
    WriteFile(fname,fext,fdata){
        KernelTFSWriteFile(fname,fext,fdata)
    },
    CreateFile(fname,EXT){
        KernelTFSCreateFile(fname,EXT)
    },
    AppendFile(Fname,Fext,FDATA){
        KernelTFSAppendFile(Fname,Fext,FDATA)
    },
    DeleteFile(File){
        KernelTFSDeleteFile(File)
    },
    DeleteFolder(dir){
        KernelTFSDeleteFolder(dir)
    }
}