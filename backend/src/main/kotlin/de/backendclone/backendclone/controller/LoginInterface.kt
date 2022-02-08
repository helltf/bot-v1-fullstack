package de.backendclone.backendclone.controller

import com.fasterxml.jackson.databind.JsonNode
import de.backendclone.backendclone.dto.LoginDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@ResponseBody()
interface LoginInterface {
    @PostMapping("/login")
    fun postLogin(@RequestBody body:JsonNode):ResponseEntity<LoginDTO>
    @PostMapping("/token")
    fun checkToken(@RequestBody body:JsonNode):ResponseEntity<Map<String,Boolean>>
}