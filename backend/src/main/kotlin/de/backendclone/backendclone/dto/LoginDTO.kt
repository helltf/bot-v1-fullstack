package de.backendclone.backendclone.dto

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper

class LoginDTO(success: Boolean = false, token: String, username:String) {
    val success = success
    val token = token
    val username = username
    val error = if(success) "" else "Your username or password is not correct!"


    fun toJSON():String{
        val objectMapper = ObjectMapper()
        return objectMapper.writeValueAsString(this)
    }
}