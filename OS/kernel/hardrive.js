import { KernelTFSWriteFile } from "./filesystem/writefile.js"
import { KernelTFSAppendFile } from "./filesystem/appendFile.js"
import { KernelTFSCreateFile } from "./filesystem/createfile.js"
import { KernelTFSDeleteFile } from "./filesystem/DeleteFile.js"
import { KernelTFSRenameFile } from "./filesystem/rname.js"
export let FileSystem = {
    Rename(Tar,Name){
        KernelTFSRenameFile(Tar,Name)
    },
    WriteFile(fname,fext,fdata){
        KernelTFSWriteFile(fname,fext,fdata)
    },
    CreateFile(fname,fext){
        KernelTFSCreateFile(fname,fext)
    },
    AppendFile(Fname,Fext,FDATA){
        KernelTFSAppendFile(Fname,Fext,FDATA)
    },
    DelFile(File){
        KernelTFSDeleteFile(file)
    }
}