import { ResponseBodyProps } from "../util/ApiResponseBodyProps";

export const getDoctorDeparments = async (token: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_REST_URL}/medics/doctor/departments`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  const result = (await response.json()) as ResponseBodyProps;

  return result;
};

export const getDoctorsBySpecificDeparment = async (
  token: string,
  department: string,
) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_REST_URL}/medics/doctor/department/all`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        department,
      }),
    },
  );

  const result = (await response.json()) as ResponseBodyProps;

  return result;
};
