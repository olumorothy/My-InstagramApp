import { useState } from "react";
import getPhotoUrl from "get-photo-url";
import ProfileIcon from "../assets/profileIcon.svg";
const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Moroti Sonde",
    about: "Learning to work with react and become one of the great minds",
  });

  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  //state for seleting profile photo
  const [profilePhoto, setProfilePhoto] = useState(ProfileIcon);

  //create a function to update user details
  const updateUserDetails = (event) => {
    event.preventDefault(); //preventing load default behavior
    setUserDetails({
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    });
    setEditFormIsOpen(false);
  };

  //create a variable for the form and pass it into the section
  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" placeholder="Your Name" />
      <input type="text" id="" name="aboutUser" placeholder="About You" />
      <br />
      <button
        type="button"
        className="cancel-button"
        onClick={() => setEditFormIsOpen(false)}
      >
        Cancel
      </button>
      <button type="submit" className="Save">
        Save
      </button>
    </form>
  );

  const updateProfilePhoto = () => {
    //get selected photo
    //update state here
  };

  return (
    <section className="bio">
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput">
        <div
          className="profile-photo"
          role="button"
          title="Click to edit photo"
        >
          <img src={profilePhoto} alt="profile" />
        </div>
      </label>

      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>

        {editFormIsOpen ? (
          editForm
        ) : (
          <button onClick={() => setEditFormIsOpen(true)}>Edit</button>
        )}
      </div>
    </section>
  );
};
export default Bio;
