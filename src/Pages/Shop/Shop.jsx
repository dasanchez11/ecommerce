import React, {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom'

import {connect} from 'react-redux'

// import CollectionsOverviewContainer from '../../Components/collections-overview/collections-overview.container'
// import CollectionPageContainer from '../Collection/collection.container';
import Spinner from '../../Components/spinner/spinner.component';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
// import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'

const CollectionsOverviewContainer = lazy(()=> import('../../Components/collections-overview/collections-overview.container'))
const CollectionPageContainer = lazy(()=> import('../Collection/collection.container'))



class ShopPage extends React.Component {

  componentDidMount(){
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();


  }

  render () {
    const {match} = this.props;

    return (
          <div className='shop-page'>
            <Suspense fallback={<Spinner/>}>
              <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}/>
              <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}/>
            </Suspense>
            
          </div>
      );
  }
}


const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  })

export default connect(null,mapDispatchToProps)(ShopPage)
