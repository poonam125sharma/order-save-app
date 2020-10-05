module.exports = mongoose => {
  const Bracket = mongoose.model(
    "bracket",
    mongoose.Schema({
      bracket_id: String,
      info: String,
      date: String
    },{
      timestamps: true
    })
  );
  return Bracket;
}
