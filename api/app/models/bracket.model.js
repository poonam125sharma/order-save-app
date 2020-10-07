module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const bracketSchema = new Schema({
    bracket_id: String,
    info: String,
    date: String
  },{
    timestamps: true
  });
  const Bracket = mongoose.model("bracket",bracketSchema,"bracket");
  return Bracket;
}
