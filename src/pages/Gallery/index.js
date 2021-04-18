import React, {useState} from 'react';
import Media from 'react-media';
import { Link, useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { capitalizeEveryWord } from '../../functions';
import Image from '../../components/Image';
import '../../style/gallery.css';

const Gallery = props => {

  const [src, setSrc] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = e => {
    setSrc(e.target.attributes.src.value);
    setShow(true)
  };

  let { name } = useParams();
  const sources = Object.keys(importAllWithDirName(name));

  const dirName = name;
  name = name.replace(/-/g, ' ');

  const bullet = {
    "color": "#a27878"
  }

  const flex = navigator.userAgent.toLowerCase().indexOf("safari") !== -1 ? "display-flex" : "d-flex";

  return(
    <div>
      <div className="row d-flex align-items-baseline mb-2 text-center justify-content-center">
        <Media
          queries={{
            large: "(min-width: 440px)",
            medium: "(min-width: 357px) and (max-width: 439px)",
            small: "(max-width: 356px)"
          }}
        >
        {matches => (
          <div>
            {matches.large && <h2 className="mb-3"><u>GALLERY - {capitalizeEveryWord(name).toUpperCase()}</u></h2>}
            {/* annoying fucking size that doesn't wrap properly so we gotta put a stupid fucking media query in */}
            {matches.medium &&
              <div>
                <div><h2 className="mb-2"><u>Gallery</u></h2></div>
                <div><h2 className="mb-3"><u>{capitalizeEveryWord(name).toUpperCase()}</u></h2></div>
              </div>
              }
            {matches.small && <h2 className="mb-3"><u>GALLERY - {capitalizeEveryWord(name).toUpperCase()}</u></h2>}
          </div>
        )}
        </Media>

        <ul className="list-inline w-100 mx-3">
          <li className="list-inline-item text-burgandy"><Link to="/gallery/grills">Grills</Link></li>
          <li className="list-inline-item text-burgandy"><span style={bullet}>&bull;</span></li>
          <li className="list-inline-item text-burgandy"><Link to="/gallery/fireplaces">Fireplaces</Link></li>
          <li className="list-inline-item text-burgandy"><span style={bullet}>&bull;</span></li>
          <li className="list-inline-item text-burgandy"><Link to="/gallery/terrace-and-patios">Terrace and Patios</Link></li>
          <li className="list-inline-item text-burgandy"><span style={bullet}>&bull;</span></li>
          <li className="list-inline-item text-burgandy"><Link to="/gallery/brick-elevations">Brick Elevations</Link></li>
          <li className="list-inline-item text-burgandy"><span style={bullet}>&bull;</span></li>
          <li className="list-inline-item text-burgandy"><Link to="/gallery/stone-elevations">Stone Elevations</Link></li>
          <li className="list-inline-item text-burgandy"><span style={bullet}>&bull;</span></li>
          <li className="list-inline-item text-burgandy"><Link to="/gallery/walls-and-steps">Walls and Steps</Link></li>
          <li className="list-inline-item text-burgandy"><span style={bullet}>&bull;</span></li>
          <li className="list-inline-item text-burgandy"><Link to="/gallery/misc">Miscellaneous</Link></li>
        </ul>
      </div>

      <div onClick={
            () => window.scrollTo(0,0)
            }
            className="return">
        <strong>Return To Top</strong>
      </div>

      <div className="row mb-2 mx-4">
        { sources.map( (source, index) => {
            return (
              <div src={`/images/${dirName}/${source}`} key={index} className={'col-sm-12 col-md-4 bg-red rounded img-container mb-4 ' + flex} onClick={handleShow}>
                <Image classes="rounded my-auto mx-auto" source={`/images/${dirName}/${source}`} alternate={"Example of AJA " + name} key={index} />
              </div>
            )
          })}
      </div>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
          >
            <Modal.Header closeButton onClick={handleClose}>
              <h2 style={{color: "#fff"}}>Example of AJA {capitalizeEveryWord(name)}</h2>
            </Modal.Header>

            <Modal.Body>
              <Image source={`${src}`} alt={"Example " + name} classes="rounded" className="modal-body-img" />
            </Modal.Body>
          </Modal>
        </div>
  );
}

const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const importAllWithDirName = dir => {
  switch (dir) {
    case "grills":
      return importAll(
        require.context(`../../../public/images/grills`, true, /\.(png|jpe?g|PNG|JPE?G)$/)
      );
    case "fireplaces":
      return importAll(
        require.context(`../../../public/images/fireplaces`, true, /\.(png|jpe?g|PNG|JPE?G)$/)
      );
    case "brick-elevations":
      return importAll(
        require.context(`../../../public/images/brick-elevations`, true, /\.(png|jpe?g|PNG|JPE?G)$/)
      );
    case "stone-elevations":
      return importAll(
        require.context(`../../../public/images/stone-elevations`, true, /\.(png|jpe?g|PNG|JPE?G)$/)
      );
    case "terrace-and-patios":
      return importAll(
        require.context(`../../../public/images/terrace-and-patios`, true, /\.(png|jpe?g|PNG|JPE?G)$/)
      );
    case "walls-and-steps":
      return importAll(
        require.context(`../../../public/images/walls-and-steps`, true, /\.(png|jpe?g|PNG|JPE?G)$/)
      );
    default:
      return importAll(
        require.context(`../../../public/images/misc`, true, /\.(png|jpe?g|PNG|JPE?G)$/)
      );
  }
}

export default Gallery;
