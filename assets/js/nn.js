(function () {
    const sleepHour = 22, wakeHour = 6;
    const sleep = sleepHour * 60, wake = wakeHour * 60;
    const now = new Date();
    const m = now.getHours() * 60 + now.getMinutes();

    try {
        const bypass = localStorage.getItem('nightnight_bypass');
        if (bypass && Number(bypass) > Date.now()) return;
        localStorage.removeItem('nightnight_bypass');
    } catch (ignore) {}

    if (m < sleep && m > wake) return;

    const dialog = document.createElement('dialog');
    dialog.className = 'nightnight';

    const imgSrc = '/images/night_night_everyone_white.png';
    dialog.innerHTML = '<p>It\'s late …<br>Nothing we can offer you is more important than your sleep.<br>Sleep well, sweet dreams, and we will catch you in the morning.</p><div class="nightnight-timing">This site will wake up at 06:00.</div><div class="nightnight-skip"><button onclick="nightnightHide()">I\'ll sleep later, I really need to use this site right now →</button></div><div class="nightnight-credits"><a href="https://www.nightnight.xn--q9jyb4c"><img src="' + imgSrc + '" alt="night night" width="161" height="32"></a></div>';

    document.body.appendChild(dialog);
    dialog.showModal();

    window.nightnightHide = function () {
        dialog.close();
        try {
            const wakeTime = new Date();
            wakeTime.setHours(wakeHour, 0, 0, 0);
            if (wakeTime <= new Date()) wakeTime.setDate(wakeTime.getDate() + 1);
            localStorage.setItem('nightnight_bypass', wakeTime.getTime());
        } catch (ignore) {}
    };
})();
