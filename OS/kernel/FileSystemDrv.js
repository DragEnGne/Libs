import { KernelTFSWriteFile } from "../Filesystem/writefile.js"
import { KernelTFSAppendFile } from "./Filesystem/appendFile.js"
import { KernelTFSCreateFile } from "./Filesystem/createfile.js"
import { KernelTFSDeleteFile } from "./Filesystem/DeleteFile.js"
import { KernelTFSRenameFile } from "./Filesystem/rname.js"
import { KernelTFSDeleteFolder } from './Filesystem/DeleteFolder.js';
export let FileSys = {
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