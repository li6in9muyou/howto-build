export function sample(...args) {
  const len = args?.length;
  return args[Math.floor((len - 1) * Math.random())];
}
