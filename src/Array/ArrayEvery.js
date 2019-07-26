function isBelowThreshold(currentValue) {
    return currentValue < 40;
  }
  
  var array1 = [1, 30, 39, 29, 10, 13];
  
  console.log(array1.every(isBelowThreshold));

  console.log(array1.every(element => element < 40));