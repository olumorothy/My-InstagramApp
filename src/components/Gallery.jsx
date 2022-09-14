import Moroti_Sonde from "../assets/Moroti_Sonde.jpg";
import hull_logo from "../assets/hull_logo.jpeg";
import hulllogo from "../assets/hulllogo.jpeg";
import maleProfile from "../assets/maleProfile.jpg";
import img5 from "../assets/femaleProfile.jpeg";
const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>
      <section className="gallery">
        <div className="item">
          <img src={Moroti_Sonde} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={hulllogo} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={maleProfile} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={hull_logo} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={img5} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
      </section>
    </>
  );
};
export default Gallery;
