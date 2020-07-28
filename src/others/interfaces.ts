/* type PhotoOrientation = "landscape" | "portait" | "square"; */

interface IPicture {
   readonly title      : string
   readonly date       : number
   readonly orientation: PhotoOrientation
}


interface IPictureExtends extends IPicture {
   readonly resolution: string
}

const showPic = (picture: IPictureExtends) => {
   console.table(picture);
}

showPic({
   date: new Date().getMonth() + 1,
   orientation: "landscape",
   title: "Title picture",
   resolution: "large"
})