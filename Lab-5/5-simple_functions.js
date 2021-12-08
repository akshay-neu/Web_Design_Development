//Simple Functions

//Using variable
const addVariable = function (x, y) {
    const sum = x + y;
    return sum;
  };
  console.log(`addVariable: ${addVariable(1, 2)}`);
  console.log(""); //line break
  
  //Named functions
  function addNamed(x, y) {
    //statements
    return x + y;
  }
  console.log("addNamed: " + addNamed(5, 5));
  console.log(""); //line break
  
  //Anonymous Functions
  (function (x, y) {
    return x + y;
  })(1, 2); //
  // addNamed(1, 2)
  //Call a function using ()
  
  function addAndExcute(x, y, callback) { //closure
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    let sum = x + y;
    console.log("Sum = " + sum);
    console.log("typeof callback: " + typeof callback);
    if (typeof callback === 'function') {
      console.log("Excuting callback");
      callback(sum);
    } else {
      console.log("No callback");
    }
  }
  
  function callbackFn(value) {
    console.log("Executing Callback with sum: " + value * 10);
  };
  
  addAndExcute(2, 3, callbackFn);
  