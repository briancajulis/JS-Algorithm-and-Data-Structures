const collectOddValues = arrayNum => {
  let result = [];

  const helperFunction = helperInput => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helperFunction(helperInput.slice(1));
  };

  helper(arrayNum);

  return result;
};
