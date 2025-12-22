package com.taskmanagement.service;

import com.taskmanagement.dto.TaskDTO;
import com.taskmanagement.entity.Project;
import com.taskmanagement.entity.Task;
import com.taskmanagement.repository.ProjectRepository;
import com.taskmanagement.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;

    // Créer une nouvelle tâche
    public TaskDTO createTask(Long projectId, TaskDTO dto) throws Exception {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new Exception("Projet non trouvé"));

        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setDueDate(dto.getDueDate());
        task.setIsCompleted(false);
        task.setProject(project);

        Task saved = taskRepository.save(task);
        return mapToDTO(saved);
    }

    // Récupérer toutes les tâches d'un projet
    public List<TaskDTO> getProjectTasks(Long projectId) {
        return taskRepository.findByProjectId(projectId).stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    // Marquer une tâche comme complétée
    public TaskDTO completeTask(Long taskId) throws Exception {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new Exception("Tâche non trouvée"));

        task.setIsCompleted(true);
        Task updated = taskRepository.save(task);
        return mapToDTO(updated);
    }

    // Supprimer une tâche
    public void deleteTask(Long taskId) throws Exception {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new Exception("Tâche non trouvée"));
        taskRepository.delete(task);
    }

    private TaskDTO mapToDTO(Task task) {
        return new TaskDTO(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getDueDate(),
                task.getIsCompleted()
        );
    }
}