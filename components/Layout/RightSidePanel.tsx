export default function RightSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="static md:absolute md:right-5 md:top-0 space-y-4 mb-4 md:mb-0">
      {children}
    </div>
  );
}
