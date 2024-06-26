import { model } from "mongoose";
import activitySchema from "./schemas/activitySchema.js";

const Activity = model("Activity", activitySchema);

export default Activity;
