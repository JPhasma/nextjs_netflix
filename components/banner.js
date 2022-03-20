import style from './banner.module.css';

const Banner = (props) => {
  // destructure properties from props
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log('handleOnPlay');
  };

  return (
    <div>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <button onClick={handleOnPlay}>Play</button>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundPosition: '50% 50%',
        }}
      ></div>
    </div>
  );
};

export default Banner;
