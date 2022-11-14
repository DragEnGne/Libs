import { TFSWriteFile } from "./filesystem/writefile.js"
import { TFSAppendFile } from "./filesystem/appendFile.js"
import { TFSCreateFile } from "./filesystem/createfile.js"
import { TFSDeleteFile } from "./filesystem/DeleteFile.js"
import { TFSRenameFile } from "./filesystem/rname.js"
export let TinyFileSystem = {
    Rename(Tar,Name){
        TFSRenameFile(Tar,Name)
    },
    WriteFile(fname,fext,fdata){
        TFSWriteFile(fname,fext,fdata)
    },
    CreateFile(fname,fext){
        TFSCreateFile(fname,fext)
    },
    AppendFile(Fname,Fext,FDATA){
        TFSAppendFile(Fname,Fext,FDATA)
    },
    DelFile(File){
        TFSDeleteFile(file)
    }
}