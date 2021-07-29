import React from "react";
import { Typography } from "@material-ui/core";
import GoogleMaps from "../GoogleMaps";
import "./Search.css";

function Search() {
  return (
    <>
      <div className="search-container">
        <div className="by-destination-container">
          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h6"
          >
            Search hotels by your destination
          </Typography>
          <div className="bottom-search-container">
            <div className="input-search">
              <GoogleMaps />
            </div>
            <div>
              <Typography
                style={{ marginTop: "16px", fontWeight: "200" }}
                variant="h6"
              >
                or
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
