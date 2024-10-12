export default function RootLayout({ children }) {
  return (
    <>
      {/* this is as like outlet for home page only and rendered to home page only  */}
      <h3 className="text-center text-blue-600 mt-40">inner layout for home page</h3>
      {children}
    </>
  );
}
