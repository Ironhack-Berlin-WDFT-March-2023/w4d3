const express = require("express")

const app = express()

// Set hbs as view engine
app.set("view engine", "hbs")

app.get("/", function (req, res) {
	const todos = ["Learn NodeJS", "Learn ExpressJS", "Learn Handlebars"]
	const user = "Alexis"

	// Now we use render() instead of sendFile()
	// render(<name of view file>, <data in one object>)
	const html = "<h1>This is a heading coming from the server</h1>"
	res.render("home", { user: user, todos: todos, htmlContent: html })
})


// Create a route "/profile" which renders the profile view
// 1. Pass the imageUrl, user and favouriteMeals to the view
// 2. Display the user image in the view 
// 3. Display the user information in the view
// 4. Display the favourite meals of the user in the view
app.get("/profile", function(req, res) {
  const imageUrl ="https://images.unsplash.com/photo-1589656966895-2f33e7653819"
  const user = { name: "Bob", city: "Berlin", job: "developer" }
  const favouriteMeals = [{ name: "Sushi", calories: 500 }, { name: "Pizza", calories: 700 }, { name: "Lasagne", calories: 800 }]

  res.render("profile", { imageUrl: imageUrl, user: user, favouriteMeals: favouriteMeals })
})


const movies = require("./movies.json")

app.get("/movies", function (req, res) {
	console.log(movies)
	res.render("movies/index", { movieList: movies })
})

app.listen(3000, function () {
	console.log("Server listening")
})
