export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>🏠 מרכז טובה נר</h3>
          <p>
            שינוי לטובה בתא המשפחתי — תקשורת והפנמת כלים למיומנויות לוויסות
            רגשי. אפשר להטמיע כבר עם המשפחה ולא רק בחדר הטיפולים.
          </p>
        </div>

        <div className="footer-col">
          <h4>ניווט מהיר</h4>
          <ul>
            <li>
              <a href="#hero">דף הבית</a>
            </li>
            <li>
              <a href="#features">למה המשחק</a>
            </li>
            <li>
              <a href="#how-it-works">איך משחקים</a>
            </li>
            <li>
              <a href="#testimonials">המלצות</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>צרו קשר</h4>
          <ul>
            <li>
              <a href="#">tovaner@gmail.com</a>
            </li>
            <li>
              <a href="#">050-332-1035</a>
            </li>
            <li>
              <a href="#">אינסטגרם</a>
            </li>
            <li>
              <a href="#">פייסבוק</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 מרכז טובה נר. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
