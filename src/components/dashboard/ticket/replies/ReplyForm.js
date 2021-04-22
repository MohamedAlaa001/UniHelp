import { Fragment, useState } from 'react';

const ReplyForm = () => {
  const [replyContent, setReplyContent] = useState('');

  const onChangeTextHandler = (e) => {
    setReplyContent(e.target.value);
  };
  return (
    <Fragment>
      <form>
        <div className='row'>
          <div className='col-sm-12 col-md-8 col-lg-9'>
            <div className='form-floating mb-3 '>
              <textarea
                className='form-control input-material '
                name='content'
                value={replyContent}
                placeholder=''
                onChange={(e) => onChangeTextHandler(e)}
              ></textarea>
              <label htmlFor='content' className='label-material'>
                Reply Content
              </label>
            </div>
          </div>
          <div className='col'>
            {/* Private Reply */}
            <div className='form-check form-switch'>
              <input type='checkbox' className='form-check-input' />
              <label className='form-check-label ms-1'>Private Reply</label>
            </div>
            {/* Submit */}
            <input
              type='submit'
              className='btn btn-outline-primary w-100'
              value='Submit'
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ReplyForm;
