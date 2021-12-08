let obj = {
    a: 500,
    b() {
      // this.a = 600;
      // console.log("1: 'this' a window object: " + (this === window));
      return this.a;
    },
    c: [1, 2, 3]
  };
  let b = function() {
      // this.a = 600;
      // console.log("1: 'this' a window object: " + (this === window));
      return this.a;
    };
  console.log(obj.a);
  console.log(obj.b());
  console.log(b());
  console.log(obj.c);