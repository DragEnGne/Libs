import { logFILENAME, logFN, LogIsTrue, logTYPE } from "./dlog.js";
import { print } from "./print.js";

export let email = {
  genEmail(name, Type) {
    if (LogIsTrue === 0) {
      print.out(logTYPE[1] + logFILENAME[1] + logFN[0]);
    }
    return `${name}10@${Type}`;
  },
};
