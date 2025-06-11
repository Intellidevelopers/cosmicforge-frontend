import { ResponseBodyProps } from "../util/ApiResponseBodyProps";

interface PatientProfileUpdateProps {
  bloodPressure: string;
  bodyTemperature: string;
  homeAddress?: string;
  oxygenSaturation: string;
  weight: string;
  height: string;
  profileType: "personal" | "family";
  gender: "male" | "female";
  dateOfBirth: string;
}

export const setUpPatientProfile = async (
  data: PatientProfileUpdateProps,
  token: string,
) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_REST_URL}/user/patient/update-vital-signs`,
    {
      method: "put",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  const result = (await response.json()) as ResponseBodyProps;

  return result;
};
