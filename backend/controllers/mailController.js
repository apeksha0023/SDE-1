const mails = require('../data/mockMails.json');   

exports.getMails = (req, res) => {
  res.status(200).json(mails);
};

exports.getInbox = (req, res) => {
  const inbox = mails.filter(mail => mail.folder === "inbox");
  res.json(inbox);
};

exports.getSent = (req, res) => {
  const sent = mails.filter(mail => mail.folder === "sent");
  res.json(sent);
};

exports.getDrafts = (req, res) => {
  const drafts = mails.filter(mail => mail.folder === "drafts");
  res.json(drafts);
};

exports.getTrash = (req, res) => {
  const trash = mails.filter(mail => mail.folder === "trash");
  res.json(trash);
};
