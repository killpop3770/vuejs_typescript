import Cam from "@/store/modules/Cam";

const cam0: Cam = new Cam("My_Cam_Model_01");

export default function getCamName() : void {
    console.log(cam0.camModel);
}