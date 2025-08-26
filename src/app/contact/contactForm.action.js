"use server";

import connectDB from "@/db/connectDB";
import Contact from "@/models/Contact.model";

const contactFormAction = async (previousState, formData) => {
  //   console.log(formData.get("name"));
  //   console.log(formData.get("email"));
  //   console.log(formData.get("message"));

  const { name, email, message } = Object.fromEntries(formData.entries());
  console.log(name, email, message);
  try {
    await connectDB();
    const contact = await Contact.create({ name, email, message });
    return {
      success: true,
      message: "Contact form submitted successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error submitting contact form. Please try again later.",
    };
  }
};

export default contactFormAction;
