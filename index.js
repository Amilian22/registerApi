import app from "./src/app.js";
import connectDB from "./src/db.js";

const port = 3000;



connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})