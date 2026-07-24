export const makeParam = (params = {}) => {
  const now = Date.now();

  return {
    inputRefs: [`obs:${now}`],
    procedureId: "proc:identity",
    outputRef: `artifact:${now}`,
    parentRefs: [],
    ...params,
  };
};
