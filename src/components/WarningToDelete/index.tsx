import React, { useState } from "react";
import "./style.css";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useProductContext } from "../../context/productContext";

const DeleteConfirmationModal = ({ id }: { id: number }) => {
  const { deleteProduct } = useProductContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#201a1a",
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: "1.5rem",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <button className="settings__btn delete" onClick={handleOpen}>
        Удалить
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Вы точно хотите удалить этот товар?
          </Typography>
          <div className="modal-btn__container">
            <button
              className="modal-delete__btn"
              onClick={() => deleteProduct(id)}
            >
              Удалить
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteConfirmationModal;
