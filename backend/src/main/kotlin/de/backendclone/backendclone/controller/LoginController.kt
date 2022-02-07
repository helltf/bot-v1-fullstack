package de.backendclone.backendclone.controller

import com.fasterxml.jackson.databind.JsonNode
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class LoginController: LoginInterface{
     override fun postLogin(body: JsonNode): ResponseEntity<Map<String, Boolean>> {
         val username = body.get("username").asText()
         val password = body.get("password").asText()

         val isValidLogin = username == "helltf" && password == "11"
         return ResponseEntity.ok(mapOf("success" to isValidLogin))
    }
}
