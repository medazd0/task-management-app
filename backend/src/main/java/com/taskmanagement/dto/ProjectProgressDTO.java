package com.taskmanagement.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectProgressDTO {
    private Long projectId;
    private String projectTitle;
    private Long totalTasks;
    private Long completedTasks;
    private Double progressPercentage;
}