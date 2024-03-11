import ParentTable from "./table.module.css";

type TTable = {
  children: React.ReactNode;
};

function Table({ children }: TTable) {
  return (
    <div className="w-full">
      <table className={ParentTable.Parent_Style}>{children}</table>
    </div>
  );
}

export default Table;
