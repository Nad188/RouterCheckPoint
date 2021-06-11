import React, { useState } from "react";
import MovieList from "../MovieList/MovieList";
import { Navbar, Form, FormControl } from "react-bootstrap";
import "./Home.css";
import ReactStars from "react-rating-stars-component";

const Home = ({ MoviesData }) => {
  const [filterbytitle, setFilterbytitle] = useState("");
  const [filterbyriting, setFilterbyriting] = useState(0);

  return (
    <div>
      <Navbar style={{ justifyContent: "center" }} bg="dark" variant="dark">
        <img className="logo" src="/logo.jpg" alt="logo" />
        <Navbar.Brand
          style={{
            marginRight: "480px",
            color: "hsl(43, 97%, 49%)",
            fontSize: "40px",
          }}
        >
          Golden Paradise Movies
        </Navbar.Brand>
        <ReactStars
          size={35}
          count={5}
          onChange={(x) => setFilterbyriting(x)}
        />
        <Form inline onChange={(e) => setFilterbytitle(e.target.value)}>
          <FormControl type="text" placeholder="Search" className="Search" />
        </Form>
      </Navbar>

      <MovieList
        MoviesData={MoviesData}
        filterbytitle={filterbytitle}
        filterbyriting={filterbyriting}
      />

      <div className="ftr">
        <span className="txt">Golden Paradise Movies</span>
        <span className="txt">All rights reserved</span>
      </div>
    </div>
  );
};

export default Home;
