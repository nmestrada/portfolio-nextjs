export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      title: 'CSSOM',
      content: 'stuff',
    },
  ]);
};
