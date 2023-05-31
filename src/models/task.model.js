import { Schema,model } from "mongoose";

const taskSchema = new Schema({ 
    title: String,
    description: String,
    done:Boolean
},{
    timestamps: true,
    versionKey: false
})


const Task = model('Task',taskSchema)

export default Task