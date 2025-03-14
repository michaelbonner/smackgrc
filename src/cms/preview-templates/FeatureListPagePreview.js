import React from 'react'
import PropTypes from 'prop-types'
import { FeatureListPageTemplate } from '../../templates/feature-list'

const FeatureListPagePreview = ({ entry, widgetFor }) => (
  <FeatureListPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FeatureListPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeatureListPagePreview
