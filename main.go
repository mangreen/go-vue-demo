package main

import (
	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/thinkerou/favicon"
	"go-vue-start-kit/routes"
)

func main() {
	// Default With the Logger and Recovery middleware already attached
	router := gin.Default()

	router.Use(gzip.Gzip(gzip.DefaultCompression))

	api := router.Group("/api")
	//api.Use(AuthRequired())
	{
		api.GET("/get/:user", routes.GetTest)
		api.POST("/post/:user", routes.PostTest)
		api.POST("/login", routes.Login)
	}

	//router.LoadHTMLGlob("views/**/*")
	//router.GET("/", func(c *gin.Context) {
	//	c.HTML(http.StatusOK, "index.html", nil)
	//})

	//router.StaticFile("/favicon.ico", "./public/favicon.ico")
	router.Use(favicon.New("./public/favicon.ico"))

	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	router.NoRoute(func(c *gin.Context) {
		c.File("./public/index.html")
	})

	router.Run(":8080")
}
