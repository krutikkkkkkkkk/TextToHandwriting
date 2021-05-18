function handwriting(){
    let handwriting = document.getElementById('HandWriting').value;
   console.log(handwriting)
    if(handwriting == "HMA") {
        document.getElementById('page').style.fontFamily ="Homemade Apple"
    }
    else if (handwriting == "SIL") {
        document.getElementById('page').style.fontFamily = "Shadows Into Light"
    }
}