import { useState, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { GrHost,GrDomain } from "react-icons/gr";
import { GiShop } from "react-icons/gi";
import { IoBusiness } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";

const PriceCustomizationPopup = ({ isOpen, onClose, onSave }) => {
  const [selectedPackage, setSelectedPackage] = useState("business"); // แพ็คเกจที่เลือก
  const [needHosting, setNeedHosting] = useState(false);
  const [needDomain, setNeedDomain] = useState(false);
  const [price, setPrice] = useState(0);
  const [pages, setPages] = useState(5);
  const [domain, setDomain] = useState(""); // State for the domain input
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);

    // อัปเดตจำนวนหน้าตามแพ็กเกจที่เลือก
    if (e.target.value === "business") {
      setPages(5);
    } else if (e.target.value === "ecommerce") {
      setPages(10);
    }
  };


  const handleHostingChange = () => {
    setNeedHosting((prev) => !prev);
  };

  const handleDomainChange = () => {
    setNeedDomain((prev) => !prev);
  };

  const formatPrice = (price) => {
    return `฿ ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleIncrement = () => {

    if (selectedPackage === "business") {
      if (pages >= 5) {
        setPages(pages + 1);
      }
    } else if (selectedPackage === "ecommerce") {
      if (pages >= 10) {
        setPages(pages + 1);
      }
    } else {
      setPages(pages + 1);
    }

  };

  const handleDomainInputChange = (e) => {
    let domainValue = e.target.value;
  
    // Remove the "https://" or "www." prefix if it exists
    domainValue = domainValue.replace(/^(https?:\/\/)?(www\.)?/i, "");
  
    // Remove any trailing slash (/) from the domain
    domainValue = domainValue.replace(/\/$/, "");
  
    setDomain(domainValue); // Update the domain state
  };

  const handleDecrement = () => {
    if (selectedPackage === "ecommerce" && pages > 10) {
      setPages(pages - 1); // ถ้าเป็น E-commerce ต้องมีอย่างน้อย 10 หน้า
    } else if (selectedPackage === "business" && pages > 5) {
      setPages(pages - 1); // ถ้าเป็น Business Starter ต้องมีอย่างน้อย 5 หน้า
    } else if (!selectedPackage && pages > 1) {
      setPages(pages - 1); // ถ้าไม่ได้เลือกแพ็กเกจ ต้องมีอย่างน้อย 1 หน้า
    }
  };

  // Calculate the price whenever any option changes
  useEffect(() => {
    let calculatedPrice = 0;
    // ตั้งราคาตามแพ็กเกจที่เลือก
    if (selectedPackage === "business") {
      calculatedPrice = 25000;
    } else if (selectedPackage === "ecommerce") {
      calculatedPrice = 51000;
    } else {
      calculatedPrice = 14200; // ราคาเริ่มต้น
    }

    // Calculate price based on the number of pages
    calculatedPrice += pages * 800;

    // Add cost for hosting and domain if applicable
    if (needHosting) {
      calculatedPrice += 5000; // Hosting price
    }

    if (needDomain) {
      // Fix domain price if domain ends with ".com"
      const fixedDomainPrice = 1000;
      if (domain.toLowerCase().endsWith(".com")) {
        calculatedPrice +=  420; // Add price for .com domain
      }else{
        calculatedPrice += fixedDomainPrice;
      }
    }

    setPrice(calculatedPrice);
  }, [pages, needHosting, needDomain, domain]); // Added domain to dependency array

  const handleSave = () => {
    if (needDomain && !domain) {
      setErrorMessage("กรุณากรอกโดเมนเพื่อกำหนดราคาได้อย่างถูกต้อง"); // Set error message if domain is missing
      return; // Exit the function if domain is missing
    }
    // Save the price along with checkbox states and domain
    const customizationDetails = {
      price,
      needHosting,
      needDomain,
      domain,
      pages
    };

    onSave(customizationDetails); // Pass all the details to the parent component
    onClose(); // Close the popup
  };

  if (!isOpen) return null;

  return (
    <div className="fixed h-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="lg:grid lg:grid-cols-12 gap-3 bg-white p-6 rounded-lg shadow-lg w-[800px]">
      <div className="col-span-5">
        <h2 className="text-xl font-semibold mb-4">Customize Your Website</h2>

        <div className="mb-4">
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={handleDecrement}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="pages-input"
              value={pages}
              readOnly
              className="pt-2 bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:outline-none block w-full pb-6 select-none outline-none"
            />
            <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
              <CgWebsite className="w-2.5 h-2.5 text-gray-400" />              
              <span className="select-none">จำนวนหน้าที่ต้องการ</span>
            </div>
            <button
              type="button"
              onClick={handleIncrement}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          {selectedPackage === "ecommerce" && (
            <p className="text-[12px] text-center mt-2"><span className="text-red-700">*</span> หน้าขั้นต่ำของระบบ E-Commerce คือ 10 หน้า</p>
          )}
        </div>  

        {/* Radio เลือกแพ็กเกจ */}
        <div className="mb-4">
          <label className="block items-center text-sm font-medium text-gray-700">
            <input
              type="radio"
              value="business"
              checked={selectedPackage === "business"}
              onChange={handlePackageChange}
              className="hidden peer"
            />
            <span className="relative flex rounded-md items-center gap-2 p-2 border text-sm text-gray-500 peer-checked:text-white peer-checked:bg-ads-secondary peer-checked:border-ads-secondary select-none">
              <IoBusiness className="size-6" />
              Business Starter
              {selectedPackage === "business" &&(
                <IoMdArrowDropright className="absolute right-2 size-6" />
              )}              
            </span>
          </label>

          <label className="block items-center text-sm font-medium text-gray-700 mt-2">
            <input
              type="radio"
              value="ecommerce"
              checked={selectedPackage === "ecommerce"}
              onChange={handlePackageChange}
              className="hidden peer"
            />
            <span className="relative flex rounded-md items-center gap-2 p-2 border text-sm text-gray-500 peer-checked:text-white peer-checked:bg-ads-secondary peer-checked:border-ads-secondary select-none">
              <GiShop className="size-6" />
              Professional E-Commerce
              {selectedPackage === "ecommerce" &&(
                <IoMdArrowDropright className="absolute right-2 size-6" />
              )}
            </span>
          </label>
        </div>           

        <div className="mb-4">

        {/* Show input for domain when 'Need Domain' is checked */}
        {selectedPackage === "ecommerce" && (
          <>         
          <div className="my-2 grid gap-1">
          <div className="text-center">รองรับระบบชำระเงินทุกประเภท</div>   
            <div className="flex flex-row justify-center items-center gap-2">
              <img width={50} height={50} src="https://www.inet.co.th/images/navbar/logo_nav.svg"></img> 
              <img width={50} height={50} src="https://www.vectorlogo.zone/logos/omiseco/omiseco-ar21.svg"></img> 
              <img width={50} height={50} src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg"></img> 
              <img width={50} height={50} src="https://doc.gbprimepay.com/static/media/logo.8f7e2d79.svg"></img>  
            </div>  
            <div className="text-center">หรือ ตามที่ลูกค้ากำหนด</div>          
          </div>
          </>
        )}          
        </div>

        <div className="mb-4">
          <label className="block items-center text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={needHosting}
              onChange={handleHostingChange}
              className="hidden peer mr-2"
            />
            <span className="flex rounded-md items-center gap-2 p-2 border text-sm text-gray-500 dark:text-neutral-400 peer-checked:text-white peer-checked:bg-ads-secondary peer-checked:border-ads-secondary select-none">
            < GrHost className="size-5"/>
             Hosting / ปี
            </span>    
          </label>
        </div>

        <div className="mb-4">
          <label className="block items-center text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={needDomain}
              onChange={handleDomainChange}
              className="hidden peer mr-2"
            />
            <span className="flex rounded-md items-center gap-2 p-2 border text-sm text-gray-500 dark:text-neutral-400 peer-checked:text-white peer-checked:bg-ads-secondary peer-checked:border-ads-secondary select-none">
            < GrDomain className="size-5"/>
             Domain / ปี
            </span>  
          </label>
        </div>
        

        {/* Show input for domain when 'Need Domain' is checked */}
        {needDomain && (
          <>
          <div className="flex flex-row items-center">
            <div className="text-gray-500 p-1 px-2 border border-r-0 border-gray-300 rounded-l-xl">https://</div>
              <input
                type="url"
                id="domain-input"
                value={domain}
                onChange={handleDomainInputChange}
                placeholder="example.com"
                className={`w-full ${needDomain && !domain && `border-red-600`} p-1 border border-gray-300 rounded-r-xl`}
              />
            </div>
          {needDomain && !domain && <p className="text-red-500 text-xs mt-2">{errorMessage}</p>}
          </>
        )}

        <div className="mt-4 text-center">
          <p className="text-center text-lg font-semibold">ราคาโดยประมาณ</p>
          <span className="relative text-lg font-bold">{formatPrice(price)}</span>
          <p className="text-[12px]">ราคายังไม่รวมภาษี</p>
        </div>

        <div className="flex justify-end space-x-4">
          <button href="" onClick={handleSave} className="text-sm h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-ads-secondary text-white w-full mt-5">เลือกแพคเกจนี้</button>
          <button href="" onClick={onClose} className="text-sm h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-red-700 text-white w-full mt-5">ยกเลิก</button>
        </div>
      </div>
        
        <div className="col-span-7">
          test
        </div>        
      </div>
    </div>
  );
};

export default PriceCustomizationPopup;
