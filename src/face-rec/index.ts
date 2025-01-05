import * as faceapi from "face-api.js";

const MODEL_URL = '/weights';

const labels = ['person1Images', 'person2Images'];

const labeledFaceDescriptors = await Promise.all(
    labels.map(async label => {
        await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
        await faceapi.loadFaceLandmarkModel(MODEL_URL);
        await faceapi.loadFaceRecognitionModel(MODEL_URL);

        let imgs;
        if (localStorage.getItem(label)) {
            imgs = JSON.parse(localStorage.getItem(label) || '');
            const img = await faceapi.fetchImage(imgs[0]);
            const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

            if (!fullFaceDescription) {
                throw new Error(`no faces detected for ${label}`);
            }
            const faceDescriptors = [fullFaceDescription.descriptor];
            return new faceapi.LabeledFaceDescriptors(label, faceDescriptors);
        }
    })
);

export const match = async (img: any) => {
    const im = await faceapi.fetchImage(img);
    let fullFaceDescriptions = await faceapi.detectAllFaces(im).withFaceLandmarks().withFaceDescriptors();
    const maxDescriptorDistance = 0.6;
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance);
    const results = fullFaceDescriptions.map(fd => faceMatcher.findBestMatch(fd.descriptor));
    return results;
};
