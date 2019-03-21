import React, { Component } from "react";
import { Link } from "react-router-dom";
import serverUrl from "../constants";
import axios from "axios";
import ReactDOM from "react-dom";
import { league } from "../../players.json";
import "./PlayerShow.css";

const players = league.standard;

class PlayerShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: []
    };
  }

  componentDidMount() {
    this.setState({
      player: players.find(
        player => player.personId === this.props.match.params.personId
      )
    });
  }

  render() {
    const image = this.props.photos;
    return (
      <div className="row">
        <div className="thiscard w-75 offset</div>-1">
          <div />
          <div className="card-body">
            <div className="player-title-show">
              <h1 className="card-title-new">
                {this.state.player.firstName + " " + this.state.player.lastName}
              </h1>
            </div>
            <div className="row">
              <div className="col-6">
                <h2>Jersey Number: {this.state.player.jersey} </h2>
                <h2>Position: {this.state.player.pos}</h2>
                <h2>
                  Height:{" "}
                  {this.state.player.heightFeet +
                    "'" +
                    this.state.player.heightInches +
                    '"'}
                </h2>
                <h2>Weight: {this.state.player.weightPounds}</h2>
                <h2>Years Pro: {this.state.player.yearsPro}</h2>
                <h2>College: {this.state.player.collegeName}</h2>
              </div>
              <div className="col-6">
                <img
                  className="playerPhoto"
                  src={`https://nba-players.herokuapp.com/players/${
                    this.state.player.lastName
                  }/${this.state.player.firstName}`}
                />
              </div>
            </div>
          </div>
          <div className="add-button">
            <Link to={`/addPlayerToList/${this.state.player.personId}`}>
              <button className="btn btn-info">Add to My List</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerShow;
