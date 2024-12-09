import "./styles/globals.css";

export const metadata = {
  title: "José Francisco",
  description: "José Francisco CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
