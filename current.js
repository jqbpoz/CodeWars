function pigIt(str) {
  return str
    .split(" ")
    .map((x) => (x.match(/[a-zA-Z]/) ? x.slice(1) + x.charAt(0) + "ay" : x))
    .join(" ");
}
