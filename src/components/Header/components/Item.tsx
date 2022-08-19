import { Link } from "react-router-dom";
type ItemProps = {
  to?: string;
  name: string;
};
import "./Item.css";

export const Item = ({ to, name }: ItemProps) => {
  return (
    <Link className="nav-item" to={`${to}`}>
      {name}
    </Link>
  );
};
