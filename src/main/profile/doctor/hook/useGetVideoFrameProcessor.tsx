import { useState } from "react";
import "@mediapipe/face_detection";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import * as faceDtection from "@tensorflow-models/face-detection";

const useGetVideoFrameProcessor = () => {
  const calculateEuclideanDistance = async (
    faceOneLandMark: any[],
    faceTwoLandMark: any[],
  ) => {
    let sum = 0;

    for (let i = 0; i < faceOneLandMark.length; i++) {
      const dx = faceOneLandMark[i][0] - faceTwoLandMark[i][0];
      const dy = faceOneLandMark[i][1] - faceTwoLandMark[i][1];
      sum = +dx * dy + dy * dy;
    }

    return Math.sqrt(sum / faceOneLandMark.length);
  };

  const [queue, setQueue] = useState<any[]>([]);
  const [isProcessing, setProcessing] = useState(false);

  let processFrame = async (imageBase64: string, imageTwoBase64: string) => {
    if (isProcessing) {
      return new Promise((resolve) => {
        let d = queue;
        d.push({ imageBase64, imageTwoBase64, resolve });
        setQueue(d);
      });
    }
    setProcessing(true);

    try {
      const image = document.createElement("img");
      image.src = imageBase64;

      const imageTwo = document.createElement("img");
      imageTwo.src = imageTwoBase64;

      const model = faceDtection.SupportedModels.MediaPipeFaceDetector;

      const detector = await faceDtection.createDetector(model, {
        runtime: "tfjs",
      });

      const faceOneEstimate = await detector.estimateFaces(image);

      const faceOneData: any[] = [];

      const faceTwoData: any[] = [];

      if (faceOneEstimate) {
        alert(JSON.stringify(faceOneEstimate));

        faceOneEstimate[0].keypoints.forEach((e) => {
          faceOneData.push([Math.ceil(e.x), Math.ceil(e.y)]);
        });
      }

      const faceTwoEstimate = await detector.estimateFaces(imageTwo);

      if (faceTwoEstimate) {
        alert(JSON.stringify(faceTwoEstimate));
        faceTwoEstimate[0].keypoints.forEach((e) => {
          faceTwoData.push([Math.ceil(e.x), Math.ceil(e.y)]);
        });
      }

      if (faceOneData.length > 0 && faceTwoData.length > 0) {
        const distance = await calculateEuclideanDistance(
          faceOneData,
          faceTwoData,
        );
        //alert(distance)

        alert(distance);

        if (distance > 500) {
          // setErrorMessage('Image provided does not match face on the id. Please provide a clear id and image of yourself.')
          // setShowUploadComp(false)
          // setImageValidated(false)
          // setLoading(false)
        } else {
          // setImageValidated(true)
        }
      }

      setProcessing(false);

      if (queue.length > 0) {
        const { imageBase64, imageTwoBase64, resolve } = queue.shift();

        resolve(processFrame(imageBase64, imageTwoBase64));
      }
    } catch (error) {
      setProcessing(false);
    }
  };

  let dispose = async () => {
    if (queue.length > 0) setQueue([]);
  };

  return { processFrame, dispose };
};

export default useGetVideoFrameProcessor;
