const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
};

const SMTP_TRANSPORT = {
  // This is a Nodemailer transport. It can either be an SMTP server or a
  // well-known service such as Sengrid, Mailgun, Gmail, etc.
  // See https://nodemailer.com/transports/ and https://nodemailer.com/smtp/well-known/
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'asrofiridho@gmail.com',
    pass: '',
  },
  secureConnection: 'false',
  tls: {
    ciphers: 'SSLv3',
  },
};


const MY_GMAIL_TRANSPORT = {
    service: 'Gmail', // no need to set host or port etc.
    auth: {
        user: 'asrofiridho@gmail.com',
        pass: 'Kacangijopanjang',
    }
}
module.exports = {
  transport: MY_GMAIL_TRANSPORT,
  mailOptions: {
    from: '"Asrofi Ridho" <asrofiridho@gmail.com>',
      to: 'asrofiridho@gmail.com',
      message: "Send Email"
  },
  debugEnabled: false,
};
