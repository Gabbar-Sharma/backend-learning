import app from "./app/app.js";
import connectDb from "./app/config/db.js";

const PORT = 3000;

await connectDb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});