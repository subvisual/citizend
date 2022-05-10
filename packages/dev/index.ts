import * as fs from "fs";
import debounce from "lodash.debounce";

const FROM = "../contracts/deployments/localhost";
const TO = "../web/contracts/localhost";

const callback = debounce((eventType: fs.PathLike) => {
  console.log("Updating web/contracts/localhost");
  fs.rmSync(TO, { recursive: true });
  fs.cpSync(FROM, TO, { recursive: true });
  console.log(eventType);
}, 200);

fs.watch(FROM, callback);
