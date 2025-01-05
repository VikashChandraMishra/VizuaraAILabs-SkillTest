import * as faceapi from "face-api.js";

const MODEL_URL = '/weights';

export const detectFace = async (image: any) => {
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
    // let fullFaceDescriptions = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();
    console.log(await faceapi.fetchImage(image))
};