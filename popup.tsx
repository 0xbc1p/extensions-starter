
import { CountButton } from "~components/count-button"
import { ThemeProvider } from "~theme"

function IndexPopup() {
  return (
    <ThemeProvider>
      <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
        <CountButton />
      </div>
    </ThemeProvider>
  )
}

export default IndexPopup
