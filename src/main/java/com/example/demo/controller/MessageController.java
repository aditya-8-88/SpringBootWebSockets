package com.example.demo.controller;

import com.example.demo.models.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @MessageMapping("/message/{roomId}")
    @SendTo("/topic/{roomId}")
    public Message getContent(@DestinationVariable String roomId, Message message) {
        return new Message(message.getName(), message.getContent(), roomId);
    }
}