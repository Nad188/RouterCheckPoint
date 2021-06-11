import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Add.css";

const Add = ({ upload, setUpload }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [PosterURL, setPosterURL] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Rating, setRating] = useState("");

  const add = (e) => {
    e.preventDefault;
    let newMovie = {
      PosterURL,
      Title,
      Description,
      Rating,
    };
    setUpload([...upload, newMovie]);
  };

  return (
    <>
      <Button
        style={{
          width: "19rem",
          height: "670px",
          backgroundColor: "#f8b304",
          color: "black",
          border: "none",
        }}
        variant="primary"
        onClick={handleShow}
      >
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="title">
            PS:Title and rating are must
          </Modal.Title>
        </Modal.Header>
        <label className="label">PosterURL</label>
        <input
          className="inp"
          type="text"
          placeholder="enter the PosterURL"
          onChange={(e) => setPosterURL(e.target.value)}
        />
        <label className="label">Title</label>
        <input
          className="inp"
          type="text"
          placeholder="enter the Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="label">Description</label>
        <input
          className="inp"
          type="text"
          placeholder="enter the Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="label">Rating</label>
        <input
          className="inp"
          type="text"
          placeholder="enter the Rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "#f8b304",
              color: "black",
              border: "none",
            }}
            variant="primary"
            onClick={add}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
