import "./headerLink.css";
const HeaderLink = ({ text, href = "#" }) => {
  return (
    <li className="header__item">
      <a href={href} className="header__link">
        {text}
      </a>
    </li>
  );
};
export default HeaderLink;
