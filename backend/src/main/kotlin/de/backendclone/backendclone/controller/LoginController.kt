package de.backendclone.backendclone.controller

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.util.JSONPObject
import com.google.gson.Gson
import de.backendclone.backendclone.dto.LoginDTO
import org.apache.tomcat.util.json.JSONParser
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
        val user_login = body.get("user_login").asText()

        val valid = token == "abcde" && user_login == "as"
        return ResponseEntity.ok(mapOf("success" to valid))
    }
}
