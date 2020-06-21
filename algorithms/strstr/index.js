function strstr(s, x) {
  let stringLength = s.length;

  let searchLength = x.length;
  let searchIndex = 0;
  let searchCharacter = x[searchIndex];
  let indexes = [];

  if (stringLength < searchLength) {
    return -1;
  }

  for (let i = 0; i < stringLength; i++) {
    if (s[i + 1] && x[searchIndex + 1]) {
      if (
        s[i] === x[searchIndex] &&
        s[i + 1] === x[searchIndex + 1] &&
        s[i + (searchLength - 1 - searchIndex)] === x[x.length - 1]
      ) {
        searchIndex++;
        searchCharacter = x[searchIndex];
        indexes.push(i);
      } else {
        searchIndex = 0;
        searchCharacter = x[searchIndex];
        indexes = [];

        // Eğer aranacak çok değer varsa -1 dön
        if (searchLength > stringLength - i) {
          console.log('Buraya girdi');
          return -1;
        }
      }
    } else if (!s[i + 1] && x[searchIndex + 1]) {
      return -1;
    } else if (s[i + 1] && !x[searchIndex + 1]) {
      // şu anlık bir şeye gerek yok
      if (s[i] === x[searchIndex]) {
        indexes.push(i);
        return indexes[0];
      } else {
        return -1;
      }
    } else {
      // Son karakterlere bak
      if (s[i] === x[searchIndex]) {
        indexes.push(i);
        return indexes[0];
      } else {
        return -1;
      }
    }
  }

  return -1;
}
