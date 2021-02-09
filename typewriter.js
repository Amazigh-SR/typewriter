//use process.stdout.write instead of console.log(); stdout stands for standard output
const sentence =
  "hello there from lighthouse labs, this is an intro to asynchronous code";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);
