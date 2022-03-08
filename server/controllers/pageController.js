module.exports = {
  showPage: (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  },
};
