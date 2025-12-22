package com.taskmanagement.service;

import com.taskmanagement.dto.ProjectDTO;
import com.taskmanagement.dto.ProjectProgressDTO;
import com.taskmanagement.entity.Project;
import com.taskmanagement.entity.Task;
import com.taskmanagement.entity.User;
import com.taskmanagement.repository.ProjectRepository;
import com.taskmanagement.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProjectServiceTest {

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private ProjectService projectService;

    private User testUser;
    private Project testProject;
    private ProjectDTO testProjectDTO;

    @BeforeEach
    void setUp() {
        testUser = new User();
        testUser.setId(1L);
        testUser.setEmail("test@example.com");
        testUser.setFullName("Test User");

        testProject = new Project();
        testProject.setId(1L);
        testProject.setTitle("Test Project");
        testProject.setDescription("Test Description");
        testProject.setUser(testUser);
        testProject.setTasks(new ArrayList<>());

        testProjectDTO = new ProjectDTO();
        testProjectDTO.setTitle("Test Project");
        testProjectDTO.setDescription("Test Description");
    }

    @Test
    void testCreateProject_Success() throws Exception {
        // Arrange
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(testUser));
        when(projectRepository.save(any(Project.class))).thenReturn(testProject);

        // Act
        ProjectDTO result = projectService.createProject(testProjectDTO, "test@example.com");

        // Assert
        assertNotNull(result);
        assertEquals("Test Project", result.getTitle());
        assertEquals("Test Description", result.getDescription());

        verify(userRepository, times(1)).findByEmail("test@example.com");
        verify(projectRepository, times(1)).save(any(Project.class));
    }

    @Test
    void testCreateProject_UserNotFound() {
        // Arrange
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.empty());

        // Act & Assert
        Exception exception = assertThrows(Exception.class, () -> {
            projectService.createProject(testProjectDTO, "test@example.com");
        });

        assertEquals("Utilisateur non trouvé", exception.getMessage());
        verify(userRepository, times(1)).findByEmail("test@example.com");
        verify(projectRepository, never()).save(any(Project.class));
    }

    @Test
    void testGetUserProjects_Success() throws Exception {
        // Arrange
        List<Project> projects = Arrays.asList(testProject);
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(testUser));
        when(projectRepository.findByUser(testUser)).thenReturn(projects);

        // Act
        List<ProjectDTO> result = projectService.getUserProjects("test@example.com");

        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Test Project", result.get(0).getTitle());

        verify(userRepository, times(1)).findByEmail("test@example.com");
        verify(projectRepository, times(1)).findByUser(testUser);
    }

    @Test
    void testGetProjectProgress_Success() throws Exception {
        // Arrange
        Task task1 = new Task();
        task1.setId(1L);
        task1.setIsCompleted(true);

        Task task2 = new Task();
        task2.setId(2L);
        task2.setIsCompleted(false);

        testProject.setTasks(Arrays.asList(task1, task2));

        when(projectRepository.findById(1L)).thenReturn(Optional.of(testProject));

        // Act
        ProjectProgressDTO result = projectService.getProjectProgress(1L);

        // Assert
        assertNotNull(result);
        assertEquals(1L, result.getProjectId());
        assertEquals("Test Project", result.getProjectTitle());
        assertEquals(2L, result.getTotalTasks());
        assertEquals(1L, result.getCompletedTasks());
        assertEquals(50.0, result.getProgressPercentage());

        verify(projectRepository, times(1)).findById(1L);
    }

    @Test
    void testGetProjectProgress_NoTasks() throws Exception {
        // Arrange
        testProject.setTasks(new ArrayList<>());
        when(projectRepository.findById(1L)).thenReturn(Optional.of(testProject));

        // Act
        ProjectProgressDTO result = projectService.getProjectProgress(1L);

        // Assert
        assertNotNull(result);
        assertEquals(0L, result.getTotalTasks());
        assertEquals(0L, result.getCompletedTasks());
        assertEquals(0.0, result.getProgressPercentage());
    }
}