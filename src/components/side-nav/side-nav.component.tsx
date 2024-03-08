import React from "react";
import LogoIcon from "../../../public/assets/images/logo.svg";
import BoardIcon from "../../../public/assets/images/board-icon.svg";
import FolderIcon from "../../../public/assets/images/folder-icon.png";
import LockedIcon from "../../../public/assets/images/locked-icon.png";
import RecentIcon from "../../../public/assets/images/recent-icon.svg";
import StarIcon from "../../../public/assets/images/star-icon.png";
import SettingsIcon from "../../../public/assets/images/setting-icon.svg";
import SearchIcon from "../../../public/assets/images/search-icon.svg";
import AddIcon from "../../../public/assets/images/add-icon.svg";
import Avatar from "../../../public/assets/images/user-avatar.svg";
import TemplateIcon from "../../../public/assets/images/template-logo.svg";
import "./side-nav.component.scss";

export const SideNav = () => {
  const searchList = [
    { isStarred: true, title: "Software Engineer" },
    { isStarred: true, title: "Computer hardware engineer" },
    { isStarred: true, title: "Network Engineer" },
    { isStarred: true, title: "Technical Support" },
    { isStarred: true, title: "Network administrator" },
    { isStarred: true, title: "Management" },
    { isStarred: true, title: "Data analysis" },
    { isStarred: true, title: "Computer technician" },
    { isStarred: false, title: "Past Search 1" },
    { isStarred: false, title: "Past Search 2" },
    { isStarred: false, title: "Computers and information technology" },
    { isStarred: false, title: "Database Administrator" },
    { isStarred: false, title: "Computer security" },
    { isStarred: false, title: "Computer Systems Analyst" },
  ];
  const boardList = [
    { isLocked: false, title: "Board 1" },
    { isLocked: false, title: "Board 2" },
    { isLocked: false, title: "Board 3" },
    { isLocked: true, title: "Board agent 1" },
    { isLocked: true, title: "Board agent 2" },
    { isLocked: true, title: "Board agent 3" },
  ];

  return (
    <div className="nav-bar">
      <div>
        <div className="logo-item">
          <img src={LogoIcon} />
        </div>
        <div className="menu-title">
          <img className="resume-icon" src={TemplateIcon} />
          <span>My Templates</span>
        </div>
        <div className="menu-item menu-title">
          <img className="resume-icon" src={SearchIcon} />
          <span>Search</span>
        </div>
        {searchList.map((item) => (
          <div
            key={item.title}
            className={item.isStarred ? "menu-item" : "menu-item recent-item"}
          >
            {item.isStarred ? (
              <img className="resume-icon" src={StarIcon} />
            ) : (
              <img className="resume-icon" src={RecentIcon} />
            )}
            <span>{item.title}</span>
          </div>
        ))}
        <div className="menu-title with-action">
          <div className="title">
            <img className="resume-icon" src={BoardIcon} />
            <span>My Boards</span>
          </div>
          <div className="action">
            <img className="resume-icon" src={AddIcon} />
          </div>
        </div>
        {boardList.map((item) => (
          <div key={item.title} className="menu-item">
            {item.isLocked ? (
              <img className="resume-icon" src={LockedIcon} />
            ) : (
              <img className="resume-icon" src={FolderIcon} />
            )}
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div className="nav-footer menu-item with-action">
        <div className="title">
          <img className="avatar-icon" src={Avatar} />
          <span>Carla</span>
        </div>
        <div className="action">
          <img className="resume-icon" src={SettingsIcon} />
        </div>
      </div>
    </div>
  );
};
