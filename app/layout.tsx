

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
