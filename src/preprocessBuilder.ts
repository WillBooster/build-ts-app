export const preprocessBuilder = {
  env: {
    description: '.env files to be loaded.',
    type: 'array',
  },
  cascade: {
    description:
      'environment to load cascading .env files (e.g., `.env`, `.env.<environment>`, `.env.local` and `.env.<environment>.local`)',
    type: 'string',
  },
  'node-env': {
    description:
      'environment to load cascading .env files (e.g., `.env`, `.env.<NODE_ENV>`, `.env.local` and `.env.<NODE_ENV>.local`). Preferred over `cascade`.',
    type: 'boolean',
  },
} as const;
