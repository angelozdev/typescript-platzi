const myFirstFunction = (title: string, date: Date): string => {
   return `${title}'s ${date.toString()}`
}

console.log(myFirstFunction("A day like today", new Date));
