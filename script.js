// html ref
const vid = document.getElementById('vid')

// el array de los videos
const vids = [
    './assets/video/20200107_01_02.mp4',
    './assets/video/VideoBEV.mp4',
    './assets/video/VideoFCEV.mp4',
    './assets/video/VideoPHEV.mp4',
    './assets/video/20190607_01_01.mp4',

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