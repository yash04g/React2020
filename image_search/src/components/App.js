import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID wOGUi7-BnLiXbZFglfrh026UufpqvdUiHm6ApFfpHyQ",
        },
      })
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
    console.log(response.data.results);
    
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
// onSubmit is prop here not callback

export default App;
