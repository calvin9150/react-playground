import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../elements";
import { storage } from "./firebase";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const fileInput = useRef();
  const dispatch = useDispatch();
  const uploading = useSelector((state) => state.image.uploading);

  const selectFile = (e) => {
    console.log(fileInput.current.files[0]);
  };

  const uploadFB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("파일을 선택해주세요!");
      return;
    }

    dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));
  };

  return (
    <>
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
        disabled={uploading}
      />
      <Button _onClick={uploadFB}>업로드</Button>
    </>
  );
};

export default Upload;
