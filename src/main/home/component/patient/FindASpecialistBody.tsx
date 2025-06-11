import { useNavigate } from "react-router-dom";
import HomeNavBar from "./HomeNavBar";
import HomeMobileNavBar from "./HomeMobileNavBar";
import { SpecialistCardProps } from "../../component/patient/SpecialistCard";
import FindASpecialistCard from "../../component/patient/FindASpecialistCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { RootReducer } from "../../../store/initStore";
import { cacheSpecialistDetails } from "../../../store/reducers/specialistDetailsReducer";
import { getDoctorDeparments } from "../../service";
import Loader from "../../../generalComponents/Loader";
// import backNavigitionIcon from "../../../../assets/icons/cosmic-navigate-back.svg";

const FindASpecialistBody = () => {
  const navigate = useNavigate();

  const user = useSelector((state: RootReducer) => state.user);
  const specialistDetailsCache = useSelector(
    (state: RootReducer) => state.specialistDetails,
  );

  const [specialist, setSpecialist] = useState<
    | [
        {
          name?: string;
          image?: string;
          backgroundImage?: string;
          bodyText?: string;
        },
      ]
    | null
  >(null);

  const [specialistCache, setSpecialistCache] = useState<
    | [
        {
          name?: string;
          image?: string;
          backgroundImage?: string;
          bodyText?: string;
        },
      ]
    | null
  >(null);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  useMemo(() => {
    if (specialistDetailsCache.specialists) {
      setSpecialist(specialistDetailsCache.specialists);
      setSpecialistCache(specialistDetailsCache.specialists);
    }
  }, [specialistDetailsCache]);

  useEffect(() => {
    (async () => {
      if (specialistDetailsCache.specialists === null) {
        setLoading(true);
        try {
          const result = await getDoctorDeparments(user.data?.token!!);
          setLoading(false);
          setRefresh(false);

          if (result.status === 200) {
            dispatch(cacheSpecialistDetails({ specialists: result.data }));

            return;
          }
        } catch (error) {
          setLoading(false);
          setRefresh(false);
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (specialistDetailsCache.specialists === null) {
        try {
          setLoading(true);

          const result = await getDoctorDeparments(user.data?.token!!);
          setLoading(false);
          setRefresh(false);

          if (result.status === 200) {
            dispatch(cacheSpecialistDetails({ specialists: result.data }));

            return;
          }
        } catch (error) {
          setTimeout(() => {
            setLoading(false);
            setRefresh(false);
          }, 2 * 1000);
        }
      }
    })();
  }, [refresh]);

  return (
    <div className=" w-full  relative  h-dvh overflow-x-hidden    overflow-y-auto flex flex-col cursor-default">
      <HomeNavBar
        title="Find A Specialist"
        onSearchFired={(path, query) => {
          if (path === "Find A Specialist") {
            if (query && specialistCache) {
              const filter = specialistCache.filter((specialist) => {
                return new RegExp(`^${query.toLocaleLowerCase()}`).test(
                  specialist.name?.toLocaleLowerCase()!!,
                );
              });

              if (filter.length > 0) {
                setSpecialist(
                  filter as [
                    {
                      name?: string;
                      image?: string;
                      backgroundImage?: string;
                      bodyText?: string;
                    },
                  ],
                );
              }
            } else {
              setSpecialist(specialistCache);
            }
          }
        }}
      />

      <HomeMobileNavBar title="Find A Specialist" onSearchFired={() => {}} />

      <div className=" ps-0   pe-10   ">
        <div
          className="w-full m-5 flex place-items-center gap-3"
          onClick={() => {
            navigate(-1);
          }}
        >
          {/* <img src={backNavigitionIcon}  onClick={() => {
              navigate(-1);
            }} alt='back'/>
          <p
            className="font-light "
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </p> */}
        </div>
        <div className="w-full h-full ">
          {loading && (
            <div className="w-full h-[100vh] flex justify-center place-items-center ">
              <Loader size="80px" />
            </div>
          )}

          {!loading && specialist === null && (
            <div className="w-full h-[100vh] flex justify-center place-items-center ">
              <p>
                failed to fetch please{" "}
                <span
                  className="underline decoration-cosmic-primary-color text-cosmic-primary-color"
                  onClick={() => {
                    setRefresh(true);
                  }}
                >
                  refresh
                </span>
              </p>
            </div>
          )}
          {specialist?.map((item: SpecialistCardProps, index) => (
            <FindASpecialistCard
              key={index}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindASpecialistBody;
