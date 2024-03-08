import React from "react";
import "./dashboard.component.scss";
import { Button, TextField } from "@mui/material";

import PremiumIcon from "../../../public/assets/images/premium-icon.svg";
import ProfileImage from "../../../public/assets/images/profile-image.svg";
import CheckIcon from "../../../public/assets/images/check-icon.svg";

export const Dashboard = () => {
  return (
    <div className="main-view">
      <div className="premium-notification">
        <img className="icon" src={PremiumIcon} />
        <div className="content">
          <div className="title">Premium Account</div>
          <div className="description">
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilege, you
            can indulge in the freedom of downloading an unlimited number of
            resumes and cover letters in both PDF and Word formats.
          </div>
        </div>
      </div>
      <section className="account-information">
        <h2 className="account-information__title">Personal Information</h2>
        <div className="form-container">
          <div className="personal-information">
            <div className="personal-information__form">
              <div className="input-row">
                <TextField
                  className="input-field"
                  label="First Name"
                  value="Petter"
                  variant="outlined"
                />
                <TextField
                  className="input-field"
                  label="Last Name"
                  value="Cetera"
                  variant="outlined"
                />
              </div>
              <div className="input-row">
                <TextField
                  className="input-field"
                  label="City"
                  value="London"
                  variant="outlined"
                />
                <TextField
                  className="input-field"
                  label="Postal Code"
                  value="E2 4XF"
                  variant="outlined"
                />
              </div>
              <div className="input-row">
                <TextField
                  className="input-field"
                  label="Address"
                  value="123 Example"
                  variant="outlined"
                />
              </div>
              <div className="input-row">
                <TextField
                  className="input-field"
                  label="Email"
                  value="petter@gmail.com"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="16px" height="16px" src={CheckIcon} />
                    ),
                  }}
                />
                <TextField
                  className="input-field"
                  label="Phone"
                  value="+442223334444"
                  variant="outlined"
                />
              </div>
              <div className="input-row">
                <TextField
                  className="input-field"
                  label="Password"
                  value="Password"
                  variant="outlined"
                />
              </div>
            </div>
            <img className="profile-image" alt="" src={ProfileImage} />
          </div>
          <div className="email-notifications">
            Use this email to log in to your
            <span className="link-text"> resumedone.io </span>
            account and receive notifications.
          </div>
          <div className="form-action">
            <Button variant="contained">Save</Button>
          </div>
        </div>
        <div className="privacy-policy">
          <input className="checkbox" type="checkbox" />
          <div>
            Show my profile to serious employers on
            <span className="link-text"> hirethesbest.io </span>
            for free
          </div>
        </div>
        <div className="delete-panel">
          <div className="headline">Delete account</div>
          <div className="notification">
            If you delete your account you’ll be permanently removing it from
            our systems - you can’t undo it.
          </div>
          <Button variant="text" className="action-btn">
            Yes, Delete my account
          </Button>
        </div>
        <div className="support-panel">
          <div className="get-in-touch-message">
            <span className="link-text">
              Get in touch with our support team
            </span>
            &nbsp; if you have any question or want to leave some feedback.
            <div>We’ll be happy to hear from you.</div>
          </div>
          <div className="support-links">
            <div className="link">Terms & Conditions</div>
            <div className="link">Privacy Policy</div>
            <div className="link">FAQ</div>
            <div className="link">Contact Us</div>
          </div>
        </div>
      </section>
    </div>
  );
};
