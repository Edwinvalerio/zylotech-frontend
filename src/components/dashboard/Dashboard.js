import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      isLiked: false
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleAddToFavorite = this.handleAddToFavorite.bind(this);
  }
  componentDidMount() {
    this.handleNext();
  }
  handleNext() {
    this.setState({
      isLoaded: false,
      isLiked: false
    });
    axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
      this.setState({
        imageUrl: res.data.message,
        isLoaded: true
      });
    });
  }
  handleAddToFavorite() {
    axios
      .post("http://localhost:4000/addfavorite", { url: this.state.imageUrl })
      .then(res => {
        this.setState({
          isLiked: true
        });
        setTimeout(() => {
          this.handleNext();
        }, 1000);
      });
  }
  render() {
    let { imageUrl } = this.state;
    return (
      <div>
        <div id="explor-image-container">
          {this.state.isLoaded ? (
            <div
              className={`slide-in-top ${
                this.state.isLiked ? "isLiked slide-out-blurred-left" : null
              }`}
              id="dog-image"
              style={{
                backgroundImage: `url("${imageUrl}")`
              }}
            ></div>
          ) : (
            <h1 id="loading-title">
              <span role="img" aria-label="sheep">
                🐶
              </span>{" "}
              Loading..
            </h1>
          )}
        </div>
        <div id="btn-container">
          <i
            onClick={this.handleAddToFavorite}
            className="fas fa-grin-hearts jello-horizontal"
          ></i>
          <i
            onClick={this.handleNext}
            className="fas fa-arrow-circle-right"
          ></i>
        </div>
      </div>
    );
  }
}
