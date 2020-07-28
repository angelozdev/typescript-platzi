// <> // Angle Bracket syntax
const me: any = "angelo";

/* const userlength: number = (me as string).length; */
const userlength: number = (<string>me).length;


console.log(userlength);
