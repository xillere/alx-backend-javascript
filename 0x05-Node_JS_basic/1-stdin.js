process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const inname = process.stdin.read();

  if (inname) {
    process.stdout.write(`Your name is: ${inname}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
