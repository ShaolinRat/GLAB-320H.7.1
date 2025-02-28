import { useState } from "react";

export default function Form(props) {
  // State to hold form data
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // Handle changes in the input field
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    props.moviesearch(formData.searchterm); // Pass search term to App's getMovie function
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder="Enter movie title..."
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}