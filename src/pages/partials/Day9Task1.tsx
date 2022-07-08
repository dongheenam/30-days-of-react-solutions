import React, { useEffect, useState } from "react";
import Box from "../../components/Box";

type TimeOfDay = "morning" | "noon" | "evening" | "night";
interface Time {
  hour: number;
  minute: number;
  second: number;
}
interface Rotation {
  hourRotation: number;
  minuteRotation: number;
  secondRotation: number;
}

// returns the current time
function updateTime(): Time {
  const date = new Date();
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

// returns the current time of day
function findTimeOfDay(time: Time): TimeOfDay {
  const { hour } = time;
  if (6 < hour && hour < 12) {
    return "morning";
  } else if (12 <= hour && hour < 18) {
    return "noon";
  } else if (18 <= hour && hour < 24) {
    return "evening";
  } else {
    return "night";
  }
}

function findRotation(time: Time): Rotation {
  const { hour, minute, second } = time;
  return {
    hourRotation: ((hour % 12) + minute / 60) / 12,
    minuteRotation: (minute + second / 60) / 60,
    secondRotation: second / 60,
  };
}

/* Hour, Minute, Second hands */
interface HandProps {
  rotation: number;
  className: string;
}
function Hand({ rotation, className }: HandProps) {
  const handColor = "bg-gray-700 dark:bg-gray-300";

  return (
    <div
      className={`absolute ${className}`}
      style={{
        transformOrigin: "50% 100%",
        transform: `translate(0%, -50%) rotate(${rotation}turn)`,
      }}
    />
  );
}

function Ticks() {
  const hours = [...Array(12)].map((_, idx) => idx);

  return (
    <React.Fragment>
      {hours.map((hour) => (
        <div
          className="absolute
          w-[1%] aspect-[1/10] bg-gray-700 dark:bg-gray-300"
          style={{
            transformOrigin: "50% 450%",
            transform: `translate(0%, -400%) rotate(${hour / 12}turn)`,
          }}
        ></div>
      ))}
    </React.Fragment>
  );
}

export default function Day9Task1() {
  const [time, setTime] = useState<Time>(updateTime());
  const [rotation, setRotation] = useState<Rotation>(findRotation(time));
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(findTimeOfDay(time));

  /* colors */
  const bgClass = {
    morning: "bg-primary-200 dark:bg-primary-800",
    noon: "bg-green-200 dark:bg-green-800",
    evening: "bg-amber-200 dark:bg-amber-800",
    night: "bg-gray-200 dark:bg-gray-800",
  };

  /* clock logics */
  // update time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(updateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // update hands
  useEffect(() => {
    setRotation(findRotation(time));
  }, [time.second]);

  /* background logics */
  useEffect(() => {
    setTimeOfDay(findTimeOfDay(time));
  }, [time.hour]);

  return (
    <>
      <h2>HTML Clock</h2>
      <Box>
        <div
          id="clock"
          className={`mx-auto my-8 w-[50%] aspect-square 
            ${bgClass[timeOfDay]}
            rounded-md border-4
            border-gray-500
            flex justify-center items-center relative`}
        >
          <Ticks />
          <div className="w-3 h-3 rounded-full bg-black dark:bg-white z-10"></div>
          <Hand
            rotation={rotation.hourRotation}
            className="w-[2%] aspect-[4/50] bg-gray-900 dark:bg-gray-100"
          />
          <Hand
            rotation={rotation.minuteRotation}
            className="w-[1%] aspect-[1/40] bg-gray-900 dark:bg-gray-100"
          />
          <Hand
            rotation={rotation.secondRotation}
            className="w-[0.5%] aspect-[1/80] bg-secondary-500"
          />
        </div>
      </Box>
    </>
  );
}
