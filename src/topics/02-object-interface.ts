
const skills = ['invisibilidad','salto','autosanado'];

/* const personaje = {
    nombre:'ghjk',
    puntos: 123,
    skills:skills
} */

    interface Personaje{
        nombre:string;
        puntos:number|'FULL';
        skills: string[];
        zona?: string;
    }

    const p:Personaje ={
        nombre:'spiderman',
        puntos: 1000,
        skills: skills,
        zona: 'New York'
    };

    const p2:Personaje ={
        nombre:'batman',
        puntos: 1000,
        skills: skills
    }

    p.puntos =345678;
    
    console.table([p,p2]);




export {};
