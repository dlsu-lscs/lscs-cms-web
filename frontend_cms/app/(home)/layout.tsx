import NavBarHome from "@/components/custom/navBarHome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-black text-white h-full flex flex-col">
      <NavBarHome />
      {children}
    </body>
  );
}
