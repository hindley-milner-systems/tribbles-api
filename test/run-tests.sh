
#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Run all tests
echo "Running tests..."
npx ava test/*.test.js

# Display test results summary
if [ $? -eq 0 ]; then
  echo "✅ All tests passed!"
else
  echo "❌ Some tests failed. Check the output above for details."
fi
