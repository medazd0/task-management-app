package com.taskmanagement.service;

import com.taskmanagement.dto.ProjectDTO;
import com.taskmanagement.dto.ProjectProgressDTO;
import com.taskmanagement.entity.Project;
import com.taskmanagement.entity.User;
import com.taskmanagement.repository.ProjectRepository;
import com.taskmanagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    // Créer un nouveau projet
    public ProjectDTO createProject(ProjectDTO dto, String email) throws Exception {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new Exception("Utilisateur non trouvé"));

        Project project = new Project();
        project.setTitle(dto.getTitle());
        project.setDescription(dto.getDescription());
        project.setUser(user);

        Project saved = projectRepository.save(project);
        return mapToDTO(saved);
    }

    // Récupérer tous les projets de l'utilisateur
    public List<ProjectDTO> getUserProjects(String email) throws Exception {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new Exception("Utilisateur non trouvé"));

        return projectRepository.findByUser(user).stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    // Récupérer les détails d'un projet
    public ProjectDTO getProjectById(Long id) throws Exception {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new Exception("Projet non trouvé"));
        return mapToDTO(project);
    }

    // Calculer la progression du projet
    public ProjectProgressDTO getProjectProgress(Long id) throws Exception {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new Exception("Projet non trouvé"));

        long total = project.getTasks().size();
        long completed = project.getTasks().stream()
                .filter(t -> t.getIsCompleted() != null && t.getIsCompleted())
                .count();

        double percentage = total > 0 ? (completed * 100.0) / total : 0.0;

        return new ProjectProgressDTO(
                project.getId(),
                project.getTitle(),
                total,
                completed,
                percentage
        );
    }

    private ProjectDTO mapToDTO(Project project) {
        return new ProjectDTO(
                project.getId(),
                project.getTitle(),
                project.getDescription()
        );
    }
}