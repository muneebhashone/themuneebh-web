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
    title: 'Real-time video infrastructure serving 500K concurrent users',
    description: 'Architected distributed streaming system with WebRTC, handling peak loads of 500K concurrent streams with 99.9% uptime. Reduced infrastructure costs by 60% through intelligent resource allocation and optimized CDN strategy.',
    industry: 'Media & Entertainment',
    clientSize: 'Series B Startup',
    duration: '6 months',
    techStack: ['Node.js', 'WebRTC', 'Redis', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: [
      { value: '500K', label: 'Concurrent Users', change: '+300%' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '60%', label: 'Cost Reduction', change: '-60%' }
    ],
    featured: true
  },
  {
    id: 'agentic-ai-system',
    number: '02',
    category: 'AI INFRASTRUCTURE',
    title: 'Orchestrating autonomous AI agents with 95% task success rate',
    description: 'Built orchestration system for autonomous AI agents handling 10K daily tasks with intelligent retry mechanisms, comprehensive observability, and fault-tolerant execution patterns.',
    industry: 'Enterprise SaaS',
    clientSize: 'Enterprise',
    duration: '4 months',
    techStack: ['TypeScript', 'Python', 'LangChain', 'Pinecone', 'PostgreSQL', 'Kubernetes'],
    metrics: [
      { value: '95%', label: 'Task Success Rate' },
      { value: '10K', label: 'Daily Tasks' },
      { value: '<2s', label: 'Avg Response Time' }
    ],
    featured: true
  },
  {
    id: 'call-center-platform',
    number: '03',
    category: 'VOICE COMMUNICATION',
    title: 'Distributed call routing handling 100K calls/day',
    description: 'Designed high-throughput call routing system achieving sub-100ms latency with 99.95% reliability across distributed infrastructure. Implemented intelligent load balancing and failover mechanisms.',
    industry: 'Telecommunications',
    clientSize: 'Growth Stage',
    duration: '5 months',
    techStack: ['Node.js', 'Twilio', 'SIP', 'Redis', 'RabbitMQ', 'PostgreSQL'],
    metrics: [
      { value: '100K', label: 'Calls Per Day' },
      { value: '<100ms', label: 'Routing Latency' },
      { value: '99.95%', label: 'Reliability' }
    ],
    featured: true
  },
  {
    id: 'ecommerce-backend',
    number: '04',
    category: 'ECOMMERCE',
    title: 'Scaling checkout infrastructure to $10M monthly GMV',
    description: 'Re-architected checkout and payment processing, reducing checkout time by 60% while processing 50K+ orders monthly with zero payment failures. Implemented distributed locking and idempotent operations.',
    industry: 'E-commerce',
    clientSize: 'Series A',
    duration: '3 months',
    techStack: ['Express.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS Lambda'],
    metrics: [
      { value: '$10M', label: 'Monthly GMV' },
      { value: '50K', label: 'Orders/Month', change: '+250%' },
      { value: '<2s', label: 'Checkout Time', change: '-60%' }
    ],
    featured: true
  },
  {
    id: 'enterprise-saas-api',
    number: '05',
    category: 'SAAS PLATFORM',
    title: 'Multi-tenant API serving 200 enterprise customers',
    description: 'Architected multi-tenant SaaS API with 99.99% uptime processing 10M API calls daily with strict SLA requirements. Implemented tenant isolation, rate limiting, and comprehensive monitoring.',
    industry: 'Enterprise SaaS',
    clientSize: 'Series C',
    duration: '8 months',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'CloudFlare'],
    metrics: [
      { value: '200', label: 'Enterprise Customers' },
      { value: '10M', label: 'API Calls/Day' },
      { value: '99.99%', label: 'SLA Achievement' }
    ],
    featured: true
  },
  {
    id: 'iot-data-pipeline',
    number: '06',
    category: 'REAL-TIME DATA',
    title: 'Processing 1B IoT events daily with 99.9% accuracy',
    description: 'Built high-throughput data ingestion pipeline handling 1 billion events daily with sub-500ms latency through sophisticated validation, deduplication, and stream processing.',
    industry: 'IoT & Manufacturing',
    clientSize: 'Enterprise',
    duration: '6 months',
    techStack: ['Node.js', 'Kafka', 'TimescaleDB', 'Grafana', 'Kubernetes'],
    metrics: [
      { value: '1B', label: 'Events Per Day' },
      { value: '99.9%', label: 'Data Accuracy' },
      { value: '<500ms', label: 'Processing Latency' }
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
