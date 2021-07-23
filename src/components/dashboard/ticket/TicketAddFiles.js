import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addTicketFiles } from "../../../actions/tickets";

const TicketAddFiles = ({ ticket_id, addTicketFiles }) => {
  const [isValid, setIsValid] = useState(null);
  const [filesData, setFilesData] = useState({
    files: [],
    invalidFiles: [],
  });

  const { files, invalidFiles } = filesData;

  useEffect(() => {
    if (files.length > 0 && invalidFiles.length === 0) {
      setIsValid(true);
    } else {
      setIsValid(null);
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
  };

  const handlerRemoveFile = (file) => {
    const currFiles = files.filter((el) => el && el.name !== file.name);
    setFilesData({
      files: currFiles,
      invalidFiles: currFiles.filter((file) => file && !validFileType(file)),
    });
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("ticket_id", ticket_id);

    filesData.files.forEach((file) => {
      if (file.type.match("image.*")) {
        formData.append("image", file, file.name);
      } else {
        formData.append("file", file, file.name);
      }
    });

    addTicketFiles(formData);
    setFilesData({
      files: [],
      invalidFiles: [],
    });
  };

  return (
    <div>
      <div className='title'>
        <strong className='icon-upload me-2'></strong>
        <strong>Add Files</strong>
      </div>
      <form onSubmit={(e) => handlerOnSubmit(e)}>
        <div className='mb-3'>
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
          <div className='row'>
            <div className='col-sm-12 col-md-3 mb-3 mb-md-0'>
              <input
                type='button'
                className='btn btn-primary w-100'
                value='Browse...'
                onClick={() =>
                  document.getElementById("input-select-file").click()
                }
              />
            </div>
            <div className='col-sm-12 col-md-3'>
              <input
                type='submit'
                className='btn btn-primary w-100'
                value='Submit'
                disabled={!isValid}
              />
            </div>
          </div>
          {/* <div className='d-grid gap-2'>
            
            
          </div> */}

          <span className='d-block my-2'>Images, .pdf, .doc, .docx, .xml</span>
        </div>

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
      </form>
    </div>
  );
};

export default connect(null, { addTicketFiles })(TicketAddFiles);
