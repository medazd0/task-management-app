package com.taskmanagement.service;

import com.taskmanagement.dto.AuthResponse;
import com.taskmanagement.dto.LoginRequest;
import com.taskmanagement.entity.User;
import com.taskmanagement.repository.UserRepository;
import com.taskmanagement.security.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    private final PasswordEncoder passwordEncoder;

    // Simuler une base de données d'utilisateurs prédéfinis pour la démonstration
    public AuthResponse login(LoginRequest request) throws Exception {
        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if (user.isEmpty()) {
            throw new Exception("Utilisateur non trouvé");
        }

        User foundUser = user.get();

        // Vérifier le mot de passe (en production, utilisez bcrypt)
        if (!passwordEncoder.matches(request.getPassword(), foundUser.getPassword())) {
            throw new Exception("Mot de passe incorrect");
        }


        String token = jwtProvider.generateToken(foundUser.getEmail());

        return new AuthResponse(token, foundUser.getEmail(), foundUser.getFullName());
    }
}