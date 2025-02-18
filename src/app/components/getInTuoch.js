"use client"
import React, { useState } from "react";
import Images from "next/image";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comments: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(""); // Reset status

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          comments: ""
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setSubmissionStatus("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="contact">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">Get in touch</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
          เรายินดีรับฟังความคิดเห็นจากคุณ! ไม่ว่าคุณจะมีคำถาม ข้อเสนอแนะ หรือเพียงแค่ต้องการติดต่อ เราพร้อมที่จะช่วยเหลือคุณเสมอคุณสามารถติดต่อเราผ่านแบบฟอร์มด้านล่าง แล้วเราจะตอบกลับคุณโดยเร็วที่สุดค่ะ
          </p>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-7 md:col-span-6">
            <Images
              src="/images/contact.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>

          <div className="lg:col-span-5 md:col-span-6">
            <div className="lg:ms-5">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                    <div className="lg:col-span-6">
                      <label htmlFor="name" className="font-semibold">
                        Your Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Name :"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="email" className="font-semibold">
                        Your Email:
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Email :"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="subject" className="font-semibold">
                        Your Question:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Subject :"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="comments" className="font-semibold">
                        Your Comment:
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Message :"
                        value={formData.comments}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {/* Submission status message */}
                {submissionStatus && (
                  <div
                    className={`mt-4 text-center ${
                      submissionStatus.startsWith("Error") ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {submissionStatus}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
