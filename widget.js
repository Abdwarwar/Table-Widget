class CustomTableWidget {
  constructor() {
    this.subscribe("dataModel", this.onDataModelChange.bind(this));
  }

  async onDataModelChange() {
    const dataModel = this.getData("dataModel");

    if (dataModel) {
      const widgetTitle = this.getProperty("title");
      document.getElementById("widgetTitle").textContent = widgetTitle;

      const tableHeader = document.getElementById("tableHeader");
      const tableBody = document.getElementById("tableBody");

      // Clear existing table data
      tableHeader.innerHTML = "";
      tableBody.innerHTML = "";

      // Assume the first row has the column names
      const columnNames = dataModel[0] || [];
      columnNames.forEach((col) => {
        let th = document.createElement("th");
        th.textContent = col;
        tableHeader.appendChild(th);
      });

      // Populate rows with data
      dataModel.forEach((row) => {
        let tr = document.createElement("tr");
        row.forEach((cellData) => {
          let td = document.createElement("td");
          td.textContent = cellData;
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });
    }
  }
}

export default CustomTableWidget;
