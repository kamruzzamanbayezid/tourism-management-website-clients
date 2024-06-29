import PropTypes from 'prop-types';

const CommonButton = ({ text, width = '100px', height = '40px' }) => {
      return (
            <div>
                  <button style={{
                        width: `${width}`,
                        height: `${height}`
                  }} className='text-white common-bg rounded text-base font-medium'>{text}</button>
            </div >
      );
};

CommonButton.propTypes = {
      text: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string
};

export default CommonButton;