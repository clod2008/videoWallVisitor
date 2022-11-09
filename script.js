// html ref
const vid = document.getElementById('vid')

// el array de los videos
const vids = [
    './assets/video/hero_16_9_suc01_car01_video02.mp4',
    './assets/video/hero_16_9_suc01_car01_video03.mp4',
    './assets/video/hero_16_9_suc01_car01_video01.mp4',

]
// la longitud del array de los videos
const leng = vids.length;
// un numero utilizado para saber que video se está reproduciendo
let n = 0;
// utilizo el evento "ended" para saber si el video se ha acabado
vid.addEventListener("ended", () => {
    // si el video se ha acabado cambia el atributo src
    vid.setAttribute("src", vids[n % leng]);

    n++;
}
)