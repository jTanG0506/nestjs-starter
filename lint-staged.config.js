module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts': () => 'npm run type-check',
  // Run ESLint on all JavaScript / TypeScript files
  '**/*.(ts|js)': filenames => `npm run lint ${filenames.join(' ')}`,
}
