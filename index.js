import app from './app.js';
import db from './src/database/database.js';

(async () => await db.createTables())();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`PORT: ${PORT}`));
