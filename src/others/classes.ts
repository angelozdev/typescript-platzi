type PhotoOrientation = "landscape" | "portait" | "square";

abstract class Item {
   protected readonly _id   : number;
   protected _title: string;

   constructor(id: number, title: string){
      this._id    = id;
      this._title = title;
   }

   get title(): string {
      return this._title;
   }

   set title(newTitle: string) {
      this._title = newTitle;
   }
}

class Picture extends Item{
   public static photoOrientation: "hola mundo"
   readonly #orientation         : PhotoOrientation;

   constructor(id: number, title: string, orientation: PhotoOrientation){
      super(id, title)
      this.#orientation = orientation;
   }

   toString = () =>{
      return `${this.title} was a aweasome picture`
   }
}


class Album extends Item{
   readonly #pictures: Picture[];

   constructor(id: number, title: string){
      super(id, title)
      this.#pictures = [];
   }

   addPicture = (picture: Picture): Picture => {
      this.pictures.push(picture)
      return picture;
   }

   get pictures(): Picture[] {
      return this.#pictures;
   }

}

const tupla: [boolean, string, number] = [true, "", 34]

const myFirstPicture = new Picture(0, "Hello World", "landscape");
const myFirstAlbum = new Album(1, "Me")
myFirstAlbum.title = "Vacation"
myFirstAlbum.addPicture(myFirstPicture)

console.log("Changed title:", myFirstAlbum.title);
console.log("Pictures", myFirstAlbum.pictures);
console.log("Static Method", Picture.photoOrientation);
