const chars = '!<>-_\\/[]{}—=+*^?#________';

export function scrambleText(
    text: string,
    onUpdate: (text: string) => void,
    speed: number = 30,
    increment: number = 1/3
) {
    let iteration = 0;
    const finalText = text;
    
    const interval = setInterval(() => {
        const scrambledText = finalText
            .split('')
            .map((letter, index) => {
                if (index < iteration) {
                    return finalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        onUpdate(scrambledText);
        
        if (iteration >= finalText.length) {
            clearInterval(interval);
        }
        
        iteration += increment;
    }, speed);

    return () => clearInterval(interval);
} 