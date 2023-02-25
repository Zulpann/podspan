function navigation() {
  return (
    <div className="navigation">
        <nav>
          <div className="navleft">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='search'></div>
          </div>
          <div className="navmiddle">
            <div className="logo"></div>
            <a href='#'>PODSPAN</a>
          </div>
          <div className='navright'>
            <div className='mode'>
              <div className='moon'></div>
              <div className='swicth'></div>
            </div>
            <a href='#'>Login</a>
          </div>
        </nav>
    </div>
  );
};
export default navigation;