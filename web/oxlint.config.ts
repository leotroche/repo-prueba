import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['eslint', 'oxc', 'typescript', 'unicorn', 'react', 'jsx-a11y'],
  rules: {
    // Here you can add or modify specific rules for your project
  },
})
