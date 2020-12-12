const secondLowestHighest = (arr) => {
  let max, second_max, min, second_min;

  max = second_max = Number.NEGATIVE_INFINITY;
  min = second_min = Number.POSITIVE_INFINITY;

  //   Finding maximum and minimum values
  for (let i = 0; i < arr.length; i++) {
    // If the current element is greater than the maximum, update maximum and the second maximum
    // If the current element is greater than second maximum but not equals to the maximum update second maximum
    if (arr[i] > max) {
      second_max = max;
      max = arr[i];
    } else if (arr[i] > second_max && arr[i] !== max) {
      second_max = arr[i];
    }

    // If the current element is smaller than the minimum, update minimum and the second minimum
    // If the current element is smaller than second minimum but not equals to the minimum update second minimum
    if (arr[i] < min) {
      second_min = min;
      min = arr[i];
    } else if (arr[i] < second_min && arr[i] !== min) {
      second_min = arr[i];
    }
  }

  return [second_min, second_max];
};

console.log(secondLowestHighest([5, 4, 3, 2, 1]));
