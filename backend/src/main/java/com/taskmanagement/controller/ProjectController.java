package com.taskmanagement.controller;

import com.taskmanagement.dto.ProjectDTO;
import com.taskmanagement.dto.ProjectProgressDTO;
import com.taskmanagement.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<ProjectDTO> createProject(
            @Valid @RequestBody ProjectDTO dto,
            Authentication auth) throws Exception {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(projectService.createProject(dto, auth.getName()));
    }

    @GetMapping
    public ResponseEntity<List<ProjectDTO>> getUserProjects(Authentication auth)
            throws Exception {
        return ResponseEntity.ok(projectService.getUserProjects(auth.getName()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectDTO> getProject(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }

    @GetMapping("/{id}/progress")
    public ResponseEntity<ProjectProgressDTO> getProgress(@PathVariable Long id)
            throws Exception {
        return ResponseEntity.ok(projectService.getProjectProgress(id));
    }
}
