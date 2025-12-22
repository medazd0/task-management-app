package com.taskmanagement.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDTO {
    private Long id;

    @NotBlank(message = "Le titre est obligatoire")
    private String title;

    private String description;
    private LocalDate dueDate;
    private Boolean isCompleted;
}