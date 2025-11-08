 // Create additional floating particles
        for (let i = 0; i < 1000; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(particle);
        }

        // Create additional equations
        // const equations = [
        //     "a² + b² = c²",
        //     "∇·E = ρ/ε₀",
        //     "F = G(m₁m₂)/r²",
        //     "e^(iπ) + 1 = 0",
        //     "ħ ∂ψ/∂t = Ĥψ"
        // ];

        // equations.forEach((eq, index) => {
        //     const equation = document.createElement('div');
        //     equation.className = 'equation';
        //     equation.textContent = eq;
        //     equation.style.top = `${Math.random() * 80 + 10}%`;
        //     equation.style.left = `${Math.random() * 80 + 10}%`;
        //     equation.style.animationDelay = `${Math.random() * 20 - 10}s`;
        //     equation.style.animationDuration = `${Math.random() * 20 + 20}s`;
        //     document.body.appendChild(equation);
            // });