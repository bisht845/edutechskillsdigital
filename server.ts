import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // In-memory lead store on server
  const serverLeads: Array<{
    id: string;
    createdAt: string;
    fullName: string;
    businessEmail: string;
    phoneNumber: string;
    companyName: string;
    interestedService: string;
    monthlyBudget: string;
    projectRequirements: string;
    status: string;
  }> = [];

  // API Endpoints
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', agency: 'EduTechSkillsDigital', timestamp: new Date().toISOString() });
  });

  app.post('/api/leads', (req: Request, res: Response) => {
    const lead = {
      ...req.body,
      id: req.body.id || `lead-${Date.now()}`,
      createdAt: req.body.createdAt || new Date().toISOString(),
      status: req.body.status || 'new'
    };
    serverLeads.unshift(lead);
    console.log(`[Lead Ingestion] New inquiry from ${lead.fullName} (${lead.companyName}) for ${lead.interestedService}`);
    res.status(201).json({ success: true, leadId: lead.id, lead });
  });

  app.get('/api/leads', (_req: Request, res: Response) => {
    res.json({ success: true, count: serverLeads.length, leads: serverLeads });
  });

  app.post('/api/newsletter', (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      res.status(400).json({ success: false, error: 'Valid email required' });
      return;
    }
    console.log(`[Newsletter] Subscribed: ${email}`);
    res.json({ success: true, message: 'Subscribed to EduTechSkillsDigital Executive Intelligence newsletter' });
  });

  // Vite middleware in dev or static files in production
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EduTechSkillsDigital server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
