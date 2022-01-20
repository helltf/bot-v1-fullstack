package de.backendclone.backendclone.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class LoginController: LoginInterface{
     override fun postLogin(username: String?, password: String?): ResponseEntity<Map<String, Boolean>> {
         val isValidLogin = username == "helltf" && password == "11"
         return ResponseEntity.ok(mapOf("success" to isValidLogin))
    }
}
