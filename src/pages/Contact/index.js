import React from 'react';
import Media from 'react-media';

const Contact = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ "minHeight" : "60vh"}}>

      <div className="row text-center">
        <div className="col-12 mb-4"><h3 className="px-2">Feel free to reach out with any questions or to schedule a consult!</h3></div>
        <div className="col-12"><h4>68. Ethel St., Metuchen NJ, 08840</h4></div>
        <Media queries={{
          small: "(max-width: 576px)",
          medium: "(min-width: 577px)"
        }}>
        {
          matches => (
            <div className="col-12">
              {matches.small &&
                <div className="col-12">
                  <h4>Telephone:<a href="tel:+17324948723"> 732-494-8723</a></h4>
                  <h4>Cellphone: <a href="tel:+18482190703">848-219-0703</a></h4>
                </div>
              }
              {matches.medium &&
                  <div className="col-12">
                    <h4>Telephone: 732-494-8723</h4>
                    <h4>Cellphone: 848-219-0703</h4>
                  </div>
                }
            </div>

          )
        }
        </Media>


        <div className="col-12"><h4>Email: <a href="mailto:jerry@ajamasonry.com">jerry@ajamasonry.com</a></h4></div>
      </div>

      </div>
    )
}

export default Contact;
