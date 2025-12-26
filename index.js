export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Node Test</title>
      <style>
        body {
          margin: 0;
          font-family: system-ui, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .card {
          background: rgba(0, 0, 0, 0.3);
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        h1 {
          margin-bottom: 10px;
        }
        p {
          opacity: 0.9;
        }
        small {
          display: block;
          margin-top: 20px;
          opacity: 0.6;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Node.js funcionando</h1>
        <p>Backend simple desplegado en Vercel</p>
        <small>${new Date().toLocaleString()}</small>
      </div>
    </body>
    </html>
  `);
}
