// Aliases
type Age = string | number;
type Id = string | number;
type Username = string;

const age: Age = 22;


const getMyAge = (age: Age) => {
   return "age";
}

const getUserById = (id: Id): Username => {
   return "Angelo"
}

console.log(getMyAge("54"))


// Tipos Literales
type Log = "error" | "success";

const getLog = (log: Log) => {
   return log;
}

console.log(getLog('error'));
