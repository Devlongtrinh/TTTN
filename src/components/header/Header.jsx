import Button from "@mui/material/Button";
import Tippy from "@tippyjs/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import "tippy.js/animations/scale.css";
import { auth } from "../../firebase/firebase-config";
import ArrowsDown from "../icon/ArrowsDown";
import "./header.scss";
import HeaderInfo from "./HeaderInfo";

const headerContent = [
  {
    id: 0,
    title: "Trang Chủ",
    to: "/",
  },
  {
    id: 1,
    to: "/movie",
    title: "Phim Chiếu Rạp",
  },
  {
    id: 2,
    to: "/tv",
    title: "Phim Bộ",
  },
];
const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-left">
          <NavLink to="/" className="header-logo">
            <img
              id="logo"
              alt=""
              src="//assets.glxplay.io/web/images/logoglx.svg"
              width="100"
            />
          </NavLink>
          <div className="header-list">
            {headerContent.map((item) => (
              <NavLink
                to={item.to}
                className={(isActive) =>
                  isActive ? "header-item active" : "header-item"
                }
                key={item.id}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
        {user ? (
          <Tippy
            hideOnClick={false}
            animation="scale"
            interactive={true}
            placement="bottom-start"
            content={<HeaderInfo displayName={user.displayName} />}
          >
            <div className="header-users">
              <div className="user-avatar">
                <img
                  src="https://cdn.dribbble.com/users/2400293/screenshots/18034200/media/7c9ad36bd345b48cdb1a1db87ba5d096.png?compress=1&resize=768x576&vertical=top"
                  alt=""
                />
              </div>
              <ArrowsDown />
            </div>
          </Tippy>
        ) : (
          <Link to="/login" className="header-auth">
            <Button variant="contained">Đăng Nhập</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
