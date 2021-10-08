import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SimpleModal(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            consequuntur placeat voluptatibus. Dolorem perferendis natus
            recusandae aliquid earum mollitia consectetur delectus repellat. In
            enim, qui dolorum non porro ullam minus. Sed voluptates nam
            cupiditate et possimus quod dignissimos in quia maiores, praesentium
            consequatur non, cum illo ducimus ad veritatis, excepturi eum. Optio
            obcaecati blanditiis temporibus repellendus ut consequatur debitis
            odio!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
