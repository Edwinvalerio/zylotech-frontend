import React, { Component } from "react";
import axios from "axios";
import "./Favorites.css";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { favorites: [] };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:4000/getFavorites").then(res => {
      this.setState({
        favorites: res.data
      });
      console.log(this.state.favorites);
    });
  }
  handleDelete(id) {
    axios.post("http://localhost:4000/deletefavorite", { id: id }).then(res => {
      console.log(res.data);
    });
    this.setState({
      favorites: this.state.favorites.filter(dog => dog.id !== id)
    });
  }
  render() {
    return (
      <div>
        <div className="image-grid">
          {this.state.favorites.length
            ? this.state.favorites.map((image, index) => (
                <div>
                  <div
                    key={image.id}
                    className="dog-image-grid"
                    style={{
                      backgroundImage: `url("${image.image_url}")`
                    }}
                  >
                    <i
                      onClick={() => this.handleDelete(image.id)}
                      class="fas fa-trash-alt"
                    ></i>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div id="total-liked-container">
          <h1>{this.state.favorites.length} Favorites</h1>
        </div>
      </div>
    );
  }
}
