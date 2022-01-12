import { DefaultTheme } from "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
      breakpoints: string[],
      colors: {
        white:string,
        dimWhite:string,
        grey:string,
        greySecondary:string,
        primary:string,
        secondary:string,
        tertiary:string,
      }
    }
}

const breakpoints = ['40em', '52em', '64em', '80em']
const colors = {
    white:"#fff",
    dimWhite:"rgba(255,255,255,.4)",
    grey:"#d3d3d3",
    greySecondary:"#696969",
    primary:"#02AAB0",
    secondary:"#00CDAC",
    tertiary:"#00a0ff",
}

export default {
    breakpoints,
    colors,
} as DefaultTheme