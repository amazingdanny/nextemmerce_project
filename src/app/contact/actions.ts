'use server'

import { contactFormSchema } from "@/Validation/ContactValidation/schema"
import { success } from "zod/v4";

export async function handleContactForm(formData: FormData) {
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),

    };
    console.log(rawData.firstName, rawData.lastName, rawData.phone, rawData.message, rawData.subject);
    const result = contactFormSchema.safeParse(rawData);

    if(!result.success){
        console.log("Validation failed:", result.error.errors);
        const fieldErrors = result.error.flatten().fieldErrors;
        return {success: false, errors: fieldErrors};
    }
    return {success: true, data: result.data};
}