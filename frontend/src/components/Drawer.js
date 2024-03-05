import * as React from "react";
import { Box, Drawer, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Delete } from "@mui/icons-material";

// Actions
import { removeFromCart } from "../redux/actions/cartActions";

const CartDrawer = ({ isOpen, toggleDrawer }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <div style={{ display: "flex", justifyContent: "center", margin: "8px" }}>
        <h2>Cart Items</h2>
      </div>
      {cartItems.map((item) => (
        <>
          <div style={{ margin: "16px" }}>
            <img
              src={item.imageUrl}
              alt={item.name}
            />
          </div>
          <div
            style={{
              margin: "8px 32px 8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <h4>Qty: {item.qty}</h4>
            </div>
            <div>
              <Delete onClick={() => removeFromCartHandler(item.product)} />
            </div>
          </div>
        </>
      ))}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Cart Drawer</Button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CartDrawer;
