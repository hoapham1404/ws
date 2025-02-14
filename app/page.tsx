import ColorPicker from "./components/ColorPicker"

export async function generateMetadata() {
  return {
    title: "Color: White Screen",
    icons: [
      {
        url: `data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent("#FFFFFF")}'/>
        </svg>`,
      },
    ],
  }
}
export default function HomePage() {
  return (<ColorPicker />)
}
