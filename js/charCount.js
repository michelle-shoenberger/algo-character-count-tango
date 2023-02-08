exports.charCount = function(s) {
  let count = {};
  for (const char of s.toLowerCase()) {
    if (char in count) {
      count[char] += 1
    } else if (char == " ") {
      continue
    } else {
      count[char] = 1
    }
  }
  console.log(count)
  arr = Object.entries(count).sort(function(a,b) {
    // Comparing two arrays : [char, count]
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] == b[1]) {
      if (a<b) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1
    }
  })
  console.log(arr)
  return arr
};