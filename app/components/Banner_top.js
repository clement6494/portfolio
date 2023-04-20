const Banner_top = () => {
    const parallelograms = Array.from({ length: 27 }, () => <div id='parallelogram'></div>);
  
    return (
      <div id='banner_top'>
        {parallelograms}
      </div>
    );
  };

export default Banner_top