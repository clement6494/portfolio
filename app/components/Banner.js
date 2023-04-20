

const Banner = () => {
    const rectangles = Array.from({ length: 20 }, (_, index) => <div key={index} id='rectangle'></div>);
  
    return (
      <div id='banner'>
        {rectangles.map((rect, index) => (
          <div key={index}>
            {rect}
          </div>
        ))}
      </div>
    )
  }
  

export default Banner