const express = require('express')
const axios = require('axios');

const app = express()

app.get("/api/anime/list/:index", async (req, res) => {
    try {
        const index = req.params.index
        console.log('iniciando listado de peliculas')
        await axios.get('https://api.jikan.moe/v4/anime?q='+index)
        .then(response => {
            console.log('respuesta obtenida: ' + JSON.stringify(response.data))
            //const re = [response.data]
            res.json(response.data)
        }).catch((error) => {
            console.log(error)
            return error;
        })
      } catch (error) {
        console.log(error)
        error.response;
      }
})

app.get("/api/anime/list/personajes/:id", async (req, res) => {
    try {
        const paramId = req.params.id
        console.log('iniciando listado de personajes ' + paramId)
        await axios.get("https://api.jikan.moe/v4/anime/"+paramId+"/characters")
        .then(response => {
            console.log('respuesta obtenida: ' + JSON.stringify(response.data))
            //const re = [response.data]
            res.json(response.data)
        }).catch((error) => {
            console.log(error)
            return error;
        })
      } catch (error) {
        console.log(error)
        error.response;
      }
})

app.get("/api/anime/list/personajes/detalle/:cod", async (req, res) => {
  try {
      const paramCod = req.params.cod
      console.log('iniciando consulta del detalle del personaje ' + paramCod)
      await axios.get("https://api.jikan.moe/v4/characters/"+paramCod+"/full")
      .then(response => {
          console.log('respuesta obtenida: ' + JSON.stringify(response.data))
          //const re = [response.data]
          res.json(response.data)
      }).catch((error) => {
          console.log(error)
          return error;
      })
    } catch (error) {
      console.log(error)
      error.response;
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})