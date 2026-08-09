import * as XLSX from "xlsx";

function parseExcel(file, onParsed, onError) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: "binary" });
    const sheetname = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetname];
    const emaillist = XLSX.utils.sheet_to_json(worksheet, { header: "A" });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validEmails = emaillist
      .map((item) => String(item.A || "").trim())
      .filter((email) => emailRegex.test(email));

    if (validEmails.length === 0) {
      onError("No valid email addresses found");
      return;
    }

    onParsed(validEmails);
  };

  reader.readAsBinaryString(file);
}

export default parseExcel;
