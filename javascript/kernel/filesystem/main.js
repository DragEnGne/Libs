import { TFSWriteFile } from "./writefile.js"
import { TFSAppendFile } from "./appendFile.js"
import { TFSCreateFile } from "./createfile.js"
import { TFSDeleteFile } from "./DeleteFile.js"
import { TFSRenameFile } from "./rname.js"
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