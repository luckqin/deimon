function simpleIsEqual(newArgs = [], lastArgs = []) {
  return (
    newArgs.length === lastArgs.length && newArgs.every((value, idx) => value === lastArgs[idx])
  );
}

export function memorize(fn: (p: any) => any, isEqual = simpleIsEqual) {
  let lastResult: any;
  let lastThis: any;
  let lastArgs: any;
  let calledOnce = false;

  return function (...newArgs) {
    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    lastResult = fn.apply(this, newArgs);
    return lastResult;
  };
}
