const mongoose = require('mongoose')
let Schema = mongoose.Schema

const songSchema = new Schema({
    name: String,
    playCount: Number,
    bpm: Number,
    spotifyId: String,
    lastFmLink: String,
    youtubeId:String,
    album: { type: Schema.Types.ObjectId, ref: 'Album' }
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song