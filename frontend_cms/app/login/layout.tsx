import NavBarAuth from "@/components/custom/navBarAuth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-black text-white h-full flex flex-col">
      <NavBarAuth />
      {children}
    </body>
  );
}
