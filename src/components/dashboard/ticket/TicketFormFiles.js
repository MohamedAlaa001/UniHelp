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

  return (
    <div className='mb-3'>
      <label className='form-label'>Attachments (Optional):</label>
      <input
        className='form-control'
        type='file'
        name='filesData'
        multiple
        onChange={(e) => onFileChange(e)}
        accept={acceptFileTypes}
      />
      <span>images, .pdf</span>
      {files.length > 0 &&
        files
          .filter((file) => file && validFileType(file))
          .map((file) => (
            <div
              key={uuidv4()}
              style={{ color: "var(--color-success)" }}
            >{`${file.name}`}</div>
          ))}
      {invalidFiles.length > 0 &&
        invalidFiles.map((file) => (
          <div
            key={uuidv4()}
            style={{ color: "var(--color-danger)" }}
          >{`${file.name} is not a valid file type`}</div>
        ))}
    </div>
  );
};

export default TicketFormFiles;
