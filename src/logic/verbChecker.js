const verbChecker = (verb, romaji, group) => {
  const verbRoots = [
    ['う', 'く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る'],
    ['u', 'ku', 'gu', 'su', 'tsu', 'nu', 'bu', 'mu', 'ru'],
  ];
  if (!verbRoots[0].includes(verb[verb.length - 1])) {
    return false;
  }
  if (!romaji.endsWith(verbRoots[1][verbRoots[0].indexOf(verb[verb.length - 1])])) {
    return false;
  }
  if (group === 3) {
    if (!['来る', 'くる', 'する'].includes(verb)) {
      return false;
    }
  }
  return true;
};

export default verbChecker;