"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_eki4z8m",
          "template_aupsjx4",
          form.current,
          "4MmzMS69orpqEvMwt"
        )
        .then(
          (result) => {
            setOpen(true);
            form.current && form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="flex flex-col justify-center relative z-10 items-center max-[960px]:p-0">
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] p-0 pb-20 gap-3">
        <div className="text-4xl text-center font-semibold mt-5 text-text_primary max-[768px]:mt-3 max-[768px]:text-[32px]   ">
          Contact
        </div>
        <div className="text-lg text-center max-w-[600px] text-text_secondary max-[768px]:mt-3 max-[768px]:text-base">
          Feel free to reach out to me anytime!
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className=" w-[95%] max-w-[600px] flex flex-col bg-card p-8 rounded-2xl shadow-[rgba(23,92,230,0.15)_0px_4px_24px] mt-7 gap-3"
        >
          <div className="text-2xl mb-1.5 font-semibold text-text_primary">
            Email Me 🚀
          </div>
          <input
            placeholder="Your Email"
            name="from_email"
            required
            className="flex-1 bg-transparent border border-text_secondary outline-none text-lg text-text_primary rounded-xl p-3.5 focus:border-primary"
          />
          <input
            placeholder="Your Name"
            name="from_name"
            required
            className="flex-1 bg-transparent border border-text_secondary outline-none text-lg text-text_primary rounded-xl p-3.5 focus:border-primary"
          />
          <textarea
            placeholder="Message"
            rows={4}
            name="message"
            required
            className="flex-1 bg-transparent border border-text_secondary outline-none text-lg text-text_primary rounded-xl p-3.5 focus:border-primary"
          />
          <input type="submit" value="Send" className="contact-button" />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </div>
    </div>
  );
};

export default Contact;
