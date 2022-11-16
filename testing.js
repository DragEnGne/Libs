import { printk } from "./OS/kernel/ConsoleDrv.js";
import { uefi } from "./OS/kernel/UefiDrv.js";
let u = new uefi
printk(UEFI.GetSystemRam())
