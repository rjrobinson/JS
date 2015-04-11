

function doSomething(arg1) {
  return function() {
    alert(arg1)
  }
}

var fn = doSomething("Hello Clousure"),
    fn2 = doSomething("number 2")

fn();
fn2();
fn();
fn = null