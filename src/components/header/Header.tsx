import { useNavigate } from "react-router-dom";
import { LOGOUT_SVG, USER_SVG } from "../../helpers/svgs";

export default function Header() {
  const navigate = useNavigate();

  function renderLogoutButton() {
    return (
      <span onClick={logoutClicked} className="ms-8 me-5">
        {LOGOUT_SVG}
      </span>
    );
  }

  function logoutClicked() {
    localStorage.removeItem("eurl_token");
    localStorage.removeItem("eurl_userName");
    navigate("/login");
  }

  function isUserLoggedIn() {
    const userName = localStorage.getItem("eurl_userName");
    if (!userName) return <></>;
    return (
      <div className="flex ml-auto text-base text-white font-bold ps-3">
        <span className="me-4 align-middle fill-white">{USER_SVG}</span>
        {userName}
        {renderLogoutButton()}
      </div>
    );
  }

  return (
    <div className="bg-slate-900">
      <div className="container p-2 mx-auto">
        <nav className="flex justify-between py-5">
          <div className=" text-base text-white font-bold ps-3">
            EASY URLS 🔗
          </div>
          {isUserLoggedIn()}
        </nav>
      </div>
    </div>
  );
}
