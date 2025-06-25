function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")
    // pegr a tag img
    const img = document.querySelector("#profile img")

     // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/profile2.png")
     } else {
        // se tiver sem light mode, manter a imagem norma;
        img.setAttribute("src", "./assets/profile.png")
     } 

         // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        alt.setAttribute("alt", "Foto aleatória")
     } else {
        // se tiver sem light mode, manter a imagem norma;
        alt.setAttribute("alt", "foto da logo do Thomas Investiments")
     } 
}