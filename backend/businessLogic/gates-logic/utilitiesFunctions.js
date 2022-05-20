export const map2Arrays = (arr1, arr2, fn) =>
  arr1.map((element, index) => {
    return fn(element, arr2[index]);
  });

// export const map2Arrays = (arr1,fn) =>
//   arr1.map((el, index) => fn(el, arr2[index]));
