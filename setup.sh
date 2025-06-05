#!/bin/bash
set -e

# Install Node.js dependencies
npm install

# Optional: Run ESLint to check for linting errors
npm run lint || echo "Linting errors detected."

# Optional: Run Prettier to format code
npm run format || echo "Formatting issues detected."

# Optional: Build the project to ensure everything compiles
npm run build || echo "Build failed."