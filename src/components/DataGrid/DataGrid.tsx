import "bootstrap/dist/css/bootstrap.css";

type DataGridProps = {
  header: string[];
  data: any[];
};

export default function DataGrid({ header, data }: DataGridProps) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {header?.map((item, i) => {
              return <th key={i}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.Id}>
                <td>{item.Title}</td>
                <td>{item.ReleaseDate}</td>
                <td>{item.Genre}</td>
                <td>{item.Price}</td>
                <td>{item.Rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
