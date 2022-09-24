const figuritas = [
    {
        nombre: "Enrique",
        apellido: "feola",
        posicion: "defensa",
        pais: "uruguay"
        
    },
];

const db = require ("../db/index");

const obtenerFiguritas = async (req, res, next) => {
    try {
        const figuritas = await db.query("select * from figuritas");

        return res
        .status(200)
        .json({ data: figuritas.rows, message: "Todas las figuritas"});
    } catch (error) {
        return next(error);
    }
};

const agregarFiguritas = async (req, res, next) => {
    try {
        
        let nuevaFigurita = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            posicion: req.body.posicion,
            pais: req.body.pais,
        };

        const insert = await db.query("insert into figuritas (nombre, apellido, posicion, pais) values($1, $2, $3, $4)",[
            nuevaFigurita.nombre,
            nuevaFigurita.apellido,
            nuevaFigurita.posicion,
            nuevaFigurita.pais,
        ]);
        const id = await (await db.query("select max (id) from figuritas")).rows[0].max
        nuevaFigurita.id = id

        
        return res.status(201).json({ data: nuevaFigurita, message: "Exito"});

    } catch (error) {
        return next(error);
    }

}
const cambiarFiguritas = async (req, res, next) => {
    try {
        console.log(req)
        const nuevaFigurita = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            posicion: req.body.posicion,
            pais: req.body.pais,
            id: req.body.id,
        };

        await db.query("update figuritas set nombre = $1, apellido = $2, posicion = $3, pais = $4 where id=$5",[
            nuevaFigurita.nombre,
            nuevaFigurita.apellido,
            nuevaFigurita.posicion,
            nuevaFigurita.pais,
            nuevaFigurita.id,
        ]);

        

        
        return res.status(201).json({ data: nuevaFigurita, message: "Exito"});

    } catch (error) {
        return next(error);
    }

}

const eliminar = async (req, res) => {
    const {id} =req.body;

    try{
        await db.query("delete from figritas where id=$1", [id]);
        return res.status(200).json({message: "Borrada"});
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}


module.exports = {obtenerFiguritas, agregarFiguritas, cambiarFiguritas, eliminar };