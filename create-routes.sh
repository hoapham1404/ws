#!/bin/bash

# Path to the routes.ts file
ROUTES_FILE="constants/routes.ts"

# Extract all paths from routes.ts
paths=($(grep -oP '(?<=path: ")[^"]+' "$ROUTES_FILE"))

# Loop through each extracted path
for path in "${paths[@]}"; do
  # Remove the leading slash to use as folder name
  route="${path#/}"
  dir="app/$route"
  file="$dir/page.tsx"

  # Ensure directory exists
  mkdir -p "$dir"

  # Write page.tsx
  cat > "$file" <<EOL
import Home from '@/app/screens/ColorScreen';
import { Metadata } from 'next';
import { getRouteByPath } from '@/constants/routes';

export async function generateMetadata(): Promise<Metadata> {
  const screen = getRouteByPath("$path");

  return {
    title: \`Color: \${screen?.name || "Unknown"}\`,

    icons: screen?.color
      ? [{
        url: \`data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect x='20' y='20' width='100' height='70' fill='\${encodeURIComponent(screen.color)}'/>
        </svg>\` }]
      : screen?.icon
        ? [{ url: screen.icon }]
        : undefined,
  };
}

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
EOL

  echo "Created/Updated: $file"
done

