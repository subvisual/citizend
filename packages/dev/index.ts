import * as fs from "fs";
import chokidar from "chokidar";
import debounce from "lodash.debounce";

const FROM = "../contracts/deployments/localhost";
const TO = "../web/contracts/localhost";

const callback = debounce((eventType: fs.PathLike) => {
  console.log("Updating web/contracts/localhost");
  fs.rmSync(TO, { recursive: true });
  fs.cpSync(FROM, TO, { recursive: true });
}, 200);

const watcher = chokidar.watch(`${FROM}/*.json`, { persistent: true });

watcher.on("add", callback).on("change", callback);
