module.exports = {
  add,
};

function add(a = 0, b = 0) {
  //default value
  // if (typeof a === "number" && typeof b === "number") {
  // Array.from(arguments)
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both argument need to be numbers");
  }
}

function isNumber(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

// start with low hanging fruit --> happy path (you basic assumptions)
// then check for the invalid input
// then move on to edge cases
