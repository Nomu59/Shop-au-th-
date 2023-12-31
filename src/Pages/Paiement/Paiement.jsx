import React from "react";
import "../../assets/css/blackcard.css";

const Paiement = () => {
  return (
    <div>
      <div class="container">
        <div class="card">
          <button class="proceed">
            <svg class="sendicon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </button>
          <img
            src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png"
            class="logo-card"
          />
          <label id="label-cardnumber">
            Card number:
            <input
              id="user"
              type="text"
              class="input cardnumber"
              placeholder="1234 5678 9101 1121"
            />
          </label>
          <div className="grid grid-cols-2 grid-rows-1">
            <label>
              Name:
              <input class="input name" placeholder="Edgar Pérez" />
            </label>
            <label class="toleft">
              CCV:
              <input class="input toleft ccv" placeholder="321" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
