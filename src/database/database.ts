import mongoose from "mongoose";
import signale from "signale";

export default async function connectToServer(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Personas');
    }catch(error){
        signale.info('la conexion a mongo ha fallado desde su lanzamiento');
    }
}

const conn = mongoose.connection;

conn.once('open', () => {
    signale.info('la conexion a la base de datos en mongo ha sido lanzada');
});

conn.on('error', () => {
    signale.error('la conexion a mongo a sufrido un fallo y se ha cerrado forzosamente');
});