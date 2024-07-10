import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme"
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin(import.meta.env.VITE_FORMKIT_PRO_KEY, inputs)

const config = {
  plugins: [pro],
  icons: { ...genesisIcons },
  config: { rootClasses }
}

export default config
