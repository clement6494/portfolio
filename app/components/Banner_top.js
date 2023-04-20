const Banner_top = () => {
  const parallelograms = Array.from({ length: 27 }, (_, index) => <div key={index} id='parallelogram'></div>);

  return (
    <div id='banner_top'>
      {parallelograms.map((para, index) => (
        <div key={index}>
          {para}
        </div>
      ))}
    </div>
  );
};

export default Banner_top