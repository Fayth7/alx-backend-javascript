process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (chunk) => {
    const name = chunk.toString().trim();

    if (name) {
        process.stdout.write(`Your name is: ${name}\n`);
    } else {
        process.stdout.write('Your name is: undefined\n');
    }

    process.stdout.write('This important software is now closing\n');
    process.exit();
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
    process.exit();
});
