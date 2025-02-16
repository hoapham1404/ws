#!/bin/bash

# Base URL of your Next.js app (Change if hosted remotely)
BASE_URL="http://localhost:3000"

# Path to the routes.ts file
ROUTES_FILE="constants/routes.ts"

# Extract all paths from routes.ts
paths=($(grep -oP '(?<=path: ")[^"]+' "$ROUTES_FILE"))

# Function to test each route
test_route() {
  local url="$BASE_URL$1"
  local response_code=$(curl -o /dev/null -s -w "%{http_code}" "$url")

  if [[ "$response_code" == "200" ]]; then
    echo "✅ $url - OK"
  else
    echo "❌ $url - Failed (HTTP $response_code)"
  fi
}

# Loop through each route and test it
for path in "${paths[@]}"; do
  test_route "$path"
done
