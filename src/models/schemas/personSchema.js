import { Schema } from "mongoose";

const adminSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "Role",
        require: true,
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: "Branch",
        require: false,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default adminSchema;
