import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="section" style={{ minHeight: "70vh", padding: "80px 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="h1" style={{ fontSize: "3rem", marginBottom: "16px" }}>
          404
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--granite-gray)", marginBottom: "24px" }}>
          Page not found. The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "var(--radius-5)",
            background: "var(--go-green)",
            color: "var(--white)",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
