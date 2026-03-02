import express, { Application, Request, Response } from "express";
import cors from "express"; // wait cors is default export from cors package
import globalErrorHandler from "./middlewares/error.middleware";
import apiRouter from "./routes";

const app: Application = express();
const corsMiddleware = require("cors");

app.use(corsMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>QuickHire API</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
          color: #fff;
        }
        .card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
          max-width: 480px;
          width: 90%;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
        .logo {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, #3B41E3, #6366f1);
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 24px;
          box-shadow: 0 8px 24px rgba(59,65,227,0.4);
        }
        h1 { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .subtitle { color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 24px; }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(34,197,94,0.15);
          color: #4ade80;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 32px;
        }
        .dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .endpoints { text-align: left; width: 100%; }
        .endpoints h3 { font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.4); margin-bottom: 12px; }
        .endpoint {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.04);
          border-radius: 10px;
          margin-bottom: 6px;
          font-size: 13px;
        }
        .method {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          min-width: 44px;
          text-align: center;
        }
        .get { background: rgba(59,130,246,0.2); color: #60a5fa; }
        .post { background: rgba(34,197,94,0.2); color: #4ade80; }
        .path { color: rgba(255,255,255,0.7); font-family: monospace; }
        .footer { margin-top: 28px; font-size: 12px; color: rgba(255,255,255,0.3); }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="logo">Q</div>
        <h1>QuickHire API</h1>
        <p class="subtitle">v1.0.0 &middot; Job Portal Backend</p>
        <div class="badge"><span class="dot"></span> Operational</div>
        <div class="endpoints">
          <h3>Endpoints</h3>
          <div class="endpoint"><span class="method get">GET</span><span class="path">/api/jobs</span></div>
          <div class="endpoint"><span class="method post">POST</span><span class="path">/api/jobs</span></div>
          <div class="endpoint"><span class="method get">GET</span><span class="path">/api/applications</span></div>
          <div class="endpoint"><span class="method post">POST</span><span class="path">/api/applications</span></div>
          <div class="endpoint"><span class="method post">POST</span><span class="path">/api/upload</span></div>
        </div>
        <p class="footer">&copy; ${new Date().getFullYear()} QuickHire</p>
      </div>
    </body>
    </html>
  `);
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API route not found",
      },
    ],
  });
});

app.use(globalErrorHandler);

export default app;
