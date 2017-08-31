package routes

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

var DB = make(map[string]string)

//localhost:8080/api/get/jack?offset=1&limit=2
func GetTest(c *gin.Context) {
	user := c.Params.ByName("user")
	offset := c.Query("offset")
	limit := c.DefaultQuery("limit", "0")

	c.JSON(200, gin.H{
		"status": "posted",
		"user":   user,
		"offset": offset,
		"limit":  limit,
	})
}

//localhost:8080/api/post/jeff
func PostTest(c *gin.Context) {
	user := c.Params.ByName("user")
	offset := c.PostForm("offset")
	limit := c.DefaultPostForm("limit", "anonymous")

	c.JSON(200, gin.H{
		"status": "posted",
		"user":   user,
		"offset": offset,
		"limit":  limit,
	})
}

type Account struct {
	Email    string `form:"email"`
	Password string `form:"password"`
}

func Login(c *gin.Context) {
	var account Account

	if c.Bind(&account) == nil {
		fmt.Println("tttttt", account.Email, account.Password)

		if account.Email == "admin" && account.Password == "123" {
			c.JSON(http.StatusOK, gin.H{"status": "OK"})
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error":  "unauthorized",
				"status": "unauthorized",
			})
		}
	}
}

func HelloWorld() {
	fmt.Println("Hello, World")
}
