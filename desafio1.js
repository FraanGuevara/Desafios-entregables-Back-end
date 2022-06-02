class Usuario {
    constructor(nombre, apellido, nombreLibro, autorLibro, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [{   
            Libro: nombreLibro, 
            Autor:autorLibro}];
        this.mascotas = mascotas;
    }
        getFullName ()  {
            return `${this.nombre} ${this.apellido}`;
        }
        addMascotas (){
            return 'Numero de mascostas : ' + this.mascotas.length;
        }
        addBooks (Libro, Autor) {
            return this.libros.push({Libro, Autor});
        }
        getBookNames () {
            return this.libros.map(libro =>{
                const nombresDeLibros = libro.Libro;
                return nombresDeLibros;
            } );
        }
    }
    

const usuario = new Usuario('Juan', 'Perez', 'El señor de los anillos','J. R. R. Tolkien', ['Perro', 'Gato']);

/* console.log(usuario); */
console.log(usuario.getFullName());
console.log(usuario.addMascotas());
console.log(usuario.addBooks('El principito', 'Antoine de Saint-Exupéry'));
console.log(usuario);
console.log(usuario.getBookNames());
