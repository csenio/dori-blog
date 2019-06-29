import React from "react"
import PropTypes from "prop-types"
import { PostTemplate } from "../../components/postTemplate"

const PostPreview = ({ entry, widgetFor }) => (
  <PostTemplate
    frontmatter={entry.getIn(["data", "title"])}
    html={widgetFor("body")}
    isPreview
  />
)

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PostPreview
