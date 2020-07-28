console.clear()

/****************************************************************************
 *                               NUMBER
 *************************************************************************** */
// Numéricos
const phone: number = 3208694060;

// Hexadecimales
const color: number = 0x750b0b;

// Binarios
const binary1: number = 0b1;
const binary0: number = 0b0;

// Octales
const octal: number = 0o744;

// Bigint
const big: bigint = 10n;

/****************************************************************************
 *                                  Boolean
 *************************************************************************** */
const isTrue : boolean = true;
const isFalse: boolean = false;


 /****************************************************************************
 *                                 String
 *************************************************************************** */
const username: string = "angelozdev";

// Backticks
const greet: string = `Hi, ${username}!`


/****************************************************************************
*                                     Any
*************************************************************************** */
// API's externas
// Librerías de terceros
// Datos dinámicos
// Como última opción

let truthy: any;
truthy = true    as boolean;
truthy = 1       as number;
truthy = "Value" as string;


/****************************************************************************
 *                                    Never
 *************************************************************************** */
// Un valor que nunca ocurre
// Funciones que lanzan excepciones
// Funciones que nunca retornan un valor

const myNeverFunction = (): never => {
   throw new Error('This is an error')
}


 /****************************************************************************
 *                                    Void
 *************************************************************************** */
const myVoidFunction =  (user: string): void => {
   console.log(`Hi, ${user}`)
}

const undefinedValue: void = undefined;


/****************************************************************************
*                                     Null
*************************************************************************** */
const nullVariable: null = null;
let albumName: string;
// strictNullChecks = false
//albumName = null;


/****************************************************************************
*                                   Undefined
*************************************************************************** */
const undefinedVariable: undefined = undefined;
//albumName = undefined;



/****************************************************************************
*                                   Array
*************************************************************************** */
// []
const myStringArray: string[] = ["string1", "string2", "string3", "string4"];
const myArray02: (boolean | string)[] = [true, "", "sadasd", false]

// Array<T>
const myNumberArray: Array<number> = [97, 22];
const myArray12: Array<string | boolean> = [true, "", "sadasd", false]

// Propiedades
/* console.log(myStringArray) */

/****************************************************************************
*                                     Tuple
*************************************************************************** */
const myArray01: [number, string] = [0, "angelozdev"]

// Array de tuplas
const arrayTuples: Array<[number, string]> = [myArray01, [1, "angeloz17"]]

/* console.table(arrayTuples) */


/****************************************************************************
*                                    Enum
*************************************************************************** */
enum LogType {
   error   = "errror",
   success = "success",
   server  = "server",
   warning = "warning"
}


console.log(LogType.success);

/****************************************************************************
*                                   Object
*************************************************************************** */
interface IMyObject { username: string, isStudentAtPatzi: boolean, age: number };


const myObject: IMyObject = {
   username: "angelozdev",
   isStudentAtPatzi: true,
   age: 22
}

const isInstance = (object: object): boolean => {
   return object instanceof Object;
}

/* console.log(isInstance(myObject), myObject.username) */