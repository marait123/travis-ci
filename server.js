function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let i = 0;
async function main() {
  while (true) {
    console.log("Containers rule! guys" + i++);
    await sleep(5000);
  }
}

main();
