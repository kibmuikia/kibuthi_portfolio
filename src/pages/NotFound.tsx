// kibuthi_portfolio/src/pages/NotFound.tsx
const NotFound = () => {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>404</h1>
        <p className="text-secondary">Page Not Found</p>
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <a href="/" className="btn-primary">Go Home</a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
