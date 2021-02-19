import PropTypes from 'prop-types'

const FlexContainer = (props) => {
  const {children, jc, ai, fd, wrap } = props;

  const inlineStyles = {
    display:'flex',
    justifyContent: jc,
    alignItems: ai,
    flexDirection: fd,
    flexWrap: wrap,
  }

  return (
    <div style={inlineStyles}>
      {children}
    </div>
  )
}

FlexContainer.defaultProps = {
  display: 'flex',
  jc: 'flex-start',
  ai: 'stretch',
  fd: 'row',
  wrap: 'wrap',
}


FlexContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default FlexContainer