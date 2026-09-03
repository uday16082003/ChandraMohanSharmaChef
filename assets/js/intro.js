// ==========================================================================
// NETFLIX / CHEF'S TABLE CINEMATIC INTRO CONTROLLER
// ==========================================================================

class NetflixIntroController {
  constructor() {
    this.introElement = document.getElementById('netflix-intro');
    this.skipButton = document.getElementById('skip-intro-btn');
    this.hasEnded = false;
    this.audioContext = null;

    if (!this.introElement) return;

    this.initEvents();
    this.autoFinishTimer = setTimeout(() => {
      this.finishIntro();
    }, 4800);
  }

  initEvents() {
    if (this.skipButton) {
      this.skipButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.finishIntro();
      });
    }

    // Clicking anywhere on the intro screen plays the cinematic sound & triggers reveal
    this.introElement.addEventListener('click', () => {
      this.playCinematicSound();
    });

    // Try starting subtle sound if allowed by browser gesture
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        this.finishIntro();
      }
    }, { once: true });
  }

  playCinematicSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioContext) {
        this.audioContext = new AudioContext();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const now = this.audioContext.currentTime;

      // Deep Sub-Bass Drone
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(60, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 1.8);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      osc.start(now);
      osc.stop(now + 2.3);

      // Gold Sparkle Chime (harmonic overtone)
      const chime = this.audioContext.createOscillator();
      const chimeGain = this.audioContext.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(440, now + 0.4);
      chime.frequency.exponentialRampToValueAtTime(880, now + 1.2);

      chimeGain.gain.setValueAtTime(0.001, now);
      chimeGain.gain.linearRampToValueAtTime(0.12, now + 0.6);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

      chime.connect(chimeGain);
      chimeGain.connect(this.audioContext.destination);
      chime.start(now + 0.4);
      chime.stop(now + 2.1);
    } catch (err) {
      console.log('Audio autoplay prevented or unavailable:', err);
    }
  }

  finishIntro() {
    if (this.hasEnded) return;
    this.hasEnded = true;
    clearTimeout(this.autoFinishTimer);

    if (this.introElement) {
      this.introElement.classList.add('intro-done');
      setTimeout(() => {
        this.introElement.style.display = 'none';
        if (typeof window.onIntroComplete === 'function') {
          window.onIntroComplete();
        }
      }, 1000);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.netflixIntro = new NetflixIntroController();
});
