export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  industry?: string;
  clientSize?: string;
  duration?: string;
  techStack: string[];
  challenges?: string[];
  approach?: string;
  metrics: {
    value: string;
    label: string;
    change?: string;
  }[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'live-streaming-platform',
    number: '01',
    category: 'LIVE STREAMING',
    title: 'Optimized video streaming backend for regional platform',
    description: 'Improved streaming infrastructure reliability and reduced buffering issues for a regional live streaming platform. Implemented better caching strategies and optimized database queries to handle concurrent viewers during peak hours.',
    industry: 'Media & Entertainment',
    clientSize: 'Early Stage Startup',
    duration: '4 months',
    techStack: ['Node.js', 'Redis', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: [
      { value: '35%', label: 'Latency Reduction' },
      { value: '98.5%', label: 'Uptime' },
      { value: '25%', label: 'Infrastructure Savings' }
    ],
    featured: true
  },
  {
    id: 'agentic-ai-system',
    number: '02',
    category: 'AI TOOLS',
    title: 'Built task automation system with LLM integration',
    description: 'Developed backend service for AI-powered task automation, integrating with OpenAI API. Implemented retry logic, error handling, and queue management to process user requests reliably.',
    industry: 'Productivity SaaS',
    clientSize: 'Seed Stage',
    duration: '3 months',
    techStack: ['TypeScript', 'OpenAI API', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { value: '2K', label: 'Daily Requests' },
      { value: '1.8s', label: 'Avg Response Time' },
      { value: '92%', label: 'Success Rate' }
    ],
    featured: true
  },
  {
    id: 'call-center-platform',
    number: '03',
    category: 'TELEPHONY',
    title: 'Call routing service for customer support platform',
    description: 'Built call routing backend using Twilio APIs to intelligently distribute incoming calls based on agent availability and skill matching. Implemented webhook handlers and real-time status tracking.',
    industry: 'Customer Support',
    clientSize: 'SMB',
    duration: '3 months',
    techStack: ['Node.js', 'Twilio', 'Redis', 'PostgreSQL', 'Express'],
    metrics: [
      { value: '5K', label: 'Daily Calls' },
      { value: '280ms', label: 'Avg Routing Time' },
      { value: '97%', label: 'Connection Success' }
    ],
    featured: true
  },
  {
    id: 'ecommerce-backend',
    number: '04',
    category: 'ECOMMERCE',
    title: 'Refactored checkout flow for growing online store',
    description: 'Redesigned checkout API to reduce payment processing errors and improve transaction reliability. Added proper error handling, idempotency keys, and better logging for debugging payment issues.',
    industry: 'E-commerce',
    clientSize: 'SMB',
    duration: '2 months',
    techStack: ['Express.js', 'PostgreSQL', 'Stripe', 'Redis'],
    metrics: [
      { value: '8K', label: 'Monthly Orders' },
      { value: '40%', label: 'Error Reduction' },
      { value: '3.2s', label: 'Avg Checkout Time' }
    ],
    featured: true
  },
  {
    id: 'enterprise-saas-api',
    number: '05',
    category: 'REST API',
    title: 'Multi-tenant REST API for B2B SaaS application',
    description: 'Designed and built multi-tenant API with tenant isolation, authentication middleware, and rate limiting. Implemented proper database indexing and query optimization for better performance.',
    industry: 'B2B SaaS',
    clientSize: 'Series A',
    duration: '5 months',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    metrics: [
      { value: '45', label: 'Active Tenants' },
      { value: '500K', label: 'Daily API Calls' },
      { value: '98.9%', label: 'Uptime' }
    ],
    featured: true
  },
  {
    id: 'iot-data-pipeline',
    number: '06',
    category: 'DATA PROCESSING',
    title: 'Event processing pipeline for sensor data',
    description: 'Built data ingestion service to collect and process sensor events from IoT devices. Implemented batching, validation, and time-series storage for monitoring dashboards.',
    industry: 'IoT',
    clientSize: 'Growth Stage',
    duration: '4 months',
    techStack: ['Node.js', 'MQTT', 'TimescaleDB', 'Grafana', 'Docker'],
    metrics: [
      { value: '2M', label: 'Daily Events' },
      { value: '850ms', label: 'P95 Latency' },
      { value: '96%', label: 'Data Integrity' }
    ],
    featured: true
  }
];

// Helper functions
export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(cs => cs.featured);
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id);
}
