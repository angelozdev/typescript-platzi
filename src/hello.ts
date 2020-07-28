const number: number = Math.floor((Math.random() * (2 - 0)) + 0)

/* Hola */
console.log(number)

const myPromise = (): Promise<string> => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(number){
            return resolve("I'm Resolved");
         }
         reject("I\'m Rejected")
      }, 500)
   })
}


myPromise()
   .then(msg => console.log(msg))
   .catch(err => console.error(err))