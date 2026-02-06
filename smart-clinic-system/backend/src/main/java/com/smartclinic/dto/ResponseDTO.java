package com.smartclinic.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseDTO<T> {
    private String message;
    private T data;
    private boolean success;

    public static <T> ResponseDTO<T> success(String message, T data) {
        return new ResponseDTO<>(message, data, true);
    }

    public static <T> ResponseDTO<T> error(String message) {
        return new ResponseDTO<>(message, null, false);
    }
}
