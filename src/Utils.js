function Wait(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, timeout);
  })
}

export { Wait };