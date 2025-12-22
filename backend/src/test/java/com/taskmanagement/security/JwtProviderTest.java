package com.taskmanagement.security;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;

class JwtProviderTest {

    private JwtProvider jwtProvider;

    @BeforeEach
    void setUp() {
        jwtProvider = new JwtProvider();
        // Injecter les valeurs de configuration
        ReflectionTestUtils.setField(jwtProvider, "jwtSecret", "your-super-secret-key-min-32-characters-long-for-hs256");
        ReflectionTestUtils.setField(jwtProvider, "jwtExpiration", 86400000); // 24h
    }

    @Test
    void testGenerateToken_Success() {
        // Act
        String token = jwtProvider.generateToken("test@example.com");

        // Assert
        assertNotNull(token);
        assertFalse(token.isEmpty());
        assertTrue(token.split("\\.").length == 3); // JWT a 3 parties
    }

    @Test
    void testGetEmailFromToken_Success() {
        // Arrange
        String token = jwtProvider.generateToken("test@example.com");

        // Act
        String email = jwtProvider.getEmailFromToken(token);

        // Assert
        assertEquals("test@example.com", email);
    }

    @Test
    void testValidateToken_ValidToken() {
        // Arrange
        String token = jwtProvider.generateToken("test@example.com");

        // Act
        boolean isValid = jwtProvider.validateToken(token);

        // Assert
        assertTrue(isValid);
    }

    @Test
    void testValidateToken_InvalidToken() {
        // Arrange
        String invalidToken = "invalid.token.here";

        // Act
        boolean isValid = jwtProvider.validateToken(invalidToken);

        // Assert
        assertFalse(isValid);
    }

    @Test
    void testValidateToken_ExpiredToken() {
        // Arrange - Créer un provider avec expiration de 1ms
        JwtProvider shortLivedProvider = new JwtProvider();
        ReflectionTestUtils.setField(shortLivedProvider, "jwtSecret", "your-super-secret-key-min-32-characters-long-for-hs256");
        ReflectionTestUtils.setField(shortLivedProvider, "jwtExpiration", 1);

        String token = shortLivedProvider.generateToken("test@example.com");

        try {
            Thread.sleep(10); // Attendre que le token expire
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        // Act
        boolean isValid = jwtProvider.validateToken(token);

        // Assert
        assertFalse(isValid);
    }
}