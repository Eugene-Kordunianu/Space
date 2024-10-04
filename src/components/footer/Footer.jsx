import "./footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Отримуємо поточний рік
  return (
    <div className="footer">
      <p className="copyright"> © {currentYear} </p>
    </div>
  );
}
