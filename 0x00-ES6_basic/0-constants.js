// Update taskFirst to use const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

// Update taskNext to use let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
