export default function Section({ title, children }) {
  return (
    <>
      <p className="section">{title}</p>
      {children}
    </>
  );
}
