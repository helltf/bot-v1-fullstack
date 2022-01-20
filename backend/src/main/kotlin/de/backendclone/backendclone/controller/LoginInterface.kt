package de.backendclone.backendclone.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
interface LoginInterface {
    @PostMapping("/login")
    fun postLogin(username:String?, password: String?):ResponseEntity<Map<String,Boolean>>
}