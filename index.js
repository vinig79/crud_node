import app from './app.js';
import db from './src/database/database.js';

// Garante que o banco está preparado na inicialização
(async () => await db.createTables())();

// Exporta o app para o Vercel tratar como handler
export default app;
