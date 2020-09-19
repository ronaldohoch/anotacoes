//How to make a promise from setTimeout
//https://stackoverflow.com/questions/22707475/how-to-make-a-promise-from-settimeout
(function(){

  function later(delay) {
      return new Promise(function(resolve) {
          setTimeout(resolve, delay);
      });
  }

  later(2000)
      .then(async result=>{
          console.log("01 - result, espera 2 segundos");
          await new Promise(resolve=>setTimeout(resolve,2000))
          console.log("02 - Espera 2 segundos no then");
      })
      .catch(async result=>{
          console.log("01 - error, espera 2 segundos");
          await new Promise(resolve=>setTimeout(resolve,2000))
          console.log("02 - Espera 2 segundos no erro");
      })
      .finally(()=>{
          console.log("03 - Finally, 2 segundos");
      })

})();

////
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

await sleep(1000);