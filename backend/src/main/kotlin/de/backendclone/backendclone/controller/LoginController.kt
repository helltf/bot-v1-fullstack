package de.backendclone.backendclone.controller

import com.fasterxml.jackson.databind.JsonNode
import de.backendclone.backendclone.dto.LoginDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class LoginController: LoginInterface{
     override fun postLogin(body: JsonNode): ResponseEntity<LoginDTO> {
         val username = body.get("username").asText()
         val password = body.get("password").asText()

         val isValidLogin = username == "helltf" && password == "11"
         val loginData = LoginDTO(isValidLogin, "abcde", username)

         return ResponseEntity.ok(loginData)
    }

    override fun checkToken(body: JsonNode): ResponseEntity<Map<String, Boolean>> {

        val token = body.get("token").asText()
        val user = body.get("signed_in").asText()

        val valid = token == "abcde" && user == "helltf"
        return ResponseEntity.ok(mapOf("success" to valid))
    }
}
