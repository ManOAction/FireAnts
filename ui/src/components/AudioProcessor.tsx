import React, { useEffect, useRef, useState } from 'react';
import Meyda, { MeydaAnalyzer, MeydaFeaturesObject } from 'meyda';

const AudioProcessor: React.FC = () => {
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyzerRef = useRef<MeydaAnalyzer | null>(null);
    const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // State variables for features
    const [frequency, setFrequency] = useState<number | null>(null);
    const [loudness, setLoudness] = useState<number | null>(null);
    const [chroma, setChroma] = useState<number[] | null>(null);

    // Threshold for loudness
    const LOUDNESS_THRESHOLD = 16; // Adjust this value based on your requirements

    const startAudioProcessing = async () => {
        if (isProcessing) return; // Prevent multiple initializations
        try {
            // Request microphone access
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            // Create AudioContext and source node
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            const audioContext = new AudioContext();
            audioContextRef.current = audioContext;

            const sourceNode = audioContext.createMediaStreamSource(stream);
            sourceNodeRef.current = sourceNode;

            // Set up Meyda analyzer
            analyzerRef.current = Meyda.createMeydaAnalyzer({
                audioContext: audioContext,
                source: sourceNode,
                bufferSize: 512,
                featureExtractors: ['spectralCentroid', 'loudness', 'chroma'],
                callback: (features: MeydaFeaturesObject) => {
                    // Extract the required features
                    const freq = features.spectralCentroid;
                    const loud = features.loudness ? features.loudness.total : 0;
                    const chromaValues = features.chroma;

                    // Check if loudness exceeds the threshold
                    if (loud > LOUDNESS_THRESHOLD) {
                        setFrequency(freq);
                        setLoudness(loud);
                        setChroma(chromaValues);

                        // You can send data to the backend here if needed
                    }
                    // Else, do nothing to retain the last valid values
                },
            });

            analyzerRef.current.start();
            setIsProcessing(true);
        } catch (err) {
            console.error('Error accessing microphone:', err);
            alert('Microphone access is required to use this feature.');
        }
    };

    const stopAudioProcessing = () => {
        if (analyzerRef.current) {
            analyzerRef.current.stop();
            analyzerRef.current = null;
        }
        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }
        if (sourceNodeRef.current) {
            sourceNodeRef.current = null;
        }
        setIsProcessing(false);
        setFrequency(null);
        setLoudness(null);
        setChroma(null);
    };

    // Cleanup when component unmounts
    useEffect(() => {
        return () => {
            stopAudioProcessing();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h2>Audio Processor</h2>
            {!isProcessing ? (
                <button onClick={startAudioProcessing}>Start</button>
            ) : (
                <button onClick={stopAudioProcessing}>Stop</button>
            )}

            {/* Always display the last valid features */}
            {frequency !== null && (
                <div>
                    <p>Frequency: {frequency.toFixed(2)} Hz</p>
                    <p>Loudness: {loudness !== null ? loudness.toFixed(2) : 'N/A'}</p>
                    <p>Chroma:</p>
                    <ul>
                        {chroma &&
                            chroma.map((value, index) => (
                                <li key={index}>{`Bin ${index + 1}: ${value.toFixed(2)}`}</li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AudioProcessor;
