package de.backendclone.backendclone.controller

import com.fasterxml.jackson.databind.JsonNode
import de.backendclone.backendclone.dto.LoginDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class LoginController: LoginInterface{
    val validToken = "4lOsd23"
    val validUser = "user"
     override fun postLogin(body: JsonNode): ResponseEntity<LoginDTO> {
         val username = body.get("username").asText()
         val password = body.get("password").asText()

         val isValidLogin = username == validUser && password == ""
         val loginData = LoginDTO(isValidLogin, validToken, username)

         return ResponseEntity.ok(loginData)
    }

    override fun checkToken(body: JsonNode): ResponseEntity<Map<String, Boolean>> {
        println(body)
        val token = body.get("token").asText()
        val user = body.get("signed_in").asText()
        println("$user $token")
        val valid = token == validToken && user == validUser
        return ResponseEntity.ok(mapOf("success" to valid))
    }
}
