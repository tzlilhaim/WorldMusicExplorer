const express = require("express")
const router = express.Router()
const apiManager = require("./ApiManager")

router.get("/health", function (req, res) {
  res.send("healthy")
})

router.get("/countries", async function (req, res) {
  const countries = await apiManager.getCountriesFromDB()
  res.send(countries)
})

router.get("/songs/:country/:popular?", async function (req, res) {
  const { country, popular } = req.params

  popular
    ? apiManager.getPopularSongsInCountry(country, res)
    : apiManager.getSongs(country, res)
})

router.get("/myPlaylist", async function (req, res) {
  apiManager.getMyPlaylist(res)
})

router.post("/song", async function (req, res) {
  const song = req.body
  const data = await apiManager.saveSongToDB(song)
  res.send(data)
})

router.delete("/song/:songId", async function (req, res) {
  const { songId } = req.params
  const data = await apiManager.deleteSongFromDB(songId)
  res.send(data)
})

module.exports = router
