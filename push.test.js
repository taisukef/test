import { GitHub } from "./GitHub.js";

const accessToken = "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";
const github = new GitHub(accessToken);

const filename = "push.test.js";
const repo = "taisukef/test";
const branch = "main";
const bin = await Deno.readFile(filename);

await github.push(filename, bin, repo, branch);
//await github.create(filename, bin, repo, branch);
