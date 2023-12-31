import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { useAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CustomMenu = () => {
  const { handleLogOut, currentUser, isAdmin } = useAuthContext();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuLogOut = () => {
    handleLogOut(navigate);
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar src="/broken-image.jpg" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/user-page");
            setAnchorEl(null);
          }}
        >
          Профиль
        </MenuItem>
        <MenuItem
          className="custom__links"
          onClick={() => {
            navigate("/about");
            setAnchorEl(null);
          }}
        >
          О нас
        </MenuItem>
        <MenuItem
          className="custom__links"
          onClick={() => {
            navigate("/our-work");
            setAnchorEl(null);
          }}
        >
          Наши продукты
        </MenuItem>
        <MenuItem
          className="custom__links"
          onClick={() => {
            navigate("/contacts");
            setAnchorEl(null);
          }}
        >
          Контакты
        </MenuItem>
        {isAdmin && (
          <>
            <MenuItem
              onClick={() => {
                navigate("/add-product");
                setAnchorEl(null);
              }}
            >
              Добавить товар
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/admin-product-list");
                setAnchorEl(null);
              }}
            >
              Cписок всех товаров
            </MenuItem>
          </>
        )}
        <MenuItem onClick={menuLogOut}>Выйти</MenuItem>
      </Menu>
    </div>
  );
};

export default CustomMenu;
