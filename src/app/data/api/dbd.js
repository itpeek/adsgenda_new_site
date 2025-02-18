"use client"
import { useState } from "react";

export default function BusinessSearchForm() {
  const [juristicID, setJuristicID] = useState("");
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ฟังก์ชัน Format วันที่ (YYYYMMDD -> DD-MM-YYYY)
  const formatDate = (dateString) => {
    if (!dateString || dateString.length !== 8) return dateString;
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${day}-${month}-${year}`;
  };

  // ฟังก์ชันรวมที่อยู่
  const formatAddress = (addressData) => {
    if (!addressData) return "ไม่พบข้อมูลที่อยู่";

    const {
      "cd:AddressNo": addressNo,
      "cd:Soi": soi,
      "cd:Road": road,
      "cd:CitySubDivision": citySubDivision,
      "cd:City": city,
      "cd:CountrySubDivision": countrySubDivision,
    } = addressData;

    return `${addressNo ? addressNo : ""} ${soi ? "ซอย " + soi : ""} ${road ? "ถนน " + road : ""} ${
      citySubDivision ? citySubDivision["cr:CitySubDivisionTextTH"] : ""
    } ${city ? city["cr:CityTextTH"] : ""} ${countrySubDivision ? countrySubDivision["cr:CountrySubDivisionTextTH"] : ""}`.trim();
  };

  // ฟังก์ชันค้นหาข้อมูลจาก API
  const fetchBusinessData = async () => {
    if (!juristicID) {
      setError("กรุณากรอกเลขทะเบียนนิติบุคคล");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://openapi.dbd.go.th/api/v1/juristic_person/${juristicID}`,
      );

      const data = await response.json();

      if (data.status.code !== "1000") {
        setError("ไม่พบข้อมูลสำหรับเลขทะเบียนนี้");
        setFormData(null);
      } else {
        const business = data.data[0]["cd:OrganizationJuristicPerson"];
        setFormData({
          juristicID: business["cd:OrganizationJuristicID"],
          nameTH: business["cd:OrganizationJuristicNameTH"],
          nameEN: business["cd:OrganizationJuristicNameEN"],
          type: business["cd:OrganizationJuristicType"],
          branchName: business["cd:OrganizationJuristicBranchName"],
          registerDate: formatDate(business["cd:OrganizationJuristicRegisterDate"]),
          status: business["cd:OrganizationJuristicStatus"],
          capital: business["cd:OrganizationJuristicRegisterCapital"],
          address: formatAddress(business["cd:OrganizationJuristicAddress"]["cr:AddressType"]), // ✅ ใช้ฟังก์ชันรวมที่อยู่
        });
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">ค้นหานิติบุคคล</h2>

      {/* ฟอร์มค้นหา */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="กรอกเลขทะเบียนนิติบุคคล"
          value={juristicID}
          onChange={(e) => setJuristicID(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
        <button
          onClick={fetchBusinessData}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "กำลังค้นหา..." : "ค้นหา"}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* แสดงข้อมูลที่ดึงมา */}
      {formData && (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">ประเภทนิติบุคคล</label>
            <input type="text" name="type" value={formData.type} className="w-full px-3 py-2 border rounded-lg bg-gray-100" readOnly />
          </div>
                      
          <div>
            <label className="block text-sm font-medium text-gray-600">ชื่อนิติบุคคล (ไทย)</label>
            <input type="text" name="nameTH" value={formData.nameTH} className="w-full px-3 py-2 border rounded-lg" readOnly />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">ชื่อนิติบุคคล (อังกฤษ)</label>
            <input type="text" name="nameEN" value={formData.nameEN} className="w-full px-3 py-2 border rounded-lg" readOnly />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">วันที่จดทะเบียน</label>
            <input type="text" name="registerDate" value={formData.registerDate} className="w-full px-3 py-2 border rounded-lg bg-gray-100" readOnly />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">สาขา</label>
            <input type="text" name="registerDate" value={formData.branchName} className="w-full px-3 py-2 border rounded-lg bg-gray-100" readOnly />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">สถานะนิติบุคคล</label>
            <input type="text" name="status" value={formData.status} className="w-full px-3 py-2 border rounded-lg bg-gray-100" readOnly />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">ที่อยู่</label>
            <input type="textarea" name="address" value={formData.address} className="w-full px-3 py-2 border rounded-lg" readOnly />
          </div>
        </form>
      )}
    </div>
  );
}
