"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const AmbientAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const luxuryChords = [
    [196.00, 246.94, 293.66, 369.99], // Gmaj7
    [164.81, 220.00, 261.63, 329.63], // E min7
    [174.61, 220.00, 261.63, 349.23], // F maj7
    [220.00, 261.63, 329.63, 392.00]  // A min7
  ];

  const playPad = (frequencies: number[]) => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state === "suspended") return;
    const now = ctx.currentTime;

    frequencies.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(600, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.02, now + 1.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 4.8);
    });
  };

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    if (!isPlaying) {
      setIsPlaying(true);
      let chordIndex = 0;
      playPad(luxuryChords[chordIndex]);
      intervalRef.current = setInterval(() => {
        chordIndex = (chordIndex + 1) % luxuryChords.length;
        playPad(luxuryChords[chordIndex]);
      }, 4500);
    } else {
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`fixed bottom-6 left-6 z-50 bg-white/95 backdrop-blur-md border ${
        isPlaying ? "border-[#D95D26] shadow-saffron" : "border-[#E8DFD3] shadow-soft-sm"
      } text-stone-800 px-4 py-2.5 rounded-full flex items-center gap-3 text-xs tracking-wider transition-all hover:scale-105 cursor-pointer`}
      title="Toggle Fine-Dining Ambient Lounge Audio"
    >
      <div className="flex items-center gap-1">
        {isPlaying ? (
          <>
            <span className="w-1 h-3 bg-[#D95D26] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="w-1 h-4 bg-[#D95D26] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-1 h-2 bg-[#D95D26] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.4s]" />
          </>
        ) : (
          <VolumeX className="w-4 h-4 text-stone-400" />
        )}
      </div>
      <span className="font-bold hidden sm:inline text-xs text-stone-700">
        {isPlaying ? "Lounge Audio: On" : "Lounge Audio: Off"}
      </span>
      {isPlaying && <Volume2 className="w-3.5 h-3.5 text-[#D95D26] animate-bounce" />}
    </button>
  );
};
