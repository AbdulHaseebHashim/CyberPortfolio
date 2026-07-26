document.addEventListener("DOMContentLoaded", () => {

    const terminal = document.getElementById("terminal-text");

    if (!terminal) return;

    // Enhanced Cyber Security Terminal Output
    const commands = [
        "root@haseeb:~$ whoami",
        "Haseeb Hashim | Cyber Security Specialist & Web Developer",
        "",
        "root@haseeb:~$ system-info",
        "OS: Kali Linux x86_64",
        "Kernel: 6.8.0-kali-amd64",
        "Uptime: 24/7 Active Learning",
        "",
        "root@haseeb:~$ skills --list",
        "[+] Security : Ethical Hacking, Network Defense, Penetration Testing",
        "[+] Tools    : Wireshark, Nmap, Burp Suite, Metasploit, Linux CLI",
        "[+] Web Dev  : HTML5, CSS3, JavaScript, Three.js, Node.js",
        "",
        "root@haseeb:~$ projects --featured",
        "1. HaseebLio™ Cyber Portfolio Web App",
        "2. Live 3D Interactive Earth Visualizer",
        "3. WhatsApp & Terminal Automation Bots",
        "",
        "root@haseeb:~$ status --auth",
        "SECURITY CLEARANCE: LEVEL 5 [FULL ACCESS GRANTED ✅]",
        "",
        "root@haseeb:~$ contact",
        "Email: haseebjani826@gmail.com | WhatsApp: +92 307 7425261"
    ];

    let line = 0;
    let char = 0;

    function typing() {
        if (line >= commands.length) {
            setTimeout(() => {
                terminal.innerHTML = "";
                terminal.scrollTop = 0;
                line = 0;
                char = 0;
                typing();
            }, 4000); // 4 seconds hold before loop restart
            return;
        }

        if (char < commands[line].length) {
            terminal.innerHTML += commands[line].charAt(char);
            terminal.scrollTop = terminal.scrollHeight;
            char++;
            setTimeout(typing, 40); // Slightly faster typing speed
        } else {
            terminal.innerHTML += "<br>";
            terminal.scrollTop = terminal.scrollHeight;
            line++;
            char = 0;
            setTimeout(typing, 350);
        }
    }

    typing();
});
