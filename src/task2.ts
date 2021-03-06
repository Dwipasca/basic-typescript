interface CharMap {
  [key: string]: number;
}

function createOccurenceMap(str: string): CharMap {
  const charMap: CharMap = str
    .split("")
    .reduce((acc, char) => Object.assign(acc, { [char]: 0 }), {});

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charMap[char] += 1;
  }

  return charMap;
}

function getOccurence(str: string): string {
  const map = createOccurenceMap(str);

  let newStr = "";
  for (let char in map) {
    newStr += `${char}${map[char]}`;
  }

  return newStr;
}
getOccurence("occurrences");
