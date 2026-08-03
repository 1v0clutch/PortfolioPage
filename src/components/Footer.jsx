export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 text-muted text-[0.85rem] border-t border-border">
      <p>
        Designed &amp; built by <span className="text-accent">Steven Clyde E. Maranan</span> · {currentYear}
      </p>
    </footer>
  );
}
