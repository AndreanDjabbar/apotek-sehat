import crypto from 'crypto';

export const generateRandomToken = (len) => {
    return crypto.randomBytes(len).toString("hex");
}

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: EMAIL,
//         pass: EMAIL_PASSWORD,
//     },
// });