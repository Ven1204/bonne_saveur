import React from 'react'

class Banner extends React.Component {
  alerting() {
    alert('This should be linked to another page!!')
  }
  render() {
    return (
      <div>
        <section className="home-section-1--welcome">
          <div className="banner">
            {/* <div className='row'> */}
              <div className='col col-sm-12 pb-4' style={{backgroundColor: 'white'}}>
                <div className='pt-4 mb-4 pb-4 text-center'>
                  <h1>Bonne Saveur</h1>
                  <h2>Savor every moment.</h2>
                  <div className='cta-wrapper pt-2 mt-2'>
                    <button onClick={this.alerting}>Savourer l'Experience</button>
                  </div>
                  <div className='cta-wrapper pt-2 mt-2 pb-4'>
                    <button onClick={this.alerting}>Join Us</button>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </section>

        <section className="home-section-2--videos">
          <div className='col col-sm-12'>
            <div className='pt-4 mt-4 mb-4 pb-4 text-center'>
              <iframe width="560" height="315" src="https://gifer.com/embed/8Nuh" frameBorder="0"></iframe>
            </div>
          </div>
        </section>
        <hr />
        <section className="home-section-3--description">
          <div className='col col-sm-12'>
            <div className='pt-4 mt-4 mb-4 pb-4 text-center'>
              <iframe width="90%" height="315" src="https://gifer.com/embed/8Nuh" frameBorder="0"></iframe>
            </div>
          </div>
        </section>

        <section className="home-section-4--footer">
          <div className='col col-sm-12' style={{backgroundColor: 'white'}}>
            <div className='pt-4 mt-4 ' >
              <div>
                Bonne Saveur®
              </div>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </section>
      </div>
    )
  };
}

export default Banner;
