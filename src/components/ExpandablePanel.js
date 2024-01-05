const ExpandablePanel = ({ header, children }) => {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          {header}
        </div>
      </div>
      <div className="p-2 border-t">{children}</div>
    </div>
  );
};

export default ExpandablePanel;
