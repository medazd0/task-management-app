    package com.taskmanagement.config;

    import com.taskmanagement.entity.User;
    import com.taskmanagement.repository.UserRepository;
    import lombok.RequiredArgsConstructor;
    import org.springframework.boot.CommandLineRunner;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.security.crypto.password.PasswordEncoder;

    @Configuration
    @RequiredArgsConstructor
    public class DataSeeder implements CommandLineRunner {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;

        @Override
        public void run(String... args) {

            if (userRepository.count() == 0) {

                User u1 = new User(
                        null,
                        "admin@example.com",
                        passwordEncoder.encode("admin123"),
                        "Admin User"
                );

                User u2 = new User(
                        null,
                        "user@example.com",
                        passwordEncoder.encode("user123"),
                        "Normal User"
                );

                userRepository.save(u1);
                userRepository.save(u2);

                System.out.println("Users inserted in DB ✔️");
            }
        }
    }
