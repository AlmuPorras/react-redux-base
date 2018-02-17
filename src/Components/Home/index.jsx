//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as selectors from './../../selectors'
//import * as actions from './game.actions'

/**
 *  Acceso a Home
 */
class Home extends Component {
  /**
   *  Component constructor.
   */
  constructor(props) {
    super(props)

    this.state = { rol: 'default' }
  }
  /**
   *  After mount component
   */
  componentDidMount() {

  }

  /**
   *  Component did update
   */
  componentDidUpdate() {

  }

  /**
   *  Before unmount component
   */
  componentWillUnmount() {

  }

  /**
   *  Render component
   *  @return  {Component}  The component
   */
  render() {
    const { homeContent } = this.props

    return (
      <div className='home-container'>
        { homeContent.title }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    homeContent: selectors.getHomeContent(state),
  }
}

/*const mapDispatchToProps = dispatch => {
  return {

  }
}*/

Home.propTypes = {
  homeContent: PropTypes.object,
}

export default connect(mapStateToProps, null)(Home)
