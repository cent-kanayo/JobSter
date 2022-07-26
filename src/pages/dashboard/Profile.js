import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRow from "../../components/FormRow";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    location: user?.location || "",
    lastName: user?.lastName || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, lastName } = userData;
    if (!name || !email || !location || !lastName) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(updateUser({ name, email, location, lastName }));
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            value={userData.name}
            name="name"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            value={userData.lastName}
            name="lastName"
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            value={userData.email}
            name="email"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            value={userData.location}
            name="location"
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait" : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
