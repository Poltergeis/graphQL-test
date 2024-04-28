import mongoose from "mongoose";
import { IPersona } from "../../domain/IPersona";

const personaSchema = new mongoose.Schema<IPersona>({
    nombre:{
        required: true,
        type: mongoose.Schema.Types.String
    },
    edad:{
        required: true,
        type: mongoose.Schema.Types.Number
    },
    trabajo:{
        required: true,
        type: mongoose.Schema.Types.String
    },
    mayorDeEdad:{
        required: true,
        type: mongoose.Schema.Types.Boolean
    },
    ciudad:{
        required: true,
        type: mongoose.Schema.Types.String
    }
},{versionKey:false});

export const personaModel = mongoose.model('persona',personaSchema,'personas');