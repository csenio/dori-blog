import React from "react"
import PropTypes from "prop-types"
import { PostTemplate } from "../../components/postTemplate"

const AboutPagePreview = ({ entry, widgetFor }) => (
  <PostTemplate
    frontmatter={entry.getIn(["data", "title"])}
    html={widgetFor("body")}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
