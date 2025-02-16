#!/bin/bash

# Define an array of routes
routes=(
  "yellow-screen"
  "orange-screen"
  "pink-screen"
  "purple-screen"
  "black-screen"
  "red-screen"
  "green-screen"
  "blue-screen"
  "white-noise"
  "broken-screen"
  "screen-of-death-xp"
  "screen-of-death-10"
  "hacker-typer"
  "fake-update-windows-10"
  "fake-update-windows-xp"
  "fake-update-mac-os-x"
  "fake-update-ubuntu-22-04"
  "fake-update-chrome-os"
  "dvd-screensaver"
  "flip-clock"
  "motivational-quote"
  "no-signal"
)

# Loop through the routes
for route in "${routes[@]}"; do
  dir="app/$route"
  file="$dir/page.tsx"

  # Create directory if it doesn't exist
  mkdir -p "$dir"

  # Create page.tsx with content if it doesn't exist
  if [[ ! -f "$file" ]]; then
    cat > "$file" <<EOL
export default function Page() {
  return <h1>Hello World</h1>;
}
EOL
    echo "Created: $file"
  else
    echo "Skipped (already exists): $file"
  fi
done
