const promiseExample = new Promise((res, rej)=> res)


const to = promise => promise
  .then(result => [null, result])
  .catch(error=> [error])


const [error, result] = await to(promiseExample)