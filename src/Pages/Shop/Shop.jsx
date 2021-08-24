import React from 'react';
import {Route} from 'react-router-dom'

import {connect} from 'react-redux'

import CollectionsOverviewContainer from '../../Components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../Collection/collection.container';


import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
// import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'




class ShopPage extends React.Component {

  componentDidMount(){
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();


  }

  render () {
    const {match} = this.props;

    return (
          <div className='shop-page'>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}/>
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}/>
          </div>
      );
  }
}


const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  })

export default connect(null,mapDispatchToProps)(ShopPage)
