import {takeLatest, call, put, all, takeEvery} from 'redux-saga/effects';
import {USER_ACTION_TYPES} from './user.types';
import {signInSuccess, signInFailed} from './user.action';

import {
    getCurrentUser,
    createUserDocumentFromAuth,
    SignInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additinalDetails) {
    try {
        const userSnapShot = yield call(createUserDocumentFromAuth, userAuth, additinalDetails);
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));
    } catch (error) {
        console.log("this is an error ", error)
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield call(SignInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(email, password) {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart)]);
}