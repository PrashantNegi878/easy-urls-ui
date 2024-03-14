import { Link } from "react-router-dom";
import { GITHUB_URL } from "../../helpers/constants";

export default function Footer() {
  return (
    <div className=" text-base text-slate-900 text-center">
      Made with 💝 by{" "}
      <Link className="text-red-400" to={GITHUB_URL} target="_blank">
        Prashant
      </Link>
    </div>
  );
}
