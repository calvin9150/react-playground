import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import { storage } from "../../shared/firebase";
import Upload from "../../shared/Upload";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));

const initialState = {
  image_url:
    "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
  uploading: false,
};

function uploadImageFB(image) {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));

    console.log(`images/${new Date().getTime()}_${image.name}`);
    const _upload = storage.ref(`images/${image.name}`).put(image);

    //   업로드!
    _upload
      .then((snapshot) => {
        console.log(snapshot);

        // 업로드한 파일의 다운로드 경로를 가져오자!
        snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          dispatch(uploadImage(url));
        });
      })
      .catch((err) => {
        dispatch(uploading(false));
      });
  };
}

export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  uploadImageFB,
};

export { actionCreators };
