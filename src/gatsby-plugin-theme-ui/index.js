import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui"
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import merge from "deepmerge"

export default merge(blogTheme, wavesTheme);