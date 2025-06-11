import { useState } from "react";

const useGetAudioRecorder = () => {
  const [isRecording, setRecording] = useState<boolean>(false);

  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  const [audioData, setAudioData] = useState<{
    audioUrl: string;
    blob: Blob | null;
    base64: string;
  }>();

  let startRecording = async () => {
    if (!isRecording)
      try {
        setAudioData({
          audioUrl: "",
          blob: null,
          base64: "",
        });
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        setMediaStream(stream);
        setRecording(true);

        console.log(stream);

        const mediaRecorder = new MediaRecorder(stream);

        setMediaRecorder(mediaRecorder);
        mediaRecorder.start();
        const chunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (e) => {
          console.log(e);
          chunks.push(e.data);
        };

        mediaRecorder.onerror = (e) => {
          console.log(e);
        };

        mediaRecorder.onstop = () => {
          setRecording(false);
          const blob = new Blob(chunks, {
            type: "audio/wav",
          });

          getBase64FromBlob(blob).then((e) => {
            console.log(e);
            setAudioData({
              blob: blob,
              audioUrl: URL.createObjectURL(blob),
              base64: e?.toString()!!,
            });
          });
        };
      } catch (error) {}
  };

  let stopRecording = () => {
    if (isRecording && mediaRecorder) {
      console.log("stopped");
      mediaStream?.getTracks().forEach((tracks) => {
        tracks.stop();
      });
      console.log(audioData);
      mediaRecorder.stop();
      setRecording(false);
      setMediaRecorder(null);
    }
  };

  let getBase64FromBlob = async (blob: Blob) => {
    return new Promise<String | null>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result?.toString()!!);
      };

      reader.onerror = (error: any) => {
        reject(error.message);
      };

      reader.readAsDataURL(blob);
    });
  };

  return { startRecording, stopRecording, audioData, isRecording };
};

export default useGetAudioRecorder;
