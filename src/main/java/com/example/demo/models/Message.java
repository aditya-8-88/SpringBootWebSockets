package com.example.demo.models;

public class Message {
    private String name;
    private String content;
    private String roomId;

    // Default constructor
    public Message() {
    }

    // Constructor with parameters
    public Message(String name, String content, String roomId) {
        this.name = name;
        this.content = content;
        this.roomId = roomId;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }
}