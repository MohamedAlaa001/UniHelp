import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TicketFormFiles = ({ filesData, setFilesData, setIsValid }) => {
  const { files, invalidFiles } = filesData;

  useEffect(() => {
    if (files.length && invalidFiles.length) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    // eslint-disable-next-line
  }, [files]);

  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const acceptFileTypes =
    "image/*,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  const validFileType = (file) => {
    return fileTypes.includes(file.type);
  };

  const onFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFilesData({
      files: filesArray,
      invalidFiles: filesArray.filter((file) => file && !validFileType(file)),
    });
    // filesArray.forEach((file) => console.log(file.type));
  };

  const handlerRemoveFile = (file) => {
    const currFiles = files.filter((el) => el && el.name !== file.name);
    setFilesData({
      files: currFiles,
      invalidFiles: currFiles.filter((file) => file && !validFileType(file)),
    });
  };

  return (
    <div className='mb-3'>
      <label className='form-label'>Attachments (Optional):</label>
      <input
        className='form-control'
        id='input-select-file'
        type='file'
        name='filesData'
        multiple
        onChange={(e) => onFileChange(e)}
        accept={acceptFileTypes}
        style={{ display: "none" }}
      />
      <input
        type='button'
        className='btn btn-primary d-block'
        value='Browse...'
        onClick={() => document.getElementById("input-select-file").click()}
      />
      <span className='d-block my-2'>Images, .pdf, .doc, .docx, .xml</span>
      {files.length > 0 &&
        files
          .filter((file) => file && validFileType(file))
          .map((file) => (
            <div
              key={uuidv4()}
              className='d-flex align-items-center'
              style={{ color: "var(--color-success)" }}
            >
              <span
                className='icon-close me-2'
                onClick={() => handlerRemoveFile(file)}
              ></span>
              <span>{`${file.name}`}</span>
            </div>
          ))}
      {invalidFiles.length > 0 &&
        invalidFiles.map((file) => (
          <div
            key={uuidv4()}
            className='d-flex align-items-center'
            style={{ color: "var(--color-danger)" }}
          >
            <span
              className='icon-close me-2'
              onClick={() => handlerRemoveFile(file)}
            ></span>
            <span>{`${file.name} is not a valid file type`}</span>
          </div>
        ))}
    </div>
  );
};

export default TicketFormFiles;
