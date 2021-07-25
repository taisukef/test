import { GitHub } from "./GitHub.js";

const accessToken = "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";
const github = new GitHub(accessToken);

//const filename = "fetchPOST.js";
const filename = "push.test.js";
const repo = "taisukef/test";
const branch = "main";
const bin = await Deno.readFile(filename);

await github.push(filename, bin, repo, branch);
//await github.create(filename, bin, repo, branch);
