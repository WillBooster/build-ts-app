export const builder = {
  input: {
    description: 'A file path of main source code. Default value is "src/index.{ts,tsx}" from package directory.',
    type: 'string',
    alias: 'i',
  },
  'core-js': {
    description: 'Whether or not core-js is employed.',
    type: 'boolean',
    default: false,
  },
  minify: {
    description: 'Whether or not minification is enabled.',
    type: 'boolean',
    default: true,
  },
  sourcemap: {
    description: 'Whether or not sourcemap is enabled.',
    type: 'boolean',
    default: true,
  },
  external: {
    description: 'Additional external dependencies.',
    type: 'array',
  },
  verbose: {
    description: 'Whether or not verbose mode is enabled.',
    type: 'boolean',
    alias: 'v',
  },
  env: {
    description: 'Environment variables to be inlined.',
    type: 'array',
    alias: 'e',
  },
  dotenv: {
    description: '.env files to be inlined.',
    type: 'array',
  },
  watch: {
    description: 'Whether watch mode is enabled or not',
    type: 'boolean',
    alias: 'w',
  },
  silent: {
    description: 'Whether watch mode is enabled or not',
    type: 'boolean',
    alias: 's',
  },
} as const;

export const appBuilder = {
  ...builder,
  moduleType: {
    description: 'esm or cjs. Automatically detected by default.',
    type: 'string',
    alias: 'm',
  },
} as const;

export const functionsBuilder = {
  ...appBuilder,
  onlyPackageJson: {
    description: 'Whether to generate only package.json.',
    type: 'boolean',
  },
} as const;

export const libBuilder = {
  ...builder,
  // .js files in a package with `"type": "module"` are treated as esm.
  // However, we want to treat them as cjs in the case where a cjs project imports an esm package.
  // To deal with the case, we use .cjs and .mjs extensions instead of .js extension.
  jsExtension: {
    description: 'Whether to use .js extension instead of .cjs and .mjs',
    type: 'boolean',
    alias: 'j',
  },
} as const;

export type AnyBuilderType = typeof appBuilder | typeof functionsBuilder | typeof libBuilder;
