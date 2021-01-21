const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((emails) => emails.trim())
    .filter((emails) => re.test(emails) === false);

  if (invalidEmails.length) {
    return `These emails are invlaid: ${invalidEmails}`;
  }

  return;
};
