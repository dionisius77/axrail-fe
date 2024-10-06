const ContentContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full bg-blue-50 p-4 rounded-xl">{children}</div>
  );
};

export default ContentContainer;
