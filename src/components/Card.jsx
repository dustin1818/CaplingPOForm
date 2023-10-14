import SearchInput from "../components/SearchInput";
import SupplierList from "./SupplierList";

const Card = () => {
  return (
    <div className="card">
      <div className="card_upper">
        <h1 className="card_heading">Browse</h1>
        <div className="card_heading_icon_container">
          <button className="card_heading_icon_container_btn_x">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="x">
                <path
                  id="Vector"
                  d="M15 5L5 15"
                  stroke="#7B7B7B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M5 5L15 15"
                  stroke="#7B7B7B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <SearchInput />
      </div>
      <hr style={{ marginTop: "24px" }} />
      <SupplierList />
    </div>
  );
};

export default Card;
