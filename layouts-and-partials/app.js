const express = require("express")
const hbs = require("hbs")
const movies = require("./movies.json")

const app = express()

// Set hbs as view engine
app.set("view engine", "hbs")

// Register partials to use them with handlebars
hbs.registerPartials(__dirname + "/views/partials")


app.get("/", function (req, res) {
	console.log(movies)
	res.render("movies", { movieList: movies })
})

app.get("/godfather", (req, res, next) => {
	// Get movie godfather from movies array
	const godfather = movies.find(movie => movie.title === "The Godfather")
	console.log(godfather)

	res.render("movieDetails", { movie: godfather })
});

app.listen(3000, function () {
	console.log("Server listening")
})
