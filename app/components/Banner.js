const Banner = () => {


        const rectangles = Array.from({ length: 20 }, () => <div id='rectangle'></div>);
      




    return (
        <div id='banner'>
            {rectangles}
        </div>
    )
}

export default Banner