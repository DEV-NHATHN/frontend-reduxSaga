import { call, put, takeLatest } from 'redux-saga/effects'
import { getCatsSuccess } from './catSlice.js'

/*
call => Api
put => call actions
takeEvery, takeLatest => watch, trigger Func after call actions
*/

function* catSaga() {
   yield takeLatest('cats/getCatsStart', workGetCatsFetch)
}

function* workGetCatsFetch() {
   const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
   const formattedCats = yield cats.json()
   const formattedCatsShortened = formattedCats.slice(0, 10)
   yield put(getCatsSuccess(formattedCatsShortened))
}


export default catSaga