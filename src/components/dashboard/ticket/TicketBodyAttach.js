import React from "react";
import { connect } from "react-redux";
import { downloadImage, downloadFile } from "../../../actions/tickets";

const TicketBodyAttach = ({
  ticket_id,
  files,
  images,
  downloadImage,
  downloadFile,
}) => {
  return images.length || files.length ? (
    <div>
      <div className='title'>
        <strong className='icon-attachment'></strong>
        <strong className='ms-2'>Attachments:</strong>
      </div>
      <div className='ticket-attachments'>
        <ul className='list-unstyled'>
          <div className='images'>
            {images.length > 0 &&
              images.map((image) => (
                <li
                  key={image.id}
                  className='attachment-download'
                  download
                  onClick={() => downloadImage(ticket_id, image)}
                  role='button'
                >
                  <strong className='icon-download me-2'></strong>
                  {image.name}
                </li>
              ))}
          </div>
          <div className='files'>
            {files.length > 0 &&
              files.map((file) => (
                <li
                  key={file.id}
                  className='attachment-download'
                  download
                  onClick={() => downloadFile(ticket_id, file)}
                  role='button'
                >
                  <strong className='icon-download me-2'></strong>
                  {file.name}
                </li>
              ))}
          </div>
        </ul>
      </div>
    </div>
  ) : null;
};

export default connect(null, {
  downloadImage,
  downloadFile,
})(TicketBodyAttach);
