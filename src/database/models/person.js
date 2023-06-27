import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';

class Person extends Model { }

Person.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: "the name is only letters"
            },
            len: {
                args: [3, 50],
                msg:"max-characters '50' and min-characters '3'"
            }
        }
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: "the lastName is only letters"
            },
            len: {
                args: [3, 50],
                msg:"max-characters '50' and min-characters '3'"
            }
        }
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: "the name is only letters"
            },
            len: {
                args: [3, 50],
                msg:"max-characters '50' and min-characters '3'"
            }
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: "the name is only letters"
            },
            len: {
                args: [3, 50],
                msg:"max-characters '50' and min-characters '3'"
            }
        }
    }
},{
    sequelize,
    modelName:"Person"
})


export default Person