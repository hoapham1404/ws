#!/bin/bash

# Define an array of routes and their respective colors
declare -A screens=(
  ["yellow-screen"]="#FFFF00"
  ["orange-screen"]="#FFA500"
  ["pink-screen"]="#FFC0CB"
  ["purple-screen"]="#800080"
  ["black-screen"]="#000000"
  ["red-screen"]="#FF0000"
  ["green-screen"]="#008000"
  ["blue-screen"]="#0000FF"
  ["white-noise"]="#FFFFFF"
  ["broken-screen"]="#808080"
  ["screen-of-death-xp"]="#0000AA"
  ["screen-of-death-10"]="#002366"
  ["hacker-typer"]="#00FF00"
  ["fake-update-windows-10"]="#0078D7"
  ["fake-update-windows-xp"]="#003399"
  ["fake-update-mac-os-x"]="#A2AAAD"
  ["fake-update-ubuntu-22-04"]="#E95420"
  ["fake-update-chrome-os"]="#4285F4"
  ["dvd-screensaver"]="#000000"
  ["flip-clock"]="#222222"
  ["motivational-quote"]="#FFD700"
  ["no-signal"]="#808080"
)

# Loop through the routes
for route in "${!screens[@]}"; do
  dir="app/$route"
  file="$dir/page.tsx"

  # Ensure directory exists
  mkdir -p "$dir"

  # Get color from array
  color="${screens[$route]}"

  # Write or overwrite page.tsx
  cat > "$file" <<EOL
import Home from '@/app/screens/ColorScreen';
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const screen = { name: "${route//-/ }", path: "/$route", color: "$color", icon: null };

  return {
    title: \`Color: \${screen.name}\`,

    icons: screen.color
      ? [{
        url: \`data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect x='20' y='20' width='100' height='70' fill='\${encodeURIComponent(screen.color)}'/>
        </svg>\` }]
      : screen.icon
        ? [{ url: screen.icon }]
        : undefined,
  }
}

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  )
}
EOL

  echo "Created/Updated: $file"
done
