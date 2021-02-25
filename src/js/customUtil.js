export const deepFreeze = (object) => {
  const propertyNames = Object.getOwnPropertyNames(object);
  for (let propertyName of propertyNames) {
    const value = object[propertyName];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
};

export const copyObjectViaJSON = (target) => {
  // JSON을 활용한 깊은 복사, 하지만 내부 함수를 undefiend 처리한다.
  return JSON.parse(JSON.stringify(target));
};

export const deepCopyObject = (target) => {
  console.log(target);
  let result = {};
  if (typeof target !== "object" || target === null) {
    return target;
  }
  for (let property in target) {
    result[property] = deepCopyObject(target[property]);
  }
  return result;
};
