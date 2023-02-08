def comparator(a, b):
  if a[1]>b[1]:
    return -1
  elif a[1]==b[1]:
    if a<b:
      return 1
    else:
      return -1
  else:
    return 1

def char_count(s):
  count = {}
  for char in s.lower():
    if char.isspace():
      continue
    count[char] = count[char] + 1 if char in count else 1
  print(count)
  ans = sorted([[char, num] for (char, num) in count.items()], key=lambda x: (-x[1], x[0]))
  print(ans)
  return ans