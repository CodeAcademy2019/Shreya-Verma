let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 5000);
    setTimeout(() => reject("not done!"), 2000);
  });
  promise.then(console.log.bind(this, 'success: '),console.log.bind(this, 'fail: '));