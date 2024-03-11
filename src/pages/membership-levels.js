import React from "react";

const FormsSB = () => {
  return (
    <>
      <div className="case-studies-sidebar-sticky">
        <div className="case-studies-details-info">
          <ul>
            <li>
              <div className="icon" aria-label="Client">
                <i className="bx bx-user-pin"></i>
              </div>
              <span>Client:</span>
              <a href="https://helptucson.org/" target="_blank" rel="noreferrer">
                Old Pueblo Community Services
              </a>
            </li>
            <li>
              <div className="icon" aria-label="Location">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              Tucson, AZ USA
            </li>
            <li>
              <div className="icon" aria-label="Technologies">
                <i className="bx bx-purchase-tag"></i>
              </div>
              <span>Technologies:</span>
              Adobe Sign, Digital Workflow, Power Automate, PDF Integration, Automated Notifications
            </li>
            <li>
              <div className="icon" aria-label="Completed">
                <i className="bx bx-check"></i>
              </div>
              <span>Completed:</span>
              December 12th, 2022
            </li>
            <li>
              <div className="icon" aria-label="Website">
                <i className="bx bx-globe"></i>
              </div>
              <span>Website:</span>
              <a href="https://helptucson.org/" target="_blank" rel="noreferrer">
                helptucson.org
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FormsSB;
