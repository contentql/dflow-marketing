import {
  ChartColumnBigIcon,
  DatabaseIcon,
  TrendingUpIcon,
  WandSparklesIcon,
  ZapIcon,
} from 'lucide-react'

export const FEATURES = [
  {
    title: 'Project Management',
    description:
      'Create and manage projects effortlessly. Deploy projects with a streamlined workflow.',
    icon: WandSparklesIcon,
    image: '/images/features/project-management.png',
  },
  {
    title: 'Service Deployment',
    description:
      'Create and manage services within projects. Deploy services with minimal configuration.',
    icon: ChartColumnBigIcon,
    image: '/images/features/deployements.png',
  },
  {
    title: 'Domains Management',
    description: 'Attach and manage custom domains. Configure domain settings easily.',
    icon: TrendingUpIcon,
    image: '/images/features/domain-management.png',
  },
  {
    title: 'Server Management',
    description: 'Initialize and configure servers. Manage multiple servers efficiently.',
    icon: DatabaseIcon,
    image: '/images/features/server-management.png',
  },
  {
    title: 'Monitoring & Logs',
    description: 'Track deployment logs and service health. View real-time monitoring stats.',
    icon: ZapIcon,
    image: '/images/features/monitoring.png',
  },
]
