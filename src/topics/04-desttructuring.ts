
interface Person {
    name: string;
    age: number;
    address: string;

}

const person: Person = {
    name: 'Samuel Colmenares',
    age: 15,
    address: 'Medellin'
};

const {name} = person;

console.log('props:',name);

interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song:string;
    details: Details;
    album?: string;
};

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 70,
    song: 'Mess',
    album: 'album +',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
};

const song = 'Angel';
 const { song: anotherSong, songDuration, details } = audioPlayer;
/* const { 
    song: anotherSong, 
    songDuration, 
    album: album2 = 'No album',
    details:{author} 
} = audioPlayer; */
 const {author} = details;

const {song: song2, audioVolume:audioV, ...audioPlayer2} = audioPlayer;
/* console.log("cancion:", song);
console.log("Otra cancion:", anotherSong);
console.log('duracion:', songDuration);
console.log('autor:', author); */
// console.log('album:', album2);
//console.log('restante:', audioPlayer2);

const refVar = {...audioPlayer};
let refVar2 = Object.assign({},audioPlayer);
refVar2.album = 'No debio cambiar';


/* console.log('%cReferencia 2:','background-color:purple;color:white',refVar2);
console.log('audioPlayer:',audioPlayer);
console.log('ref:',refVar); */
refVar.album='album '
refVar.details.author = 'song 3';

// console.log("details:", details);
const details2 = {...details};
details2.author = 'James Blunt';
//console.log("details despues:", details);
//console.log("details 2 despues:", details2);

// console.log('audioPlayer despues:',audioPlayer);

// TODO: ============= ARREGLOS =====================

const sayayines = ['Goku', 'Vegueta', 'thrunks'];
const hijosGoku = ['Gohan', 'Gotten'];
const todosSay= [...sayayines,...hijosGoku];

const [sa1, sa2, thrunks='no existe'] = sayayines;

const [,goku='No existe',...resto]=sayayines;

console.log('Sayayin 1:', sa1);
console.log('Sayayin 2:', sa2);
console.log('Sayayin 3:', thrunks);
console.log("Sayayin T:", goku);
console.log("Sayayines restantes:", resto);
console.log('todosSay :>> ', todosSay);

export {};