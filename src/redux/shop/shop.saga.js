import {takeLatest, call, put} from 'redux-saga/effects';

import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/firebase.utils'

import {fetchCollectionsSuccess, fetchCollectionFailure} from './shop.actions'

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync(){
    yield console.log('I am fired');

    try{
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
    yield put(fetchCollectionFailure(error.message));
    }
    
}

export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync 
        );
}

