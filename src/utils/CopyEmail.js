const emailAddress = "Sidestreetcafe805@gmail.com";

const CopyEmail = () => {
  navigator.clipboard.writeText(emailAddress);
  alert("Email Copied: " + emailAddress);
};

export default CopyEmail;
