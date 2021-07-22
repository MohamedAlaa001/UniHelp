import Spinner from "./Spinner";
import FireFly from "./FireFly";
import "./layout.scss";

const Processing = () => {
  return (
    <div className='processing-overlay'>
      <FireFly />
      <div className='header'>
        <Spinner />
        <h1>Processing...</h1>
      </div>
      <h4>Please wait while your request is processed.</h4>
    </div>
  );
};

export default Processing;
