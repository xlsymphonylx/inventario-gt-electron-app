import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

const routesPath = path.join(__dirname, 'routes');
fs.readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.ts') || file.endsWith('.js')) {
    const route = require(path.join(routesPath, file));
    if (route.default) {
      app.use(route.default);
    }
  }
});

export default app;